#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────────────
# SK Jurídico IA — Script de inicialização local
# Uso: ./start-local.sh
# ──────────────────────────────────────────────────────────────────────────────
set -e

VERDE='\033[0;32m'
AZUL='\033[0;34m'
AMARELO='\033[1;33m'
VERMELHO='\033[0;31m'
NC='\033[0m'

echo -e "${AZUL}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${AZUL}       SK Jurídico IA — Inicialização Local         ${NC}"
echo -e "${AZUL}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Verifica pré-requisitos
check_command() {
  if ! command -v "$1" &> /dev/null; then
    echo -e "${VERMELHO}✗ '$1' não encontrado. Instale antes de continuar.${NC}"
    exit 1
  fi
}

check_command node
check_command pnpm

NODE_VER=$(node --version | sed 's/v//')
NODE_MAJOR=$(echo "$NODE_VER" | cut -d. -f1)
if [ "$NODE_MAJOR" -lt 20 ]; then
  echo -e "${VERMELHO}✗ Node.js $NODE_VER detectado. Mínimo: v20.${NC}"
  echo -e "  Instale via: https://nodejs.org ou 'nvm install 20'"
  exit 1
fi
echo -e "${VERDE}✓ Node.js v$NODE_VER${NC}"

# Cria .env se não existir
if [ ! -f ".env" ]; then
  if [ -f ".env.example" ]; then
    cp .env.example .env
    echo -e "${AMARELO}⚠ Arquivo .env criado a partir de .env.example${NC}"
    echo -e "${AMARELO}  → Edite .env e configure DATABASE_URL e SESSION_SECRET${NC}"
  else
    echo -e "${VERMELHO}✗ .env.example não encontrado. Crie o arquivo .env manualmente.${NC}"
    exit 1
  fi
fi

# Carrega .env
set -a
source .env 2>/dev/null || true
set +a

# Verifica DATABASE_URL
if [ -z "$DATABASE_URL" ]; then
  echo -e "${AMARELO}⚠ DATABASE_URL não definida no .env${NC}"
  echo -e "  Opções:"
  echo -e "  1. PostgreSQL local: postgresql://sk_user:sk_pass@localhost:5432/sk_juridico"
  echo -e "  2. Neon (grátis): https://neon.tech"
  echo -e "  3. Supabase (grátis): https://supabase.com"
  echo -e "${AMARELO}  O sistema usará armazenamento em memória (dados perdidos ao reiniciar)${NC}"
fi

# Instala dependências
echo -e "\n${AZUL}→ Instalando dependências...${NC}"
pnpm install --frozen-lockfile 2>/dev/null || pnpm install

# Aplica migrations do banco (se DATABASE_URL definida)
if [ -n "$DATABASE_URL" ]; then
  echo -e "\n${AZUL}→ Aplicando migrações do banco de dados...${NC}"
  pnpm --filter @workspace/db run push 2>/dev/null || echo -e "${AMARELO}  Migração pulada (banco indisponível)${NC}"
fi

# Build
echo -e "\n${AZUL}→ Compilando API server...${NC}"
BASE_PATH="/api" PORT=8080 pnpm --filter @workspace/api-server run build

echo -e "\n${VERDE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${VERDE}  Iniciando servidor...${NC}"
echo -e "${VERDE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "  API:      http://localhost:8080/api"
echo -e "  Frontend: http://localhost:5173"
echo -e "  (Pressione Ctrl+C para parar)\n"

# Inicia ambos em paralelo com trap para limpeza
cleanup() {
  echo -e "\n${AMARELO}Encerrando processos...${NC}"
  kill "$API_PID" "$VITE_PID" 2>/dev/null || true
  exit 0
}
trap cleanup INT TERM

# API server (produção)
PORT=8080 BASE_PATH="/api" NODE_ENV=production \
  node --enable-source-maps artifacts/api-server/dist/index.mjs &
API_PID=$!

# Frontend (modo dev ou produção)
if [ "${PROD:-0}" = "1" ]; then
  # Modo produção: serve o build estático
  PORT=5173 BASE_PATH="/" pnpm --filter @workspace/assistente-juridico run build
  npx serve -l 5173 artifacts/assistente-juridico/dist/public &
else
  # Modo dev: Vite com hot reload
  PORT=5173 BASE_PATH="/" pnpm --filter @workspace/assistente-juridico run dev &
fi
VITE_PID=$!

# Aguarda ambos
wait "$API_PID" "$VITE_PID"
