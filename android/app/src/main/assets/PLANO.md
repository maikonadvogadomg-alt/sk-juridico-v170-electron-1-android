# PLANO DO PROJETO: sk-juridico-v1.7.0-electron (1)

> Gerado automaticamente pelo SK Code Editor em 25/05/2026, 00:24:50
> **150 arquivo(s)** | **~42.841 linhas de codigo**

---

## RESUMO EXECUTIVO

- **Tipo de aplicacao:** Aplicacao Web Frontend (React)
- **Frontend / Stack principal:** React, TypeScript
- **Versao:** 0.0.0

**Para rodar o projeto:**
```bash
# Abra index.html no Preview (botao Play)
```

---

## ESTRUTURA DE ARQUIVOS

```
sk-juridico-v1.7.0-electron (1)/
├── artifacts/
│   ├── api-server/
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   └── logger.ts
│   │   │   ├── middleware/
│   │   │   │   └── jwt-auth.ts
│   │   │   ├── routes/
│   │   │   │   ├── ai.ts
│   │   │   │   ├── assinatura.ts
│   │   │   │   ├── auth-jwt.ts
│   │   │   │   ├── colaborativo.ts
│   │   │   │   ├── crud.ts
│   │   │   │   ├── drive-sync.ts
│   │   │   │   ├── extra.ts
│   │   │   │   ├── health.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── integracoes.ts
│   │   │   │   ├── jurisprudencia.ts
│   │   │   │   ├── pje.ts
│   │   │   │   ├── prazos.ts
│   │   │   │   ├── settings.ts
│   │   │   │   ├── status.ts
│   │   │   │   └── upload.ts
│   │   │   ├── app.ts
│   │   │   ├── file-storage.ts
│   │   │   ├── index.ts
│   │   │   ├── local-config.ts
│   │   │   └── storage.ts
│   │   ├── build.mjs
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── assistente-juridico/
│   │   ├── public/
│   │   │   ├── favicon.svg
│   │   │   ├── manifest.json
│   │   │   ├── robots.txt
│   │   │   └── sw.js
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/
│   │   │   │   │   ├── accordion.tsx
│   │   │   │   │   ├── alert-dialog.tsx
│   │   │   │   │   ├── alert.tsx
│   │   │   │   │   ├── aspect-ratio.tsx
│   │   │   │   │   ├── avatar.tsx
│   │   │   │   │   ├── badge.tsx
│   │   │   │   │   ├── breadcrumb.tsx
│   │   │   │   │   ├── button-group.tsx
│   │   │   │   │   ├── button.tsx
│   │   │   │   │   ├── calendar.tsx
│   │   │   │   │   ├── card.tsx
│   │   │   │   │   ├── carousel.tsx
│   │   │   │   │   ├── chart.tsx
│   │   │   │   │   ├── checkbox.tsx
│   │   │   │   │   ├── collapsible.tsx
│   │   │   │   │   ├── command.tsx
│   │   │   │   │   ├── context-menu.tsx
│   │   │   │   │   ├── dialog.tsx
│   │   │   │   │   ├── drawer.tsx
│   │   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   │   ├── empty.tsx
│   │   │   │   │   ├── field.tsx
│   │   │   │   │   ├── form.tsx
│   │   │   │   │   ├── hover-card.tsx
│   │   │   │   │   ├── input-group.tsx
│   │   │   │   │   ├── input-otp.tsx
│   │   │   │   │   ├── input.tsx
│   │   │   │   │   ├── item.tsx
│   │   │   │   │   ├── kbd.tsx
│   │   │   │   │   ├── label.tsx
│   │   │   │   │   ├── menubar.tsx
│   │   │   │   │   ├── navigation-menu.tsx
│   │   │   │   │   ├── pagination.tsx
│   │   │   │   │   ├── popover.tsx
│   │   │   │   │   ├── progress.tsx
│   │   │   │   │   ├── radio-group.tsx
│   │   │   │   │   ├── resizable.tsx
│   │   │   │   │   ├── scroll-area.tsx
│   │   │   │   │   ├── select.tsx
│   │   │   │   │   ├── separator.tsx
│   │   │   │   │   ├── sheet.tsx
│   │   │   │   │   ├── sidebar.tsx
│   │   │   │   │   ├── skeleton.tsx
│   │   │   │   │   ├── slider.tsx
│   │   │   │   │   ├── sonner.tsx
│   │   │   │   │   ├── spinner.tsx
│   │   │   │   │   ├── switch.tsx
│   │   │   │   │   ├── table.tsx
│   │   │   │   │   ├── tabs.tsx
│   │   │   │   │   ├── textarea.tsx
│   │   │   │   │   ├── toast.tsx
│   │   │   │   │   ├── toaster.tsx
│   │   │   │   │   ├── toggle-group.tsx
│   │   │   │   │   ├── toggle.tsx
│   │   │   │   │   └── tooltip.tsx
│   │   │   │   ├── pwa-install.tsx
│   │   │   │   ├── theme-provider.tsx
│   │   │   │   ├── theme-toggle.tsx
│   │   │   │   └── tiptap-editor.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── use-mobile.tsx
│   │   │   │   └── use-toast.ts
│   │   │   ├── lib/
│   │   │   │   ├── legal-formatter.ts
│   │   │   │   ├── queryClient.ts
│   │   │   │   ├── sync-storage.ts
│   │   │   │   └── utils.ts
│   │   │   ├── pages/
│   │   │   │   ├── admin.tsx
│   │   │   │   ├── assinatura.tsx
│   │   │   │   ├── auditoria-financeira.tsx
│   │   │   │   ├── codigo.tsx
│   │   │   │   ├── colaborativo.tsx
│   │   │   │   ├── comparador-juridico.tsx
│   │   │   │   ├── comunicacoes-cnj.tsx
│   │   │   │   ├── configuracoes.tsx
│   │   │   │   ├── consulta-corporativo.tsx
│   │   │   │   ├── consulta-pdpj.tsx
│   │   │   │   ├── consulta-processual.tsx
│   │   │   │   ├── ementas.tsx
│   │   │   │   ├── escritorio.tsx
│   │   │   │   ├── filtrador.tsx
│   │   │   │   ├── historico.tsx
│   │   │   │   ├── jurisprudencia.tsx
│   │   │   │   ├── legal-assistant.tsx
│   │   │   │   ├── login.tsx
│   │   │   │   ├── not-found.tsx
│   │   │   │   ├── painel-processos.tsx
│   │   │   │   ├── pje.tsx
│   │   │   │   ├── playground.tsx
│   │   │   │   ├── prazos.tsx
│   │   │   │   ├── previdenciario.tsx
│   │   │   │   ├── robo-djen.tsx
│   │   │   │   ├── status.tsx
│   │   │   │   ├── templates-juridicos.tsx
│   │   │   │   ├── token-generator.tsx
│   │   │   │   └── tramitacao.tsx
│   │   │   ├── App.tsx
│   │   │   ├── index.css
│   │   │   └── main.tsx
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   └── desktop/
│       ├── main.js
│       ├── package.json
│       └── preload.js
├── lib/
│   ├── db/
│   │   ├── src/
│   │   │   ├── schema/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── drizzle.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── sync-storage/
│       └── src/
│           └── index.ts
├── scripts/
│   └── src/
│       └── hello.ts
├── .env.example
├── capacitor.config.ts
├── docker-compose.yml
├── MANUAL.md
├── package.json
├── pnpm-workspace.yaml
├── start-local.sh
├── tsconfig.base.json
└── tsconfig.json
```

