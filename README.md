# sk-juridico-v170-electron-1 — Android WebView APK

Projeto Android puro gerado pelo **APK Builder** (sem Capacitor, sem npm, sem Node.js).

## Estrutura
```
android/
├── app/
│   ├── build.gradle
│   └── src/main/
│       ├── assets/        ← Seus arquivos web (HTML/CSS/JS)
│       ├── java/.../
│       │   └── MainActivity.java
│       └── AndroidManifest.xml
├── build.gradle
├── settings.gradle
└── gradlew
.github/workflows/build-apk.yml  ← CI automático
```

## Config
- **Package:** `com.github.skjuridicov170electron1`
- **Versão:** 1.0.0 (code: 1)
- **Min SDK:** Android 24+
- **Target SDK:** 35
- **AGP:** 8.7.3
- **Gradle:** 8.11.1
- **Orientação:** any
- **Dependências:** apenas `androidx.appcompat:appcompat:1.7.0`

## Opções para compilar

### ✅ Opção 1 — GitHub Actions (Gratuito, Automático)
1. Crie um repositório no GitHub
2. Faça push deste projeto: `git init && git add . && git commit -m "APK" && git remote add origin URL && git push`
3. O build inicia automaticamente → aguarde ~5 min
4. Baixe o APK em: **Repositório → Releases → latest-apk**

### 🖥️ Opção 2 — Android Studio (Local)
1. Instale [Android Studio](https://developer.android.com/studio)
2. Abra a pasta `android/` no Android Studio
3. **Build → Build Bundle(s)/APK(s) → Build APK(s)**
4. APK em: `android/app/build/outputs/apk/debug/`

### 💻 Opção 3 — Terminal Linux/Mac
```bash
# Precisa de: Java 17 e Android SDK
export ANDROID_HOME=/path/to/sdk
cd android && chmod +x gradlew && ./gradlew assembleDebug
```
