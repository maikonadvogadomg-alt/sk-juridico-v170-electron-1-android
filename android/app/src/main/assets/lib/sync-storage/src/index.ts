/**
 * SyncStorage — localStorage + IndexedDB fallback
 * SK Jurídico IA v1.3.0
 *
 * API unificada que tenta localStorage primeiro.
 * Se o browser bloquear (modo incógnito, quota, iframe restrito),
 * usa IndexedDB como fallback automático.
 * Em ambientes sem localStorage nem IndexedDB (SSR/Node), usa Map em memória.
 */

const DB_NAME = "sk_juridico_storage";
const STORE_NAME = "kv";
const DB_VERSION = 1;

// ── IndexedDB helpers ─────────────────────────────────────────────────────────

function openIdb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE_NAME);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function idbGet(db: IDBDatabase, key: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const req = tx.objectStore(STORE_NAME).get(key);
    req.onsuccess = () => resolve(req.result ?? null);
    req.onerror = () => reject(req.error);
  });
}

function idbSet(db: IDBDatabase, key: string, value: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function idbDelete(db: IDBDatabase, key: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function idbGetAll(db: IDBDatabase): Promise<Record<string, string>> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const result: Record<string, string> = {};
    const keysReq = store.getAllKeys();
    const valsReq = store.getAll();
    let done = 0;
    const check = () => {
      done++;
      if (done === 2) {
        const keys = keysReq.result as string[];
        const vals = valsReq.result as string[];
        keys.forEach((k, i) => { result[k] = vals[i]; });
        resolve(result);
      }
    };
    keysReq.onsuccess = check;
    valsReq.onsuccess = check;
    keysReq.onerror = () => reject(keysReq.error);
    valsReq.onerror = () => reject(valsReq.error);
  });
}

// ── localStorage helpers ──────────────────────────────────────────────────────

function lsAvailable(): boolean {
  try {
    const t = "__sk_test__";
    localStorage.setItem(t, "1");
    localStorage.removeItem(t);
    return true;
  } catch {
    return false;
  }
}

// ── In-memory fallback ────────────────────────────────────────────────────────

const memStore = new Map<string, string>();

// ── SyncStorage class ─────────────────────────────────────────────────────────

export class SyncStorage {
  private idb: IDBDatabase | null = null;
  private useLocalStorage: boolean;
  private idbAvailable: boolean;
  private ready: Promise<void>;

  constructor() {
    this.useLocalStorage = typeof window !== "undefined" && lsAvailable();
    this.idbAvailable = typeof indexedDB !== "undefined";
    this.ready = this._init();
  }

  private async _init(): Promise<void> {
    if (!this.useLocalStorage && this.idbAvailable) {
      try {
        this.idb = await openIdb();
      } catch {
        this.idb = null;
      }
    }
  }

  async get(key: string): Promise<string | null> {
    await this.ready;
    if (this.useLocalStorage) {
      return localStorage.getItem(key);
    }
    if (this.idb) {
      return idbGet(this.idb, key);
    }
    return memStore.get(key) ?? null;
  }

  async set(key: string, value: string): Promise<void> {
    await this.ready;
    if (this.useLocalStorage) {
      try {
        localStorage.setItem(key, value);
        // Também persiste no IndexedDB para redundância
        if (this.idb) idbSet(this.idb, key, value).catch(() => {});
        return;
      } catch {
        // localStorage cheio — tenta IndexedDB
      }
    }
    if (this.idb) {
      await idbSet(this.idb, key, value);
      return;
    }
    memStore.set(key, value);
  }

  async delete(key: string): Promise<void> {
    await this.ready;
    if (this.useLocalStorage) localStorage.removeItem(key);
    if (this.idb) await idbDelete(this.idb, key).catch(() => {});
    memStore.delete(key);
  }

  async getAll(): Promise<Record<string, string>> {
    await this.ready;
    if (this.useLocalStorage) {
      const result: Record<string, string> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k) result[k] = localStorage.getItem(k) ?? "";
      }
      return result;
    }
    if (this.idb) return idbGetAll(this.idb);
    return Object.fromEntries(memStore);
  }

  async has(key: string): Promise<boolean> {
    return (await this.get(key)) !== null;
  }

  async clear(): Promise<void> {
    await this.ready;
    if (this.useLocalStorage) localStorage.clear();
    if (this.idb) {
      const tx = this.idb.transaction(STORE_NAME, "readwrite");
      tx.objectStore(STORE_NAME).clear();
    }
    memStore.clear();
  }

  /** Lê JSON, retornando null se inválido */
  async getJson<T>(key: string): Promise<T | null> {
    const raw = await this.get(key);
    if (!raw) return null;
    try { return JSON.parse(raw) as T; } catch { return null; }
  }

  /** Salva como JSON */
  async setJson<T>(key: string, value: T): Promise<void> {
    await this.set(key, JSON.stringify(value));
  }

  /** Retorna string ou valor padrão */
  async getOr(key: string, defaultValue: string): Promise<string> {
    return (await this.get(key)) ?? defaultValue;
  }

  /** Retorna qual backend está em uso */
  get backend(): "localStorage" | "indexedDB" | "memory" {
    if (this.useLocalStorage) return "localStorage";
    if (this.idb) return "indexedDB";
    return "memory";
  }
}

/** Instância global singleton */
export const syncStorage = new SyncStorage();

/** Helpers rápidos para uso com a instância global */
export const skStorage = {
  get: (key: string) => syncStorage.get(key),
  set: (key: string, value: string) => syncStorage.set(key, value),
  delete: (key: string) => syncStorage.delete(key),
  getJson: <T>(key: string) => syncStorage.getJson<T>(key),
  setJson: <T>(key: string, value: T) => syncStorage.setJson(key, value),
  getOr: (key: string, def: string) => syncStorage.getOr(key, def),
  has: (key: string) => syncStorage.has(key),
  getAll: () => syncStorage.getAll(),
  backend: () => syncStorage.backend,
};

export default syncStorage;