---

## STACK TECNOLOGICO DETECTADO

- **Frontend:** React, TypeScript
- **Todos os pacotes (5):** @capacitor/android, @capacitor/cli, @capacitor/core, prettier, typescript

---

## ROTAS DA API (endpoints detectados automaticamente)

```
USE    /api  (em artifacts/api-server/src/app.ts)
USE    /api/ai  (em artifacts/api-server/src/app.ts)
USE    /api  (em artifacts/api-server/src/app.ts)
POST   /ai/process  (em artifacts/api-server/src/routes/ai.ts)
POST   /ai/refine  (em artifacts/api-server/src/routes/ai.ts)
POST   /code-assistant  (em artifacts/api-server/src/routes/ai.ts)
POST   /voice-chat  (em artifacts/api-server/src/routes/ai.ts)
POST   /demo-key-test  (em artifacts/api-server/src/routes/ai.ts)
POST   /ai-usage-credit  (em artifacts/api-server/src/routes/ai.ts)
POST   /assinatura/hash  (em artifacts/api-server/src/routes/assinatura.ts)
POST   /assinatura/birdid/authorize  (em artifacts/api-server/src/routes/assinatura.ts)
POST   /assinatura/birdid/token  (em artifacts/api-server/src/routes/assinatura.ts)
GET    /assinatura/birdid/certificado  (em artifacts/api-server/src/routes/assinatura.ts)
POST   /assinatura/birdid/assinar  (em artifacts/api-server/src/routes/assinatura.ts)
POST   /assinatura/vidaas/authorize  (em artifacts/api-server/src/routes/assinatura.ts)
GET    /assinatura/lista  (em artifacts/api-server/src/routes/assinatura.ts)
POST   /assinatura/verificar  (em artifacts/api-server/src/routes/assinatura.ts)
GET    /assinatura/config/status  (em artifacts/api-server/src/routes/assinatura.ts)
POST   /auth/escritorio/registro  (em artifacts/api-server/src/routes/auth-jwt.ts)
POST   /auth/escritorio/login  (em artifacts/api-server/src/routes/auth-jwt.ts)
POST   /auth/escritorio/refresh  (em artifacts/api-server/src/routes/auth-jwt.ts)
POST   /auth/escritorio/logout  (em artifacts/api-server/src/routes/auth-jwt.ts)
GET    /auth/escritorio/perfil  (em artifacts/api-server/src/routes/auth-jwt.ts)
PUT    /auth/escritorio/perfil  (em artifacts/api-server/src/routes/auth-jwt.ts)
GET    /auth/escritorio/usuarios  (em artifacts/api-server/src/routes/auth-jwt.ts)
POST   /auth/escritorio/usuario  (em artifacts/api-server/src/routes/auth-jwt.ts)
DELETE /auth/escritorio/usuario/:id  (em artifacts/api-server/src/routes/auth-jwt.ts)
GET    /auth/escritorio/check  (em artifacts/api-server/src/routes/auth-jwt.ts)
GET    /collab/rooms  (em artifacts/api-server/src/routes/colaborativo.ts)
POST   /collab/rooms  (em artifacts/api-server/src/routes/colaborativo.ts)
GET    /collab/rooms/:id  (em artifacts/api-server/src/routes/colaborativo.ts)
POST   /collab/rooms/:id/join  (em artifacts/api-server/src/routes/colaborativo.ts)
POST   /collab/rooms/:id/update  (em artifacts/api-server/src/routes/colaborativo.ts)
POST   /collab/rooms/:id/cursor  (em artifacts/api-server/src/routes/colaborativo.ts)
GET    /collab/rooms/:id/events  (em artifacts/api-server/src/routes/colaborativo.ts)
GET    /collab/rooms/:id/history  (em artifacts/api-server/src/routes/colaborativo.ts)
DELETE /collab/rooms/:id/leave  (em artifacts/api-server/src/routes/colaborativo.ts)
GET    /snippets  (em artifacts/api-server/src/routes/crud.ts)
GET    /snippets/:id  (em artifacts/api-server/src/routes/crud.ts)
POST   /snippets  (em artifacts/api-server/src/routes/crud.ts)
PATCH  /snippets/:id  (em artifacts/api-server/src/routes/crud.ts)
DELETE /snippets/:id  (em artifacts/api-server/src/routes/crud.ts)
GET    /custom-actions  (em artifacts/api-server/src/routes/crud.ts)
POST   /custom-actions  (em artifacts/api-server/src/routes/crud.ts)
PATCH  /custom-actions/:id  (em artifacts/api-server/src/routes/crud.ts)
DELETE /custom-actions/:id  (em artifacts/api-server/src/routes/crud.ts)
GET    /ementas  (em artifacts/api-server/src/routes/crud.ts)
POST   /ementas  (em artifacts/api-server/src/routes/crud.ts)
PATCH  /ementas/:id  (em artifacts/api-server/src/routes/crud.ts)
DELETE /ementas/:id  (em artifacts/api-server/src/routes/crud.ts)
GET    /ai-history  (em artifacts/api-server/src/routes/crud.ts)
POST   /ai-history  (em artifacts/api-server/src/routes/crud.ts)
DELETE /ai-history/:id  (em artifacts/api-server/src/routes/crud.ts)
DELETE /ai-history  (em artifacts/api-server/src/routes/crud.ts)
GET    /prompt-templates  (em artifacts/api-server/src/routes/crud.ts)
POST   /prompt-templates  (em artifacts/api-server/src/routes/crud.ts)
PATCH  /prompt-templates/:id  (em artifacts/api-server/src/routes/crud.ts)
DELETE /prompt-templates/:id  (em artifacts/api-server/src/routes/crud.ts)
GET    /doc-templates  (em artifacts/api-server/src/routes/crud.ts)
POST   /doc-templates  (em artifacts/api-server/src/routes/crud.ts)
PATCH  /doc-templates/:id  (em artifacts/api-server/src/routes/crud.ts)
DELETE /doc-templates/:id  (em artifacts/api-server/src/routes/crud.ts)
GET    /processos-monitorados  (em artifacts/api-server/src/routes/crud.ts)
POST   /processos-monitorados  (em artifacts/api-server/src/routes/crud.ts)
PATCH  /processos-monitorados/:id  (em artifacts/api-server/src/routes/crud.ts)
DELETE /processos-monitorados/:id  (em artifacts/api-server/src/routes/crud.ts)
POST   /share/parecer  (em artifacts/api-server/src/routes/crud.ts)
GET    /tramitacao/publicacoes  (em artifacts/api-server/src/routes/crud.ts)
PATCH  /tramitacao/publicacoes/:id/lida  (em artifacts/api-server/src/routes/crud.ts)
POST   /webhooks/tramitacao  (em artifacts/api-server/src/routes/crud.ts)
GET    /ai-usage-summary  (em artifacts/api-server/src/routes/crud.ts)
POST   /drive/upload  (em artifacts/api-server/src/routes/drive-sync.ts)
GET    /drive/listar  (em artifacts/api-server/src/routes/drive-sync.ts)
GET    /drive/download/:fileId  (em artifacts/api-server/src/routes/drive-sync.ts)
DELETE /drive/arquivo/:fileId  (em artifacts/api-server/src/routes/drive-sync.ts)
POST   /drive/sync/push  (em artifacts/api-server/src/routes/drive-sync.ts)
POST   /drive/oauth/refresh  (em artifacts/api-server/src/routes/drive-sync.ts)
GET    /drive/sync/status  (em artifacts/api-server/src/routes/drive-sync.ts)
GET    /drive/config/status  (em artifacts/api-server/src/routes/drive-sync.ts)
POST   /jwt/generate  (em artifacts/api-server/src/routes/extra.ts)
GET    /jwt/status  (em artifacts/api-server/src/routes/extra.ts)
GET    /datajud/tribunais  (em artifacts/api-server/src/routes/extra.ts)
POST   /datajud/consulta  (em artifacts/api-server/src/routes/extra.ts)
POST   /datajud/consulta-oab  (em artifacts/api-server/src/routes/extra.ts)
GET    /corporativo/advogado/cpf/:cpf  (em artifacts/api-server/src/routes/extra.ts)
GET    /corporativo/advogado/oab/:uf/:inscricao  (em artifacts/api-server/src/routes/extra.ts)
GET    /corporativo/magistrados/:tribunal  (em artifacts/api-server/src/routes/extra.ts)
GET    /pdpj/status  (em artifacts/api-server/src/routes/extra.ts)
POST   /pdpj/test-connection  (em artifacts/api-server/src/routes/extra.ts)
POST   /pdpj/comunicacoes  (em artifacts/api-server/src/routes/extra.ts)
POST   /pdpj/representados  (em artifacts/api-server/src/routes/extra.ts)
POST   /pdpj/habilitacao  (em artifacts/api-server/src/routes/extra.ts)
POST   /pdpj/pessoa  (em artifacts/api-server/src/routes/extra.ts)
POST   /cnj/comunicacoes  (em artifacts/api-server/src/routes/extra.ts)
POST   /code/run  (em artifacts/api-server/src/routes/extra.ts)
POST   /previdenciario/extrair  (em artifacts/api-server/src/routes/extra.ts)
GET    /pesquisa/oab  (em artifacts/api-server/src/routes/extra.ts)
GET    /pesquisa/processo  (em artifacts/api-server/src/routes/extra.ts)
GET    /djen/config  (em artifacts/api-server/src/routes/extra.ts)
POST   /djen/gerar-token  (em artifacts/api-server/src/routes/extra.ts)
POST   /export/word  (em artifacts/api-server/src/routes/extra.ts)
POST   /template/vars/preview  (em artifacts/api-server/src/routes/extra.ts)
GET    /template/vars/lista  (em artifacts/api-server/src/routes/extra.ts)
POST   /export/word-with-template  (em artifacts/api-server/src/routes/extra.ts)
POST   /doc-templates/upload-docx  (em artifacts/api-server/src/routes/extra.ts)
GET    /tramitacao/test  (em artifacts/api-server/src/routes/extra.ts)
GET    /tramitacao/clientes  (em artifacts/api-server/src/routes/extra.ts)
POST   /tramitacao/clientes  (em artifacts/api-server/src/routes/extra.ts)
GET    /tramitacao/clientes/:id  (em artifacts/api-server/src/routes/extra.ts)
PATCH  /tramitacao/clientes/:id  (em artifacts/api-server/src/routes/extra.ts)
GET    /tramitacao/usuarios  (em artifacts/api-server/src/routes/extra.ts)
GET    /tramitacao/notas  (em artifacts/api-server/src/routes/extra.ts)
POST   /tramitacao/notas  (em artifacts/api-server/src/routes/extra.ts)
DELETE /tramitacao/notas/:id  (em artifacts/api-server/src/routes/extra.ts)
GET    /export/download-package  (em artifacts/api-server/src/routes/extra.ts)
GET    /settings/:key  (em artifacts/api-server/src/routes/extra.ts)
PUT    /settings/:key  (em artifacts/api-server/src/routes/extra.ts)
GET    /healthz  (em artifacts/api-server/src/routes/health.ts)
GET    /integracoes/status  (em artifacts/api-server/src/routes/integracoes.ts)
POST   /integracoes/credenciais  (em artifacts/api-server/src/routes/integracoes.ts)
DELETE /integracoes/credenciais/:sistema  (em artifacts/api-server/src/routes/integracoes.ts)
POST   /integracoes/esaj/consulta  (em artifacts/api-server/src/routes/integracoes.ts)
POST   /integracoes/projudi/consulta  (em artifacts/api-server/src/routes/integracoes.ts)
POST   /integracoes/eproc/consulta  (em artifacts/api-server/src/routes/integracoes.ts)
POST   /integracoes/pjud/consulta  (em artifacts/api-server/src/routes/integracoes.ts)
POST   /settings/key-detect  (em artifacts/api-server/src/routes/integracoes.ts)
GET    /integracoes/sistemas  (em artifacts/api-server/src/routes/integracoes.ts)
POST   /integracoes/stf/buscar  (em artifacts/api-server/src/routes/integracoes.ts)
POST   /integracoes/stj/buscar  (em artifacts/api-server/src/routes/integracoes.ts)
POST   /integracoes/tjsp/processo  (em artifacts/api-server/src/routes/integracoes.ts)
POST   /integracoes/tst/buscar  (em artifacts/api-server/src/routes/integracoes.ts)
GET    /jurisprudencia/tribunais  (em artifacts/api-server/src/routes/jurisprudencia.ts)
POST   /jurisprudencia/buscar  (em artifacts/api-server/src/routes/jurisprudencia.ts)
POST   /jurisprudencia/processo  (em artifacts/api-server/src/routes/jurisprudencia.ts)
POST   /jurisprudencia/buscar-ia  (em artifacts/api-server/src/routes/jurisprudencia.ts)
GET    /pje/consulta/:numero  (em artifacts/api-server/src/routes/pje.ts)
POST   /pje/consulta  (em artifacts/api-server/src/routes/pje.ts)
GET    /pje/movimentos/:numero  (em artifacts/api-server/src/routes/pje.ts)
GET    /pje/tribunais  (em artifacts/api-server/src/routes/pje.ts)
GET    /pje/config/status  (em artifacts/api-server/src/routes/pje.ts)
GET    /prazos  (em artifacts/api-server/src/routes/prazos.ts)
GET    /prazos/alertas  (em artifacts/api-server/src/routes/prazos.ts)
POST   /prazos  (em artifacts/api-server/src/routes/prazos.ts)
PUT    /prazos/:id  (em artifacts/api-server/src/routes/prazos.ts)
PUT    /prazos/:id/status  (em artifacts/api-server/src/routes/prazos.ts)
DELETE /prazos/:id  (em artifacts/api-server/src/routes/prazos.ts)
POST   /prazos/fcm/token  (em artifacts/api-server/src/routes/prazos.ts)
DELETE /prazos/fcm/token  (em artifacts/api-server/src/routes/prazos.ts)
POST   /prazos/fcm/test  (em artifacts/api-server/src/routes/prazos.ts)
GET    /auth/check  (em artifacts/api-server/src/routes/settings.ts)
POST   /auth/login  (em artifacts/api-server/src/routes/settings.ts)
POST   /auth/logout  (em artifacts/api-server/src/routes/settings.ts)
GET    /settings/ai-config  (em artifacts/api-server/src/routes/settings.ts)
PUT    /settings/ai-config  (em artifacts/api-server/src/routes/settings.ts)
GET    /settings/system-status  (em artifacts/api-server/src/routes/settings.ts)
PUT    /settings/app-password  (em artifacts/api-server/src/routes/settings.ts)
POST   /settings/database-reconnect  (em artifacts/api-server/src/routes/settings.ts)
GET    /demo-key-status  (em artifacts/api-server/src/routes/settings.ts)
GET    /demo-key-config  (em artifacts/api-server/src/routes/settings.ts)
POST   /demo-key-config  (em artifacts/api-server/src/routes/settings.ts)
GET    /perplexity-key-status  (em artifacts/api-server/src/routes/settings.ts)
POST   /tts  (em artifacts/api-server/src/routes/settings.ts)
POST   /export/docx  (em artifacts/api-server/src/routes/settings.ts)
GET    /ai-usage-summary  (em artifacts/api-server/src/routes/settings.ts)
POST   /git-push  (em artifacts/api-server/src/routes/settings.ts)
GET    /settings/db-status  (em artifacts/api-server/src/routes/settings.ts)
POST   /settings/db-test  (em artifacts/api-server/src/routes/settings.ts)
POST   /settings/db-init  (em artifacts/api-server/src/routes/settings.ts)
GET    /settings/app-info  (em artifacts/api-server/src/routes/settings.ts)
GET    /settings/env-list  (em artifacts/api-server/src/routes/settings.ts)
POST   /settings/env-set  (em artifacts/api-server/src/routes/settings.ts)
POST   /settings/db-query  (em artifacts/api-server/src/routes/settings.ts)
POST   /settings/db-query-admin  (em artifacts/api-server/src/routes/settings.ts)
GET    /settings/db-describe/:table  (em artifacts/api-server/src/routes/settings.ts)
POST   /settings/drive-upload  (em artifacts/api-server/src/routes/settings.ts)
GET    /health  (em artifacts/api-server/src/routes/status.ts)
GET    /status  (em artifacts/api-server/src/routes/status.ts)
GET    /status/ia  (em artifacts/api-server/src/routes/status.ts)
GET    /status/banco  (em artifacts/api-server/src/routes/status.ts)
GET    /status/integracoes  (em artifacts/api-server/src/routes/status.ts)
POST   /upload/extract-text  (em artifacts/api-server/src/routes/upload.ts)
POST   /extract-text  (em artifacts/api-server/src/routes/upload.ts)
POST   /import/url  (em artifacts/api-server/src/routes/upload.ts)
POST   /import-url  (em artifacts/api-server/src/routes/upload.ts)
POST   /upload/transcribe  (em artifacts/api-server/src/routes/upload.ts)
POST   /upload/ocr  (em artifacts/api-server/src/routes/upload.ts)
```

---

## SCRIPTS DISPONIVEIS (package.json)

```bash
npm run preinstall    # sh -c 'rm -f package-lock.json yarn.lock; case "$npm_config_user_agent" in pnpm/*) ;; *) echo "Use pnpm instead" >&2; exit 1 ;; esac'
npm run build         # pnpm run typecheck && pnpm -r --if-present run build
npm run typecheck:libs  # tsc --build
npm run typecheck     # pnpm run typecheck:libs && pnpm -r --filter "./artifacts/**" --filter "./scripts" --if-present run typecheck
```

---

## VARIAVEIS DE AMBIENTE NECESSARIAS

Crie um arquivo `.env` na raiz com estas variaveis:

```env
SESSION_SECRET=seu_valor_aqui
ELECTRON_DATA_PATH=seu_valor_aqui
LOCAL_DATA_FILE=seu_valor_aqui
LOG_LEVEL=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
APP_PASSWORD=seu_valor_aqui
DATAJUD_API_KEY=seu_valor_aqui
GOOGLE_DRIVE_TOKEN=seu_valor_aqui
GOOGLE_DRIVE_FOLDER_ID=seu_valor_aqui
JWT_SECRET=seu_valor_aqui
BIRDID_CLIENT_ID=seu_valor_aqui
BIRDID_CLIENT_SECRET=seu_valor_aqui
VIDAAS_CLIENT_ID=seu_valor_aqui
VIDAAS_CLIENT_SECRET=seu_valor_aqui
GOOGLE_DRIVE_ACCESS_TOKEN=seu_valor_aqui
GOOGLE_DRIVE_REFRESH_TOKEN=seu_valor_aqui
GOOGLE_OAUTH_CLIENT_ID=seu_valor_aqui
GOOGLE_OAUTH_CLIENT_SECRET=seu_valor_aqui
PDPJ_PEM_PRIVATE_KEY=seu_valor_aqui
FCM_PROJECT_ID=seu_valor_aqui
FCM_SERVER_KEY=seu_valor_aqui
LOCAL_MODE=seu_valor_aqui
ELECTRON_MODE=seu_valor_aqui
PORT=seu_valor_aqui
BASE_PATH=seu_valor_aqui
REPL_ID=seu_valor_aqui
SERVER_URL=seu_valor_aqui
GEMINI_API_KEY=seu_valor_aqui
OPENAI_API_KEY=seu_valor_aqui
GROQ_API_KEY=seu_valor_aqui
PERPLEXITY_API_KEY=seu_valor_aqui
ANTHROPIC_API_KEY=seu_valor_aqui
OPENROUTER_API_KEY=seu_valor_aqui
XAI_API_KEY=seu_valor_aqui
TOGETHER_API_KEY=seu_valor_aqui
GOOGLE_VISION_API_KEY=seu_valor_aqui
FCM_VAPID_KEY=seu_valor_aqui
NODE_ENV=seu_valor_aqui
```

---

## ARQUIVOS PRINCIPAIS

- `artifacts/api-server/src/app.ts` — Ponto de entrada do backend
- `artifacts/api-server/src/index.ts` — Ponto de entrada do backend
- `artifacts/api-server/src/routes/index.ts` — Ponto de entrada do backend
- `artifacts/assistente-juridico/index.html` — Arquivo principal
- `artifacts/assistente-juridico/src/App.tsx` — Componente raiz do frontend
- `artifacts/assistente-juridico/src/main.tsx` — Arquivo principal
- `lib/db/src/index.ts` — Arquivo principal
- `lib/db/src/schema/index.ts` — Arquivo principal
- `lib/sync-storage/src/index.ts` — Arquivo principal

---

## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ

> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo.

### 📁 Raiz do Projeto (pasta principal)
> Arquivos de configuracao e pontos de entrada ficam aqui.

**`.env.example`** _(85 linhas)_
Arquivo de variaveis secretas (senhas, chaves de API). NUNCA suba este arquivo para o GitHub.

**`MANUAL.md`** _(1629 linhas)_
Manual explicativo em linguagem simples, feito para entender o projeto sem precisar de conhecimento tecnico profundo.

**`capacitor.config.ts`** _(89 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`docker-compose.yml`** _(57 linhas)_
Define multiplos containers Docker que rodam juntos (ex: app + banco de dados).

**`package.json`** _(20 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`pnpm-workspace.yaml`** _(128 linhas)_
Arquivo YAML — parte do projeto.

**`start-local.sh`** _(112 linhas)_
Arquivo SH — parte do projeto.

**`tsconfig.base.json`** _(26 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`tsconfig.json`** _(20 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `artifacts/api-server/`
> Pasta 'api-server' — agrupamento de arquivos relacionados.

**`build.mjs`** _(132 linhas)_
Arquivo MJS — parte do projeto.

**`package.json`** _(54 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(18 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `artifacts/assistente-juridico/`
> Pasta 'assistente-juridico' — agrupamento de arquivos relacionados.

**`index.html`** _(53 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(100 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(27 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(59 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `artifacts/desktop/`
> Pasta 'desktop' — agrupamento de arquivos relacionados.

**`main.js`** _(335 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`package.json`** _(85 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`preload.js`** _(61 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `lib/db/`
> Pasta 'db' — agrupamento de arquivos relacionados.

**`drizzle.config.ts`** _(15 linhas)_
Configuracao do Drizzle ORM — gerencia a conexao e migracao do banco de dados.

**`package.json`** _(26 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(13 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `scripts/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`hello.ts`** _(2 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/api-server/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`app.ts`** _(101 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`file-storage.ts`** _(328 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(19 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`local-config.ts`** _(175 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`storage.ts`** _(256 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/assistente-juridico/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`favicon.svg`** _(4 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`manifest.json`** _(64 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`robots.txt`** _(3 linhas)_
Arquivo TXT — parte do projeto.

**`sw.js`** _(202 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/assistente-juridico/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(174 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(499 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(19 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `lib/db/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`index.ts`** _(17 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `lib/sync-storage/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`index.ts`** _(227 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `artifacts/api-server/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`logger.ts`** _(21 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/api-server/src/middleware/`
> Funcoes intermediarias que processam requisicoes antes das rotas.

**`jwt-auth.ts`** _(64 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/api-server/src/routes/`
> Definicao das URLs e navegacao do app.

**`ai.ts`** _(835 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`assinatura.ts`** _(276 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`auth-jwt.ts`** _(232 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`colaborativo.ts`** _(262 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`crud.ts`** _(247 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`drive-sync.ts`** _(273 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`extra.ts`** _(1143 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`health.ts`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(37 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`integracoes.ts`** _(504 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`jurisprudencia.ts`** _(347 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`pje.ts`** _(211 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`prazos.ts`** _(234 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`settings.ts`** _(603 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`status.ts`** _(196 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`upload.ts`** _(587 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/assistente-juridico/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`pwa-install.tsx`** _(72 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`theme-provider.tsx`** _(47 linhas)_
Componente PROVIDER — 'fornece' dados/funcoes para todos os componentes filhos via Context API do React.

**`theme-toggle.tsx`** _(19 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tiptap-editor.tsx`** _(416 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

---

### 📁 `artifacts/assistente-juridico/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `artifacts/assistente-juridico/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`legal-formatter.ts`** _(131 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`queryClient.ts`** _(58 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`sync-storage.ts`** _(271 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `artifacts/assistente-juridico/src/pages/`
> Telas completas do app — cada arquivo aqui e uma pagina navegavel.

**`admin.tsx`** _(384 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`assinatura.tsx`** _(361 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`auditoria-financeira.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`codigo.tsx`** _(1000 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`colaborativo.tsx`** _(450 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`comparador-juridico.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`comunicacoes-cnj.tsx`** _(403 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`configuracoes.tsx`** _(1584 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`consulta-corporativo.tsx`** _(479 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-pdpj.tsx`** _(671 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-processual.tsx`** _(656 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`ementas.tsx`** _(152 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`escritorio.tsx`** _(359 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`filtrador.tsx`** _(732 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`historico.tsx`** _(137 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`jurisprudencia.tsx`** _(3837 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`legal-assistant.tsx`** _(5450 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`login.tsx`** _(105 linhas)_
Componente de LOGIN/AUTENTICACAO — tela de entrada com usuario e senha.

**`not-found.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`painel-processos.tsx`** _(758 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`pje.tsx`** _(292 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`playground.tsx`** _(1475 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`prazos.tsx`** _(392 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`previdenciario.tsx`** _(770 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`robo-djen.tsx`** _(1053 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`status.tsx`** _(259 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`templates-juridicos.tsx`** _(1108 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`token-generator.tsx`** _(450 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tramitacao.tsx`** _(828 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `lib/db/src/schema/`
> Pasta 'schema' — agrupamento de arquivos relacionados.

**`index.ts`** _(254 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `artifacts/assistente-juridico/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(38 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(59 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

## CONTEXTO PARA IA (copie e cole para continuar o projeto)

> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:

```
Projeto: sk-juridico-v1.7.0-electron (1)
Tipo: Aplicacao Web Frontend (React)
Stack: React, TypeScript
Arquivos: 150 | Linhas: ~42.841
Rotas API: 186 endpoint(s) detectado(s)
Variaveis de ambiente necessarias: SESSION_SECRET, ELECTRON_DATA_PATH, LOCAL_DATA_FILE, LOG_LEVEL, DATABASE_URL, APP_PASSWORD, DATAJUD_API_KEY, GOOGLE_DRIVE_TOKEN, GOOGLE_DRIVE_FOLDER_ID, JWT_SECRET, BIRDID_CLIENT_ID, BIRDID_CLIENT_SECRET, VIDAAS_CLIENT_ID, VIDAAS_CLIENT_SECRET, GOOGLE_DRIVE_ACCESS_TOKEN, GOOGLE_DRIVE_REFRESH_TOKEN, GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET, PDPJ_PEM_PRIVATE_KEY, FCM_PROJECT_ID, FCM_SERVER_KEY, LOCAL_MODE, ELECTRON_MODE, PORT, BASE_PATH, REPL_ID, SERVER_URL, GEMINI_API_KEY, OPENAI_API_KEY, GROQ_API_KEY, PERPLEXITY_API_KEY, ANTHROPIC_API_KEY, OPENROUTER_API_KEY, XAI_API_KEY, TOGETHER_API_KEY, GOOGLE_VISION_API_KEY, FCM_VAPID_KEY, NODE_ENV

Estrutura principal:
  .env.example
  MANUAL.md
  artifacts/api-server/build.mjs
  artifacts/api-server/package.json
  artifacts/api-server/src/app.ts
  artifacts/api-server/src/file-storage.ts
  artifacts/api-server/src/index.ts
  artifacts/api-server/src/lib/logger.ts
  artifacts/api-server/src/local-config.ts
  artifacts/api-server/src/middleware/jwt-auth.ts
  artifacts/api-server/src/routes/ai.ts
  artifacts/api-server/src/routes/assinatura.ts
  artifacts/api-server/src/routes/auth-jwt.ts
  artifacts/api-server/src/routes/colaborativo.ts
  artifacts/api-server/src/routes/crud.ts
  artifacts/api-server/src/routes/drive-sync.ts
  artifacts/api-server/src/routes/extra.ts
  artifacts/api-server/src/routes/health.ts
  artifacts/api-server/src/routes/index.ts
  artifacts/api-server/src/routes/integracoes.ts
  artifacts/api-server/src/routes/jurisprudencia.ts
  artifacts/api-server/src/routes/pje.ts
  artifacts/api-server/src/routes/prazos.ts
  artifacts/api-server/src/routes/settings.ts
  artifacts/api-server/src/routes/status.ts
  artifacts/api-server/src/routes/upload.ts
  artifacts/api-server/src/storage.ts
  artifacts/api-server/tsconfig.json
  artifacts/assistente-juridico/index.html
  artifacts/assistente-juridico/package.json
  artifacts/assistente-juridico/public/favicon.svg
  artifacts/assistente-juridico/public/manifest.json
  artifacts/assistente-juridico/public/robots.txt
  artifacts/assistente-juridico/public/sw.js
  artifacts/assistente-juridico/src/App.tsx
  artifacts/assistente-juridico/src/components/pwa-install.tsx
  artifacts/assistente-juridico/src/components/theme-provider.tsx
  artifacts/assistente-juridico/src/components/theme-toggle.tsx
  artifacts/assistente-juridico/src/components/tiptap-editor.tsx
  artifacts/assistente-juridico/src/components/ui/accordion.tsx
  artifacts/assistente-juridico/src/components/ui/alert-dialog.tsx
  artifacts/assistente-juridico/src/components/ui/alert.tsx
  artifacts/assistente-juridico/src/components/ui/aspect-ratio.tsx
  artifacts/assistente-juridico/src/components/ui/avatar.tsx
  artifacts/assistente-juridico/src/components/ui/badge.tsx
  artifacts/assistente-juridico/src/components/ui/breadcrumb.tsx
  artifacts/assistente-juridico/src/components/ui/button-group.tsx
  artifacts/assistente-juridico/src/components/ui/button.tsx
  artifacts/assistente-juridico/src/components/ui/calendar.tsx
  artifacts/assistente-juridico/src/components/ui/card.tsx
  artifacts/assistente-juridico/src/components/ui/carousel.tsx
  artifacts/assistente-juridico/src/components/ui/chart.tsx
  artifacts/assistente-juridico/src/components/ui/checkbox.tsx
  artifacts/assistente-juridico/src/components/ui/collapsible.tsx
  artifacts/assistente-juridico/src/components/ui/command.tsx
  artifacts/assistente-juridico/src/components/ui/context-menu.tsx
  artifacts/assistente-juridico/src/components/ui/dialog.tsx
  artifacts/assistente-juridico/src/components/ui/drawer.tsx
  artifacts/assistente-juridico/src/components/ui/dropdown-menu.tsx
  artifacts/assistente-juridico/src/components/ui/empty.tsx
  artifacts/assistente-juridico/src/components/ui/field.tsx
  artifacts/assistente-juridico/src/components/ui/form.tsx
  artifacts/assistente-juridico/src/components/ui/hover-card.tsx
  artifacts/assistente-juridico/src/components/ui/input-group.tsx
  artifacts/assistente-juridico/src/components/ui/input-otp.tsx
  artifacts/assistente-juridico/src/components/ui/input.tsx
  artifacts/assistente-juridico/src/components/ui/item.tsx
  artifacts/assistente-juridico/src/components/ui/kbd.tsx
  artifacts/assistente-juridico/src/components/ui/label.tsx
  artifacts/assistente-juridico/src/components/ui/menubar.tsx
  artifacts/assistente-juridico/src/components/ui/navigation-menu.tsx
  artifacts/assistente-juridico/src/components/ui/pagination.tsx
  artifacts/assistente-juridico/src/components/ui/popover.tsx
  artifacts/assistente-juridico/src/components/ui/progress.tsx
  artifacts/assistente-juridico/src/components/ui/radio-group.tsx
  artifacts/assistente-juridico/src/components/ui/resizable.tsx
  artifacts/assistente-juridico/src/components/ui/scroll-area.tsx
  artifacts/assistente-juridico/src/components/ui/select.tsx
  artifacts/assistente-juridico/src/components/ui/separator.tsx
  artifacts/assistente-juridico/src/components/ui/sheet.tsx
  artifacts/assistente-juridico/src/components/ui/sidebar.tsx
  artifacts/assistente-juridico/src/components/ui/skeleton.tsx
  artifacts/assistente-juridico/src/components/ui/slider.tsx
  artifacts/assistente-juridico/src/components/ui/sonner.tsx
  artifacts/assistente-juridico/src/components/ui/spinner.tsx
  artifacts/assistente-juridico/src/components/ui/switch.tsx
  artifacts/assistente-juridico/src/components/ui/table.tsx
  artifacts/assistente-juridico/src/components/ui/tabs.tsx
  artifacts/assistente-juridico/src/components/ui/textarea.tsx
  artifacts/assistente-juridico/src/components/ui/toast.tsx
  artifacts/assistente-juridico/src/components/ui/toaster.tsx
  artifacts/assistente-juridico/src/components/ui/toggle-group.tsx
  artifacts/assistente-juridico/src/components/ui/toggle.tsx
  artifacts/assistente-juridico/src/components/ui/tooltip.tsx
  artifacts/assistente-juridico/src/hooks/use-mobile.tsx
  artifacts/assistente-juridico/src/hooks/use-toast.ts
  artifacts/assistente-juridico/src/index.css
  artifacts/assistente-juridico/src/lib/legal-formatter.ts
  artifacts/assistente-juridico/src/lib/queryClient.ts
  artifacts/assistente-juridico/src/lib/sync-storage.ts
  artifacts/assistente-juridico/src/lib/utils.ts
  artifacts/assistente-juridico/src/main.tsx
  artifacts/assistente-juridico/src/pages/admin.tsx
  artifacts/assistente-juridico/src/pages/assinatura.tsx
  artifacts/assistente-juridico/src/pages/auditoria-financeira.tsx
  artifacts/assistente-juridico/src/pages/codigo.tsx
  artifacts/assistente-juridico/src/pages/colaborativo.tsx
  artifacts/assistente-juridico/src/pages/comparador-juridico.tsx
  artifacts/assistente-juridico/src/pages/comunicacoes-cnj.tsx
  artifacts/assistente-juridico/src/pages/configuracoes.tsx
  artifacts/assistente-juridico/src/pages/consulta-corporativo.tsx
  artifacts/assistente-juridico/src/pages/consulta-pdpj.tsx
  artifacts/assistente-juridico/src/pages/consulta-processual.tsx
  artifacts/assistente-juridico/src/pages/ementas.tsx
  artifacts/assistente-juridico/src/pages/escritorio.tsx
  artifacts/assistente-juridico/src/pages/filtrador.tsx
  artifacts/assistente-juridico/src/pages/historico.tsx
  artifacts/assistente-juridico/src/pages/jurisprudencia.tsx
  artifacts/assistente-juridico/src/pages/legal-assistant.tsx
  artifacts/assistente-juridico/src/pages/login.tsx
  artifacts/assistente-juridico/src/pages/not-found.tsx
  artifacts/assistente-juridico/src/pages/painel-processos.tsx
  artifacts/assistente-juridico/src/pages/pje.tsx
  artifacts/assistente-juridico/src/pages/playground.tsx
  artifacts/assistente-juridico/src/pages/prazos.tsx
  artifacts/assistente-juridico/src/pages/previdenciario.tsx
  artifacts/assistente-juridico/src/pages/robo-djen.tsx
  artifacts/assistente-juridico/src/pages/status.tsx
  artifacts/assistente-juridico/src/pages/templates-juridicos.tsx
  artifacts/assistente-juridico/src/pages/token-generator.tsx
  artifacts/assistente-juridico/src/pages/tramitacao.tsx
  artifacts/assistente-juridico/tsconfig.json
  artifacts/assistente-juridico/vite.config.ts
  artifacts/desktop/main.js
  artifacts/desktop/package.json
  artifacts/desktop/preload.js
  capacitor.config.ts
  docker-compose.yml
  lib/db/drizzle.config.ts
  lib/db/package.json
  lib/db/src/index.ts
  lib/db/src/schema/index.ts
  lib/db/tsconfig.json
  lib/sync-storage/src/index.ts
  package.json
  pnpm-workspace.yaml
  scripts/src/hello.ts
  start-local.sh
  tsconfig.base.json
  tsconfig.json
```

---

*Plano gerado pelo SK Code Editor — 25/05/2026, 00:24:50*