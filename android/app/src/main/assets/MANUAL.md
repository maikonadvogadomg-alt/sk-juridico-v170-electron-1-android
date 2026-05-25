# SK Jurídico IA — Manual Completo v1.7.0

**Versão:** 1.7.0 · **Data:** Maio 2026 · **Público:** Advogados e Operadores do Sistema
<!-- Última atualização incremental: v1.3.0 — veja seção 2.0 -->

> Assistente jurídico com inteligência artificial para advogados brasileiros.
> Gera petições, minutas e documentos jurídicos com formatação ABNT automática.
> 100% local — sem dependência de serviços externos proprietários.

---

## Índice

1. [Visão Geral](#1-visão-geral)
2. [Novidades v1.6.0](#2-novidades-v160)
3. [Estrutura de Pastas](#3-estrutura-de-pastas)
4. [Instalação Local (sem Replit)](#4-instalação-local-sem-replit)
5. [Variáveis de Ambiente](#5-variáveis-de-ambiente)
6. [Como Usar o Assistente Principal](#6-como-usar-o-assistente-principal)
7. [Editor TipTap — Formatação ABNT Corrigida](#7-editor-tiptap--formatação-abnt-corrigida)
8. [Formatação ABNT Automática](#8-formatação-abnt-automática)
9. [Templates de Petição por Área do Direito](#9-templates-de-petição-por-área-do-direito)
10. [Modo Colaborativo — Múltiplos Advogados](#10-modo-colaborativo--múltiplos-advogados)
11. [Busca de Jurisprudência + Geração Automática de Peças](#11-busca-de-jurisprudência--geração-automática-de-peças)
12. [Calendário de Prazos Processuais](#12-calendário-de-prazos-processuais)
13. [Notificações Push de Movimentações](#13-notificações-push-de-movimentações)
14. [Assinatura Digital ICP-Brasil](#14-assinatura-digital-icp-brasil)
15. [Integração Nativa PJe](#15-integração-nativa-pje)
16. [Importação de Arquivos (PDF, DOCX, áudio, vídeo, imagens/OCR)](#16-importação-de-arquivos)
17. [Exportação para Word (DOCX) com Template](#17-exportação-para-word-docx-com-template)
18. [Biblioteca de Ementas](#18-biblioteca-de-ementas)
19. [Histórico de Gerações de IA](#19-histórico-de-gerações-de-ia)
20. [Busca de Jurisprudência — DataJud + STF + STJ + TST](#20-busca-de-jurisprudência)
21. [Assistente de Código Web](#21-assistente-de-código-web)
22. [Configurações — Chaves de API](#22-configurações--chaves-de-api)
23. [Dark Mode Azul-Marinho (Navy) — Alto Contraste](#23-dark-mode-azul-marinho-navy--alto-contraste)
24. [PWA — Instalação no Celular/Desktop](#24-pwa--instalação-no-celulardesktop)
25. [Google Drive — Envio de Documentos](#25-google-drive--envio-de-documentos)
26. [Integrações com Sistemas Judiciais](#26-integrações-com-sistemas-judiciais)
27. [Referência Completa da API](#27-referência-completa-da-api)
28. [Proteção por Senha](#28-proteção-por-senha)
29. [**Guia EAS — Build APK via Expo Cloud (sem Android Studio)**](#29-guia-eas--build-apk-via-expo-cloud)
30. [**Guia Capacitor — Build APK Local (Android Studio)**](#30-guia-capacitor--build-apk-local)
31. [**Guia Desktop — Executável Electron (Windows/macOS/Linux)**](#31-guia-desktop--executável-electron)
32. [GitHub Actions — CI/CD Automático](#32-github-actions--cicd-automático)
33. [Troubleshooting](#33-troubleshooting)
34. [Roadmap Futuro](#34-roadmap-futuro)

---

## 1. Visão Geral

O **SK Jurídico** é um assistente jurídico com IA voltado para advogados brasileiros. Ele gera petições, minutas, pareceres e outros documentos jurídicos com formatação ABNT automática, usando modelos de linguagem como Gemini, OpenAI, Groq, Perplexity e qualquer provedor compatível com OpenAI.

**Princípio fundamental:** todas as chaves de API são configuradas pelo próprio usuário. O sistema nunca usa chaves de terceiros, garantindo privacidade e controle total sobre os dados.

### Arquitetura geral

```
Usuário ──► Frontend React/Vite (porta configurável via PORT)
                │
                ▼
           API Express 5 (porta 8080 ou PORT)
                │
         ┌──────┴───────┐
         ▼              ▼
   PostgreSQL      FileStorage (JSON)
   (produção)      (LOCAL_MODE=1 ou ELECTRON_MODE=1)
```

---

## 2.0 Novidades v1.3.0 — Melhorias de Maio 2026

Esta versão implementa 13 melhorias consolidadas no produto.

### 2.0.1 Dark Mode Azul-Marinho Navy (T002)

O modo escuro utiliza um tema **azul-marinho profissional** (WCAG AA):
- `--background: 222 32% 9%` — azul-marinho muito escuro
- `--primary: 213 94% 55%` — azul elétrico (botões/destaques)
- `--foreground: 210 40% 94%` — branco-azulado (contraste ≥ 7:1)
- SplashScreen Capacitor: `backgroundColor: "#0d1526"` com spinner `"#3b82f6"`

Ative em qualquer tela clicando no ícone 🌙 no canto superior direito.

### 2.0.2 TipTap: Botão ABNT e CSS Variables (T003)

- Novo botão **ABNT** na barra de ferramentas do editor: reformata todo o documento para justificado com um clique.
- Toolbar e área de edição agora usam CSS variables (`bg-card`, `bg-muted/50`) em vez de cores hardcoded zinc — garantindo compatibilidade com qualquer tema.
- Tabelas no editor têm estilos dark mode corretos.

### 2.0.3 OCR Local — Tesseract.js (T012)

Instalado o `tesseract.js v5` no servidor. Quando uma imagem é enviada **sem** chave Google Vision configurada:
1. Tenta OCR automático local (PT/EN) com Tesseract.js — sem custo, sem API
2. Só exibe instrução de fallback se o OCR não extrair texto suficiente

### 2.0.4 Upload: Mensagem de Áudio/Vídeo Melhorada (T001)

Ao importar áudio/vídeo, o texto extraído agora inclui:
- Tamanho do arquivo e aviso para arquivos > 25 MB
- Instruções passo-a-passo numeradas para usar o botão "Transcrever Áudio"
- Lista dos provedores compatíveis (OpenAI Whisper, Groq Whisper, Custom)

### 2.0.5 Busca de Jurisprudência: IA Integrada (T006)

A busca por IA em `/jurisprudencia` usa exclusivamente as chaves do próprio usuário (configuradas em Configurações → Chaves IA). Configure pelo menos uma chave (Gemini, OpenAI ou Custom) para usar busca enriquecida por IA. A busca no DataJud CNJ funciona sem IA.

### 2.0.6 Configurações — DB Panel (T004)

Aba **Banco de Dados** em Configurações com:
- Status de conexão em tempo real
- Teste de nova URL (Neon, Supabase, Railway, Render)
- Listagem de tabelas
- Executor de queries SQL (apenas SELECT)
- Guia de configuração Neon gratuito

### 2.0.7 Configurações — Auto-Detecção de Chave (T005)

Aba **Detectar** em Configurações: cole qualquer chave de API e o sistema identifica automaticamente o provedor pelo prefixo (`AIza`, `sk-`, `gsk_`, `pplx-`, `xai-`, `cDZH`, etc.).

### 2.0.8 Configurações — Integrações Jurídicas (T011)

Aba **Tribunais** em Configurações com suporte a:
- **e-SAJ** (TJSP, TJBA, TJSC, TJCE)
- **PROJUDI** (TJGO, TJPR, TJAM e outros)
- **SEEU** — execução penal unificada
- **eProc** (TRF4, TRF5 e tribunais federais)
- **PJud** (STJ)
- **PDPJ/CNJ**

### 2.0.9 SyncStorage Local (T009)

`lib/sync-storage` implementado com:
- IndexedDB como armazenamento primário
- localStorage como fallback automático
- Stores: `kv` (chave-valor), `documents` (docs offline), `history` (histórico IA)
- `initSyncStorage()` migra localStorage → IndexedDB na inicialização

### 2.0.10 Capacitor — Config APK Android/iOS (T010)

`capacitor.config.ts` criado na raiz com:
- `appId: "com.skjuridico.app"` · `appName: "SK Jurídico IA"`
- Suporte a `SERVER_URL` para APK conectar a servidor remoto
- SplashScreen azul-marinho (`#0d1526`), StatusBar escura, Keyboard resize
- Build options: `releaseType: "APK"`

Para build APK:
```bash
export SERVER_URL=https://seu-servidor.seu-dominio.com.br
npx cap sync android
npx cap open android   # Android Studio → Build → Generate Signed APK
```

### 2.0.11 Template Export DOCX (T007)

Exportação Word com template funcional:
- Lê template do banco de dados pelo `templateId`
- Substitui variáveis `{{CAMPO}}` no cabeçalho
- Adiciona cabeçalho do template → título → conteúdo ABNT
- Margens ABNT: 3cm esquerda/cima, 2cm direita/baixo
- Fonte Times New Roman 12pt, espaçamento 1,5 (linha 360 twips)

### 2.0.12 Mobile CSS Melhorias (T008)

- Toolbar TipTap: botões com `min-height: 2.5rem` em mobile
- Textarea: `font-size: 16px` — previne zoom iOS
- Tablist rolável horizontalmente sem scrollbar visível
- Tabelas no editor com suporte a dark mode via CSS variables

---

## 2. Novidades v1.6.0

### 2.1 Correção — Formatação TipTap: Títulos e Subtítulos

**Problema corrigido:** os títulos H1/H2/H3 inseridos via barra de ferramentas TipTap estavam sendo exibidos com alinhamento centralizado, contrariando a norma ABNT NBR 6022.

**Correção aplicada:**
- `defaultAlignment` do `TextAlign` alterado de `"justify"` para `"left"` — todos os headings iniciam alinhados à esquerda.
- CSS explícito adicionado: H1 (maiúsculas + negrito + esquerda), H2 (maiúsculas + negrito + esquerda), H3 (negrito + esquerda).
- `legal-formatter.ts` atualizado: seções em caixa alta usam `text-align: left`, seguindo ABNT NBR 6022 §5.3.

### 2.2 Dark Mode — Azul-Marinho Navy (v1.7.0)

O tema escuro utiliza a paleta **azul-marinho profissional** (WCAG AA) com alto contraste:
- `--foreground: 210 40% 94%` — branco-azulado (razão ≥ 7:1 sobre o fundo)
- `--muted-foreground: 215 20% 65%` — texto secundário legível (razão ≥ 4.5:1)
- `--background: 222 32% 9%` — azul-marinho profundo
- `--primary: 213 94% 55%` — azul elétrico, legível sobre fundo escuro

### 2.3 Novo — Modo Colaborativo: Múltiplos Advogados em Tempo Real

Múltiplos advogados editam o mesmo documento simultaneamente via **Server-Sent Events (SSE)** — sem WebSocket externo, funciona em qualquer rede HTTP.

Funcionalidades:
- Criar salas nomeadas e compartilhar por ID ou link
- Avatares coloridos únicos por colaborador
- Sincronização automática a cada 500ms de inatividade
- Histórico das últimas 50 versões por sala
- Salas persistem por 2h após o último acesso

### 2.4 Novo — Templates por Área do Direito (21 templates)

7 áreas: Cível, Criminal, Trabalhista, Família, Previdenciário, Tributário, Constitucional.
3 templates por área = 21 templates pré-configurados prontos para uso.

### 2.5 Novo — Geração Automática de Peças com Jurisprudência

Integra busca no DataJud CNJ, STF, STJ e TST com geração: selecione julgados relevantes e a IA gera a petição citando-os diretamente.

### 2.6 Novo — Calendário de Prazos: Vista Mensal

- Visualização por calendário mensal ou lista cronológica
- Cores por status: verde (cumprido), amarelo (próximo ≤48h), vermelho (vencido)

### 2.7 Novo — Notificações Push PWA/FCM

- Service Worker v1.6.0 com suporte a Web Push API
- Alertas de prazos vencendo em 48h
- Funciona com o app fechado (via PWA instalado)

### 2.8 Novo — Assinatura Digital ICP-Brasil Aprimorada

- Integração BirdID e VIDaaS (certificado em nuvem)
- Hash SHA-256 do documento, exportação assinada em PDF

### 2.9 Novo — Integração PJe OAuth + Peticionamento Automatizado

- Autenticação OAuth 2.0 com o PJe
- Consulta de processos por número CNJ
- Upload de petições diretamente ao processo (TJ, TRF, TRT, TST)

---

## 3. Estrutura de Pastas

```
sk-juridico/
├── artifacts/
│   ├── api-server/                  # Backend Express 5
│   │   └── src/routes/
│   │       ├── ai.ts                # Geração IA com streaming SSE
│   │       ├── colaborativo.ts      # Modo colaborativo SSE+REST ← NOVO v1.6.0
│   │       ├── prazos.ts            # Calendário + FCM push
│   │       ├── assinatura.ts        # Assinatura digital ICP-Brasil
│   │       ├── pje.ts               # Integração PJe OAuth
│   │       ├── jurisprudencia.ts    # DataJud CNJ + STF/STJ/TST
│   │       ├── crud.ts              # Ementas, histórico, templates
│   │       ├── settings.ts          # Chaves de API
│   │       ├── upload.ts            # Upload PDF/DOCX/OCR/áudio
│   │       ├── integracoes.ts       # e-SAJ, PROJUDI, SEEU, eProc
│   │       └── extra.ts             # Exportação DOCX, Drive
│   ├── assistente-juridico/         # Frontend React + Vite
│   │   └── src/pages/
│   │       ├── legal-assistant.tsx  # Página principal
│   │       ├── colaborativo.tsx     # Modo colaborativo ← NOVO v1.6.0
│   │       ├── templates-juridicos.tsx # 21 templates por área
│   │       ├── prazos.tsx           # Calendário de prazos
│   │       ├── assinatura.tsx       # Assinatura ICP-Brasil
│   │       ├── pje.tsx              # Portal PJe
│   │       └── jurisprudencia.tsx   # Busca jurisprudência
│   └── desktop/                     # Electron (executável nativo)
│       ├── main.js                  # Processo principal
│       ├── preload.js               # Bridge segura
│       └── package.json
├── lib/db/src/schema/index.ts       # Schema Drizzle ORM
├── scripts/
│   ├── build-zips-v160.sh          # Gera 4 ZIPs ← NOVO v1.6.0
│   ├── build-eas.sh                # Build via EAS Cloud
│   ├── build-desktop.sh            # Build Electron
│   └── export-zip.sh               # ZIP genérico
└── MANUAL.md                        # Este manual
```

---

## 4. Instalação Local (sem Replit)

### Pré-requisitos

| Ferramenta | Versão mínima | Instalação |
|-----------|--------------|-----------|
| Node.js | 20+ | https://nodejs.org |
| pnpm | 9+ | `npm install -g pnpm` |
| PostgreSQL | 14+ | https://www.postgresql.org |

> **Sem banco de dados?** Use `LOCAL_MODE=1` — os dados são salvos em arquivo JSON local.

### Passo a passo

```bash
# 1. Extrair / clonar o projeto
unzip sk-juridico-v1.6.0-fonte.zip
cd sk-juridico-v1.6.0-fonte

# 2. Instalar dependências
pnpm install

# 3. Configurar variáveis de ambiente
cat > .env << EOF
DATABASE_URL=postgresql://usuario:senha@localhost:5432/sk_juridico
SESSION_SECRET=troque-por-string-aleatoria-longa
# Ou para uso sem banco:
# LOCAL_MODE=1
EOF

# 4. Aplicar schema no banco
pnpm --filter @workspace/db run push

# 5. Iniciar em desenvolvimento
# Terminal 1:
pnpm --filter @workspace/api-server run dev
# Terminal 2:
pnpm --filter @workspace/assistente-juridico run dev

# 6. Acessar
# http://localhost:3000
```

---

## 5. Variáveis de Ambiente

```env
# ── Banco de dados ──────────────────────────────────────────────────────────
DATABASE_URL=postgresql://usuario:senha@localhost:5432/sk_juridico

# Sem banco (dados em arquivo JSON):
LOCAL_MODE=1
LOCAL_DATA_PATH=./dados-juridico.json   # opcional

# ── Segurança ─────────────────────────────────────────────────────────────
SESSION_SECRET=string-aleatoria-longa-aqui

# ── Servidor ──────────────────────────────────────────────────────────────
PORT=8080
NODE_ENV=production

# ── Modo Desktop (Electron) ───────────────────────────────────────────────
ELECTRON_MODE=1
ELECTRON_DATA_PATH=/caminho/dados.json

# ── Push Notifications (opcional) ────────────────────────────────────────
FCM_PROJECT_ID=seu-projeto-firebase
FCM_SERVER_KEY=sua-chave-fcm

# ── DataJud CNJ (opcional, melhora busca jurisprudência) ─────────────────
DATAJUD_API_KEY=sua-chave-datajud
```

> **Chaves de IA** (Gemini, OpenAI, Groq, etc.) são configuradas pela interface gráfica em **Configurações**, não no `.env`. Cada usuário usa suas próprias chaves.

---

## 6. Como Usar o Assistente Principal

### Fluxo básico

1. Cole texto do cliente, fatos do caso ou dados relevantes no painel esquerdo
2. Selecione o tipo de ação (gerar minuta, resumir, revisar, etc.)
3. Clique em **Gerar com IA**
4. O documento aparece no editor TipTap com formatação ABNT automática
5. Refine via painel de chat à direita
6. Exporte para DOCX com o botão de download

### Ações disponíveis

| Ação | Descrição |
|------|-----------|
| Gerar Minuta | Petição/documento completo a partir dos fatos |
| Resumir | Condensa texto longo em pontos principais |
| Revisar | Corrige erros e melhora redação jurídica |
| Simplificar | Reescreve em linguagem mais clara |
| Analisar | Avalia pontos fortes/fracos do argumento |
| Refinar | Melhora o documento já no editor |
| Modo Estrito | Geração objetiva e técnica |
| Modo Redação | Estilo formal acadêmico ABNT |
| Modo Interativo | IA faz perguntas de esclarecimento antes de gerar |

---

## 7. Editor TipTap — Formatação ABNT Corrigida

### Correções v1.6.0

**Antes (bug):** todos os títulos H1/H2/H3 apareciam centralizados ao serem inseridos via barra de ferramentas.

**Após (correto — ABNT NBR 6022):**

| Nível | Alinhamento | Caixa | Peso |
|-------|------------|-------|------|
| H1 | Esquerda | MAIÚSCULAS | Negrito |
| H2 | Esquerda | MAIÚSCULAS | Negrito |
| H3 | Esquerda | Normal | Negrito |
| Parágrafos | Justificado | Normal | Normal |

### Como funciona internamente

```
TextAlign.configure({
  defaultAlignment: "left",      ← corrigido (era "justify")
  alignments: ["left","center","right","justify"],
})
```

```css
/* CSS aplicado automaticamente */
[&_.ProseMirror_h1]:text-left [&_.ProseMirror_h1]:uppercase
[&_.ProseMirror_h2]:text-left [&_.ProseMirror_h2]:uppercase
[&_.ProseMirror_h3]:text-left
```

### Barra de ferramentas

| Controle | Função | Atalho |
|----------|--------|--------|
| **N** | Negrito | Ctrl+B |
| *I* | Itálico | Ctrl+I |
| U̲ | Sublinhado | Ctrl+U |
| 🖊 | Realce colorido | — |
| Tamanho | Fonte em pt | — |
| H1 H2 H3 | Títulos | — |
| ≡ = | Alinhamento | — |
| 🔗 | Inserir link | — |
| ⊞ | Tabela | — |
| 🎨 | Cor do texto | — |

---

## 8. Formatação ABNT Automática

O arquivo `legal-formatter.ts` converte o texto da IA em HTML formatado ABNT:

| Elemento | Estilo aplicado |
|---------|----------------|
| Parágrafos | `text-indent: 4cm`, `text-align: justify`, `line-height: 1.5` |
| Seções (ALL CAPS) | `text-align: left`, negrito, maiúsculas, sem recuo ← **corrigido v1.6.0** |
| Citações longas | recuo 4cm bilateral, fonte 10pt, itálico |
| Fecho (`Nestes termos...`) | sem recuo, justificado |
| Local e data | alinhado à direita |

### Seções reconhecidas automaticamente

`DOS FATOS`, `DO DIREITO`, `DA JURISPRUDÊNCIA`, `DOS PEDIDOS`, `EXMO. SR. DR.`, `EXCELENTÍSSIMO`, `DA COMPETÊNCIA`, `DA LEGITIMIDADE`, `DA FUNDAMENTAÇÃO JURÍDICA`, e outros padrões ABNT.

---

## 9. Templates de Petição por Área do Direito

Acesse via botão **Templates** na navegação superior → `/templates`.

### 21 Templates disponíveis

| Área | Templates |
|------|-----------|
| 🏛️ Cível | Petição Inicial, Contestação, Recurso de Apelação |
| ⚖️ Criminal | Habeas Corpus, Queixa-crime, Embargos de Declaração |
| 👷 Trabalhista | Reclamação Trabalhista, Recurso Ordinário, Acordo Extrajudicial |
| 👨‍👩‍👧 Família | Divórcio Consensual, Guarda e Alimentos, Inventário |
| 🏥 Previdenciário | Concessão de Aposentadoria, Revisão de Benefício, BPC/LOAS |
| 💰 Tributário | Mandado de Segurança, Repetição de Indébito, Impugnação ao Lançamento |
| 🇧🇷 Constitucional | ADI, Mandado de Injunção, ADPF |

### Como usar

1. Acesse **Templates** no menu
2. Selecione a área e clique no template
3. Clique em **Usar Template** — o assistente é preenchido automaticamente
4. Adicione os fatos do caso e clique **Gerar com IA**

---

## 10. Modo Colaborativo — Múltiplos Advogados

Acesse via botão **Colaborar** (👥) na navegação → `/colaborativo`.

### Como funciona

Usa **Server-Sent Events (SSE)** nativos do HTTP. Sem WebSocket externo, sem dependência extra — funciona em qualquer rede onde HTTP funcione.

```
Advogado A ──► POST /api/collab/rooms/:id/update ──► Servidor
                                                          │
Advogado B ◄── SSE event: doc-updated ◄──────────────────┘
```

### Criar e compartilhar uma sala

1. Informe seu **nome na sessão** (ex: `Dr. João Silva`)
2. Clique em **Nova sala colaborativa** e dê um nome
3. Copie o **ID** ou o **link** e envie para os colegas
4. Cada colega acessa pelo link ou inserindo o ID

### Recursos

- Avatares coloridos únicos por colaborador (10 cores distintas)
- Sincronização automática 500ms após parar de digitar
- Histórico das últimas 50 versões
- Salas ativas por 2h após o último acesso

### API do modo colaborativo

```
GET    /api/collab/rooms                    — Lista salas ativas
POST   /api/collab/rooms                    — Cria sala (body: {name, doc?})
GET    /api/collab/rooms/:id                — Estado da sala + documento
POST   /api/collab/rooms/:id/join           — Entrar (body: {name}) → retorna userId, color
POST   /api/collab/rooms/:id/update         — Atualizar doc (body: {userId, html})
GET    /api/collab/rooms/:id/events         — SSE stream (?userId=...)
GET    /api/collab/rooms/:id/history        — Histórico de versões
DELETE /api/collab/rooms/:id/leave          — Sair (body: {userId})
```

---

## 11. Busca de Jurisprudência + Geração Automática de Peças

Acesse via **Jurisprudência** no menu → `/jurisprudencia`.

### Fontes de busca

| Fonte | Base | Gratuito |
|-------|------|---------|
| DataJud CNJ | Nacional (todos os tribunais) | Com chave gratuita |
| STF | Supremo Tribunal Federal | Sim |
| STJ | Superior Tribunal de Justiça | Sim |
| TST | Tribunal Superior do Trabalho | Sim |
| TJSP | Tribunal de Justiça de São Paulo | Sim |

### Gerar peça com jurisprudência

1. Faça uma busca por tema (ex: "responsabilidade civil dano moral")
2. Selecione os julgados relevantes com o checkbox
3. Clique em **Gerar Peça com esta Jurisprudência**
4. O sistema inclui as ementas no prompt de IA automaticamente
5. A petição é gerada citando os julgados reais selecionados

---

## 12. Calendário de Prazos Processuais

Acesse via **Prazos** no menu → `/prazos`.

### Criando um prazo

1. Clique em **Novo Prazo**
2. Informe: tipo, número do processo, data/hora, descrição
3. Salve — aparece no calendário e na lista

### Status dos prazos

| Cor | Status | Critério |
|-----|--------|---------|
| 🟢 Verde | Cumprido | Marcado como concluído |
| 🟡 Amarelo | Próximo | Vence em ≤ 48 horas |
| 🔴 Vermelho | Vencido | Data passou |
| ⚪ Branco | A prazo | Dentro do prazo |

### API de prazos

```
GET    /api/prazos              — Lista todos
POST   /api/prazos              — Cria prazo
PUT    /api/prazos/:id          — Atualiza
DELETE /api/prazos/:id          — Remove
PUT    /api/prazos/:id/status   — Marca como cumprido
POST   /api/prazos/fcm/token    — Registra token push
POST   /api/prazos/fcm/test     — Envia notificação de teste
GET    /api/prazos/alertas      — Prazos vencendo em 48h
```

---

## 13. Notificações Push de Movimentações

### Pré-requisito: projeto Firebase

1. Acesse https://console.firebase.google.com
2. Crie um projeto → **Cloud Messaging** → copie **Server Key** e **Project ID**
3. Configure em **Configurações → Firebase FCM**

### Ativar no navegador

1. Abra o SK Jurídico em HTTPS (obrigatório para push API)
2. Vá em **Prazos → Configurar Notificações**
3. Autorize as notificações do navegador
4. O token FCM é registrado automaticamente

### Como funciona o Service Worker v1.6.0

- Cache offline de assets estáticos
- Recebimento de push em background (app fechado)
- Clique na notificação → abre a página de prazos diretamente
- Atualização automática quando nova versão é disponibilizada

---

## 14. Assinatura Digital ICP-Brasil

Acesse via **Assinatura** no menu → `/assinatura`.

### Provedores suportados

| Provedor | Tipo | Requer |
|---------|------|--------|
| BirdID | Nuvem | Conta + chave API |
| VIDaaS | Nuvem | Conta + chave API |
| Token USB | Local | Certificado A3 |

### Fluxo de assinatura (BirdID/VIDaaS)

1. Configure a chave do provedor em **Configurações → Assinatura Digital**
2. Abra o documento no editor
3. Clique em **Assinar Documento** → selecione o provedor
4. O sistema gera o hash SHA-256 do HTML do documento
5. A assinatura CMS/PKCS#7 é retornada e salva
6. Exporte o documento assinado em PDF

### API de assinatura

```
POST   /api/assinatura/hash         — Gera hash SHA-256
POST   /api/assinatura/assinar      — Envia para o provedor
GET    /api/assinatura              — Lista documentos assinados
GET    /api/assinatura/:id/status   — Verifica status
DELETE /api/assinatura/:id          — Remove
```

---

## 15. Integração Nativa PJe

Acesse via **PJe** no menu → `/pje`.

### Tribunais suportados

TJ (qualquer estado), TRF 1-6, TRT (qualquer região), TST.

### Configurar OAuth

1. Em **Configurações → PJe**, informe:
   - URL base do tribunal (ex: `https://pje.tjsp.jus.br/pje`)
   - Client ID e Client Secret OAuth
2. Clique em **Autenticar** → complete o login no portal do tribunal
3. O token de acesso é salvo automaticamente

### Peticionamento

1. Consulte o processo pelo número CNJ
2. Selecione o tipo de peça
3. O documento do editor é enviado diretamente ao PJe
4. Receba a confirmação de protocolo

### API PJe

```
GET/POST /api/pje/config
POST     /api/pje/auth
GET      /api/pje/processos/:numero
POST     /api/pje/processos/:numero/peticionar
```

---

## 16. Importação de Arquivos

Clique em **Importar** ou arraste o arquivo para a área de texto.

| Formato | Extração | Limite |
|---------|----------|--------|
| PDF | pdfjs-dist | 150 MB |
| DOCX | mammoth | 150 MB |
| TXT, HTML, XML | nativo | 150 MB |
| PNG, JPG, BMP, TIFF, WebP | Tesseract.js OCR | 10 MB |
| MP3, M4A, WAV | Transcrição via IA | 25 MB |
| MP4, MOV, WebM | Extração + transcrição | 100 MB |

**OCR local (sem custo):** Tesseract.js processa imagens no servidor, sem enviar para terceiros. Para PDFs escaneados, ativa automaticamente se o texto extraído for insuficiente.

---

## 17. Exportação para Word (DOCX) com Template

Clique em **Exportar DOCX** no editor.

### Configurar template

Em **Configurações → Template de Documento**:
- Cabeçalho: nome do escritório, endereço, OAB, telefone
- Rodapé: texto + número de página automático
- Fonte: Times New Roman 12pt (padrão)
- Margens: 3cm superior/esquerda, 2cm inferior/direita (CNJ)

### Resultado

- Times New Roman 12pt, recuo 4cm, espaçamento 1,5
- Títulos MAIÚSCULAS + negrito
- Cabeçalho com logo do escritório
- Numeração automática de páginas

---

## 18. Biblioteca de Ementas

Acesse via **Ementas** no menu → `/ementas`.

Ementas salvas são usadas como **referência direta para a IA** — a IA incorpora o entendimento jurisprudencial na geração da petição.

### Adicionar e usar

1. Cole o texto da ementa, informe tribunal e relator → **Salvar**
2. Na tela principal → **Biblioteca** → selecione a ementa
3. A IA inclui a ementa automaticamente no contexto de geração

---

## 19. Histórico de Gerações de IA

Acesse via **Histórico** no menu → `/historico`.

Todas as gerações são salvas com: data/hora, modelo, ação, texto de entrada e resultado.

Para recuperar uma geração: selecione → **Restaurar** → carrega no editor.

---

## 20. Busca de Jurisprudência

Acesse via **Jurisprudência** no menu → `/jurisprudencia`.

### Configurar DataJud

Solicite chave gratuita em: https://datajud-wiki.cnj.jus.br → configure em **Configurações → DataJud CNJ API Key**.

---

## 21. Assistente de Código Web

Acesse via **Livre** no menu → `/codigo`.

Cria páginas HTML/CSS/JS com preview em tempo real. Útil para calculadoras jurídicas, contratos em HTML, protótipos de interfaces.

---

## 22. Configurações — Chaves de API

Acesse via **Configurações** no menu → `/configuracoes`.

### Detecção automática de provedor por prefixo

| Provedor | Prefixo da chave | Modelo padrão |
|---------|-----------------|--------------|
| Google Gemini | `AIza...` | gemini-2.0-flash |
| OpenAI | `sk-...` | gpt-4o |
| Groq | `gsk_...` | llama-3.3-70b |
| Perplexity | `pplx-...` | llama-3.1-sonar |
| OpenRouter | `sk-or-...` | auto |
| Custom | qualquer | configurável |

---

## 23. Dark Mode Azul-Marinho (Navy) — Alto Contraste

Ative pelo ícone 🌙 no canto superior direito.

### Paleta v1.6.0 (WCAG AA)

| Variável CSS | Valor | Uso |
|-------------|-------|-----|
| `--background` | `222 47% 6%` | Fundo (navy profundo) |
| `--foreground` | `210 40% 97%` | Texto principal (quase branco) |
| `--primary` | `217 91% 60%` | Botões, links, destaques |
| `--muted-foreground` | `215 25% 75%` | Texto secundário legível |
| `--card` | `222 47% 9%` | Cards e painéis |
| `--border` | `217 30% 22%` | Bordas |

Razão de contraste mínima: **4.5:1** (padrão WCAG AA para texto normal).

---

## 24. PWA — Instalação no Celular/Desktop

**Android (Chrome):** Menu ⋮ → Adicionar à tela inicial

**iOS (Safari):** Compartilhar → Adicionar à Tela de Início

**Desktop (Chrome/Edge):** Ícone 📱 na barra de endereços → Instalar

O app instalado funciona offline para edição e sincroniza ao reconectar.

---

## 25. Google Drive — Envio de Documentos

Configure em **Configurações → Google Drive** com credenciais OAuth do Google Cloud Console. Um clique em **📤 Enviar ao Drive** salva o documento na sua pasta.

---

## 26. Integrações com Sistemas Judiciais

Configure em **Configurações → Sistemas Judiciais**.

| Sistema | Tribunal | Funcionalidade |
|---------|---------|----------------|
| e-SAJ | TJ-SP e outros | Consulta processual |
| PROJUDI | Vários TJs | Consulta + peticionamento |
| SEEU | Execução Penal | Consulta de penas |
| eProc | TRFs | Consulta + peticionamento |
| PJud | Militar | Consulta processual |
| PJe | Nacional | OAuth + peticionamento ← v1.6.0 |

---

## 27. Referência Completa da API

Base URL: `http://localhost:8080/api`

### Saúde e status
```
GET  /api/health
GET  /api/status
```

### Inteligência Artificial
```
POST /api/ai/stream          — Gera documento (SSE streaming)
POST /api/ai/refine          — Refina via chat
POST /api/ai/models          — Lista modelos disponíveis
```

### Colaborativo (v1.6.0)
```
GET    /api/collab/rooms
POST   /api/collab/rooms
GET    /api/collab/rooms/:id
POST   /api/collab/rooms/:id/join
POST   /api/collab/rooms/:id/update
GET    /api/collab/rooms/:id/events   (SSE)
GET    /api/collab/rooms/:id/history
DELETE /api/collab/rooms/:id/leave
```

### Prazos + Push
```
GET/POST        /api/prazos
PUT/DELETE      /api/prazos/:id
PUT             /api/prazos/:id/status
POST            /api/prazos/fcm/token
POST            /api/prazos/fcm/test
GET             /api/prazos/alertas
```

### Assinatura Digital
```
POST   /api/assinatura/hash
POST   /api/assinatura/assinar
GET    /api/assinatura
GET    /api/assinatura/:id/status
DELETE /api/assinatura/:id
```

### PJe
```
GET/POST /api/pje/config
POST     /api/pje/auth
GET      /api/pje/processos/:numero
POST     /api/pje/processos/:numero/peticionar
```

### Conteúdo e ementas
```
GET/POST/PATCH/DELETE  /api/ementas
GET/POST/PATCH/DELETE  /api/prompt-templates
GET/POST/PATCH/DELETE  /api/doc-templates
POST                   /api/doc-templates/upload-docx
GET/DELETE             /api/ai-history
```

### Upload e exportação
```
POST /api/upload
POST /api/export/docx
POST /api/extra/drive-upload
```

### Jurisprudência
```
POST /api/jurisprudencia/buscar    — Todos os tribunais
POST /api/jurisprudencia/datajud
POST /api/jurisprudencia/stf
POST /api/jurisprudencia/stj
POST /api/jurisprudencia/tst
```

### Configurações
```
GET/POST /api/settings/:key
GET      /api/config
POST     /api/config/template
```

---

## 28. Proteção por Senha

Por padrão sem autenticação. Para ativar: **Configurações → Segurança** → defina uma senha. Sessões expiram em 24h.

---

## 29. Guia EAS — Build APK via Expo Cloud

> **Use o ZIP:** `sk-juridico-v1.7.0-eas.zip`

### O que é EAS?

**Expo Application Services** compila seu APK na nuvem da Expo. Você não precisa instalar Android Studio, SDK Android ou Java.

### Pré-requisitos

- Conta gratuita em https://expo.dev
- Node.js 20+
- `npm install -g @expo/eas-cli`

### Conteúdo do ZIP EAS

```
sk-juridico-v1.7.0-eas/
├── mobile-eas/
│   ├── App.tsx              ← WebView apontando ao seu servidor
│   ├── app.json             ← Nome, versão, ícones, package name
│   ├── eas.json             ← Perfis de build (preview/production)
│   ├── package.json         ← Dependências Expo
│   ├── babel.config.js
│   └── build.sh             ← Script de build automatizado
├── artifacts/               ← Código do servidor/frontend
├── MANUAL.md
└── MANUAL-EAS.md            ← Guia resumido
```

### Passo a passo

#### 1. Configurar o package name (obrigatório)

Edite `mobile-eas/app.json`:
```json
{
  "expo": {
    "android": {
      "package": "br.com.seuescritorio.skjuridico"
    }
  }
}
```
> Use algo único (ex: `br.com.silvaadvocacia.juridico`). Necessário para a Play Store.

#### 2. Configurar a URL do servidor

Edite `mobile-eas/App.tsx`:
```typescript
// Na mesma rede Wi-Fi:
const SERVER_URL = "http://192.168.1.100:3000";
// Na internet:
const SERVER_URL = "https://sk-juridico.seu-dominio.com.br";
```

#### 3. Fazer login e build

```bash
cd mobile-eas
npm install
eas login           # faça login com sua conta Expo
bash build.sh       # build APK (ou: eas build --platform android --profile preview)
```

O build demora 10-20 minutos. Você recebe o link para download do APK ao final.

#### 4. Instalar no Android

```
No celular:
1. Ative "Instalar de fontes desconhecidas" nas Configurações
2. Baixe o APK pelo link
3. Toque no APK baixado para instalar
```

### Perfis do eas.json

```json
{
  "build": {
    "preview": { "android": { "buildType": "apk" } },
    "production": { "android": { "buildType": "app-bundle" } }
  }
}
```

### Troubleshooting EAS

| Problema | Solução |
|---------|---------|
| `eas: command not found` | `npm install -g @expo/eas-cli` |
| `Not logged in` | `eas login` |
| Build falha (package) | Mude `android.package` em `app.json` para algo único |
| APK não instala | Ative "Fontes desconhecidas" no Android |
| Tela em branco | Verifique a URL do servidor em `App.tsx` |

---

## 30. Guia Capacitor — Build APK Local

> **Use o ZIP:** `sk-juridico-v1.6.0-capacitor.zip`

### O que é Capacitor?

**Capacitor** (Ionic) transforma o app web em APK Android nativo usando WebView. Requer Android Studio instalado localmente.

### Pré-requisitos

- [Android Studio](https://developer.android.com/studio) + Java JDK 17+
- Node.js 20+ e pnpm 9+
- `npm install -g @capacitor/cli`

### Conteúdo do ZIP Capacitor

```
sk-juridico-v1.6.0-capacitor/
├── capacitor.config.ts       ← Configuração do Capacitor (pré-configurado)
├── package-capacitor.json    ← Dependências Capacitor
├── scripts/
│   └── build-apk.sh          ← Script de build automatizado
├── artifacts/                ← Código do servidor/frontend
├── MANUAL.md
└── MANUAL-CAPACITOR.md       ← Guia resumido
```

### Passo a passo

#### 1. Configurar o appId (obrigatório)

Edite `capacitor.config.ts`:
```typescript
const config: CapacitorConfig = {
  appId: "br.com.seuescritorio.skjuridico",  // ← mude aqui
  appName: "SK Jurídico",
  webDir: "artifacts/assistente-juridico/dist",
};
```

#### 2. Instalar dependências Capacitor

```bash
# Copie package-capacitor.json para package.json (na raiz) OU instale manualmente:
npm install @capacitor/android @capacitor/core @capacitor/cli
```

#### 3. Build e sincronização

```bash
# Script automatizado:
bash scripts/build-apk.sh

# Ou manualmente:
pnpm install
pnpm --filter @workspace/assistente-juridico run build
npx cap sync android
npx cap open android
```

#### 4. Gerar o APK no Android Studio

```
Android Studio → Build → Build Bundle(s)/APK(s) → Build APK(s)
APK: android/app/build/outputs/apk/debug/app-debug.apk
```

#### 5. Opções de conexão com o servidor

**Opção A — servidor externo (produção):**
```typescript
server: { url: "https://sk-juridico.seu-dominio.com.br" }
```

**Opção B — servidor local na mesma rede:**
```typescript
server: { url: "http://192.168.1.100:3000", cleartext: true }
```

**Opção C — sem servidor (frontend embutido):**
```typescript
// Deixe `server` sem a propriedade `url`
// O Capacitor serve os arquivos dist/ localmente
```

### Troubleshooting Capacitor

| Problema | Solução |
|---------|---------|
| `cap: command not found` | `npm install -g @capacitor/cli` |
| Gradle sync falha | Verifique Java JDK 17+ (`java -version`) |
| App em branco | Execute `npx cap sync` antes de abrir Android Studio |
| Não conecta servidor | Use IP da máquina (não `localhost`) |
| Erro CORS | Adicione `allowMixedContent: true` no `capacitor.config.ts` |

---

## 31. Guia Desktop — Executável Electron

> **Use o ZIP:** `sk-juridico-v1.7.0-electron.zip`

### O que é Electron?

**Electron** empacota o app web como executável nativo: `.exe` (Windows), `.dmg` (macOS), `.AppImage` (Linux). O usuário instala e usa como qualquer programa, sem precisar de navegador.

### Pré-requisitos

- Node.js 20+ e pnpm 9+
- **macOS:** `xcode-select --install`
- **Linux:** `sudo apt install libnss3 libatk-bridge2.0-0 libgtk-3-0`

### Conteúdo do ZIP Desktop

```
sk-juridico-v1.7.0-electron/
├── artifacts/
│   ├── api-server/          ← Backend (compilado para dist/server.cjs)
│   ├── assistente-juridico/ ← Frontend (compilado para dist/)
│   └── desktop/
│       ├── main.js          ← Processo principal Electron (pré-configurado)
│       ├── preload.js       ← Bridge main↔renderer
│       └── package.json     ← electron-builder configurado
├── scripts/
│   └── build-desktop.sh    ← Script de build automatizado
├── MANUAL.md
└── MANUAL-DESKTOP.md       ← Guia resumido
```

### Como funciona internamente

```
Electron (main.js)
    │
    ├── Inicia servidor Express (porta 8080)
    │   └── LOCAL_MODE=1 — sem PostgreSQL necessário
    │   └── Dados em: ~/Documents/SKJuridico/dados.json
    │
    └── Abre BrowserWindow → http://localhost:3000
        └── Frontend servido pelo Vite (dev) ou dist/ (prod)
```

### Passo a passo

#### 1. Teste em desenvolvimento

```bash
cd sk-juridico-v1.6.0-desktop
pnpm install

# Terminal 1:
pnpm --filter @workspace/api-server run dev

# Terminal 2:
pnpm --filter @workspace/assistente-juridico run dev

# Terminal 3:
cd artifacts/desktop
npm install
npm run electron
```

#### 2. Build do executável

```bash
# Script automatizado (compila tudo e gera o executável):
bash scripts/build-desktop.sh
```

#### 3. Localizar o executável

```
artifacts/desktop/dist-electron/
├── SK Jurídico Setup 1.7.0.exe     ← Windows (instalador NSIS)
├── SK Jurídico-1.7.0.dmg            ← macOS (imagem de disco)
└── SK Jurídico-1.7.0.AppImage       ← Linux (portátil, sem instalação)
```

#### 4. Personalizar appId

Em `artifacts/desktop/package.json`:
```json
{
  "build": {
    "appId": "br.com.seuescritorio.skjuridico",
    "productName": "SK Jurídico"
  }
}
```

### Dados locais salvos em

| SO | Caminho |
|---|---------|
| Windows | `C:\Users\<usuario>\Documents\SKJuridico\dados.json` |
| macOS | `~/Documents/SKJuridico/dados.json` |
| Linux | `~/Documents/SKJuridico/dados.json` |

### Troubleshooting Desktop

| Problema | Solução |
|---------|---------|
| Janela em branco | O servidor Express não iniciou — verifique `build/server.cjs` |
| `electron: command not found` | `cd artifacts/desktop && npm install` |
| Build falha (Windows) | Execute PowerShell como administrador |
| Dados não salvos | Verifique permissão em `~/Documents/SKJuridico/` |
| Erro EADDRINUSE porta 8080 | Mude `PORT` em `main.js` para outra porta |

---

## 32. GitHub Actions — CI/CD Automático

### Build automático de APK (`.github/workflows/build-android.yml`)

Dispara em push para `main`. Configure o secret:
```
GitHub → Settings → Secrets → Actions:
EXPO_TOKEN = token gerado com: eas whoami --auth-token
```

### Build automático Desktop (`.github/workflows/build-desktop.yml`)

Gera executáveis para Windows, macOS e Linux em paralelo. Os arquivos ficam disponíveis em **Releases** do repositório.

---

## 33. Troubleshooting

### Servidor não inicia

```bash
# Verificar porta em uso
lsof -i :8080
# Iniciar com log detalhado
LOG_LEVEL=debug pnpm --filter @workspace/api-server run dev
```

### Banco de dados não conecta

```bash
psql "$DATABASE_URL" -c "SELECT version();"
# Alternativa sem banco:
LOCAL_MODE=1 pnpm --filter @workspace/api-server run dev
```

### IA não responde

1. Verifique a chave em **Configurações**
2. Confirme o saldo na conta do provedor
3. Teste com Groq (gratuito com limites)

### TipTap não formata corretamente

1. Limpe o cache (Ctrl+Shift+R)
2. Verifique `preserveWhitespace: "full"` no `setContent`

### Push notifications não funcionam

- Site deve ser acessado via **HTTPS** (obrigatório para Push API)
- Verifique credenciais FCM em **Configurações → Firebase**
- Confirme Service Worker registrado: DevTools → Application → Service Workers

### Modo colaborativo não sincroniza

1. Confirme que o servidor está acessível por todos na mesma rede/internet
2. Verifique o ID da sala (case-sensitive)
3. Recarregue a página — SSE reconecta automaticamente

### APK instala mas não conecta ao servidor

- Use o **IP da máquina** na rede (ex: `192.168.1.100`), não `localhost`
- Para Capacitor: `allowMixedContent: true` + `cleartext: true` no Android
- Para EAS: configure a URL correta em `App.tsx`

---

## 34. Roadmap Futuro (v1.8.0+)

| Funcionalidade | Previsão |
|---------------|---------|
| Integração Thomson Reuters / LexisNexis | v1.8.0 |
| Modelo de IA fine-tuned para direito brasileiro | v2.0 |
| Reconhecimento de voz em audiências | v2.0 |
| Integração com sistemas de gestão (ERP jurídico) | v2.0 |
| Geração automática de contratos com cláusulas modulares | v2.0 |

---

## 35. Novidades v1.7.0

### 35.1 Dark Mode Azul-Marinho (Navy)

Tema escuro completamente reformulado — saiu o verde-oliva, entrou o azul-marinho profissional:
- `--background: 222 32% 9%` — fundo azul-marinho escuro
- `--primary: 213 94% 55%` — azul elétrico (botões, destaques)
- `--foreground: 210 40% 94%` — texto branco-azulado (contraste WCAG AA ≥ 7:1)
- Toolbar do TipTap: cores explícitas no dark mode (sem texto invisível)
- SplashScreen Capacitor: `#0d1526` com spinner azul `#3b82f6`
- Manifest PWA: `theme_color: #1e40af`, `background_color: #0d1526`

### 35.2 Salvamento de Chaves de API (Corrigido)

- `handleSave` agora sempre envia **todas** as chaves configuradas, não apenas as modificadas
- Rota `POST /api/settings/env-set` agora persiste as chaves no banco de dados (`storage.setSetting()`) além do arquivo local — as chaves sobrevivem a reinicializações do servidor
- Toast mostra contagem de chaves salvas com mensagem descritiva

### 35.3 Labels "Arquivo" e "Áudio" Sempre Visíveis

Removida a classe `hidden sm:inline` que escondia os textos nos botões de importação em telas menores. Agora os labels são sempre visíveis em qualquer tamanho de tela.

### 35.4 Remoção de Dependência Replit (Correção Crítica)

- Removido fallback `AI_INTEGRATIONS_GEMINI_API_KEY` de `ai.ts` e `jurisprudencia.ts`
- O sistema **nunca** usa variáveis `AI_INTEGRATIONS_*` — apenas chaves do próprio usuário
- Garante que as versões Capacitor, Electron e EAS funcionem 100% sem Replit

### 35.5 Service Worker v1.7.0

- Cache atualizado para `sk-juridico-v1.7.0`
- Versões antigas do cache são limpas automaticamente na ativação
- Offline funciona para rotas estáticas e APIs cacheáveis

### 35.6 Pacotes de Distribuição Atualizados

Três ZIPs limpos gerados (sem node_modules, sem Replit):
- `sk-juridico-v1.7.0-capacitor.zip` — para build APK Android/iOS
- `sk-juridico-v1.7.0-electron.zip` — para build Desktop (exe/dmg/AppImage)
- `sk-juridico-v1.7.0-eas.zip` — para build via Expo Cloud (sem Android Studio)

---

## 36. Guia Completo — Versão Independente (Sem Replit)

> Este guia ensina a criar e rodar o SK Jurídico em qualquer ambiente — VPS, servidor próprio, computador do escritório, nuvem AWS/GCP/Azure — sem dependência da Replit ou de qualquer serviço externo.

### 36.1 Arquitetura da Versão Independente

```
┌─────────────────────────────────────────────────────────────────┐
│                     SK Jurídico IA v1.7.0                       │
│                     (100% independente)                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐    ┌──────────────────┐                   │
│  │  Frontend React  │    │   API Express 5  │                   │
│  │  Vite + TipTap   │◄──►│   Node.js 20+   │                   │
│  │  Porta 3000      │    │   Porta 8080     │                   │
│  └──────────────────┘    └────────┬─────────┘                   │
│                                   │                              │
│               ┌───────────────────┼──────────────────┐          │
│               ▼                   ▼                  ▼          │
│         PostgreSQL          Arquivo JSON         Memória        │
│         (produção)         (LOCAL_MODE=1)      (temporário)     │
│                                                                  │
│  IA: Gemini / OpenAI / Groq / Perplexity / Custom               │
│      (chaves do usuário — sem serviços externos)                 │
└─────────────────────────────────────────────────────────────────┘
```

### 36.2 Pré-requisitos do Servidor

| Componente | Versão mínima | Instalação |
|-----------|--------------|-----------|
| Node.js | 20 LTS | https://nodejs.org |
| pnpm | 9+ | `npm install -g pnpm` |
| PostgreSQL | 14+ | https://postgresql.org |
| Git | qualquer | https://git-scm.com |

**PostgreSQL é opcional.** Com `LOCAL_MODE=1` o sistema usa arquivo JSON local.

### 36.3 Instalação Completa do Zero

```bash
# 1. Clone o projeto
git clone https://github.com/seu-usuario/sk-juridico.git
cd sk-juridico

# 2. Configure as variáveis de ambiente
cp .env.example .env
nano .env   # edite DATABASE_URL e SESSION_SECRET

# 3. Instale dependências
pnpm install

# 4. Aplique as migrações do banco
pnpm --filter @workspace/db run push

# 5. Inicie o sistema
bash start-local.sh
```

Acesse: http://localhost:3000

### 36.4 Configuração do Banco de Dados

**Opção A — PostgreSQL local:**
```bash
# Ubuntu/Debian:
sudo apt install postgresql
sudo -u postgres psql -c "CREATE USER sk_user WITH PASSWORD 'sk_pass';"
sudo -u postgres psql -c "CREATE DATABASE sk_juridico OWNER sk_user;"

# No .env:
DATABASE_URL=postgresql://sk_user:sk_pass@localhost:5432/sk_juridico
```

**Opção B — Neon (nuvem gratuita, sem instalação):**
```
1. Acesse https://neon.tech e crie uma conta gratuita
2. Crie um projeto e copie a connection string
3. No .env: DATABASE_URL=postgresql://user:pass@ep-xxx.neon.tech/dbname?sslmode=require
```

**Opção C — Sem banco (modo local simples):**
```bash
# No .env:
LOCAL_MODE=1
# Dados salvos em: ./dados/sk_juridico_dados.json
```

### 36.5 Funcionamento SEM Inteligência Artificial

O SK Jurídico funciona sem nenhuma chave de IA configurada. As funcionalidades disponíveis são:

| Funcionalidade | Sem IA | Com IA |
|---------------|--------|--------|
| Editor TipTap (ABNT) | ✅ | ✅ |
| Importação PDF/DOCX/TXT | ✅ | ✅ |
| Importação imagens (OCR local Tesseract) | ✅ | ✅ |
| Exportação DOCX com template | ✅ | ✅ |
| Biblioteca de ementas | ✅ | ✅ |
| Templates (21 modelos pré-prontos) | ✅ | ✅ |
| Busca DataJud CNJ | ✅ | ✅ |
| Histórico de documentos | ✅ | ✅ |
| Modo colaborativo (SSE) | ✅ | ✅ |
| Filtrador de processos | ✅ | ✅ |
| Calculadora previdenciária | ✅ | ✅ |
| Tramitação Inteligente | ✅ | ✅ |
| Geração automática de petições | ❌ | ✅ |
| Revisão e refinamento por IA | ❌ | ✅ |
| Transcrição de áudio/vídeo | ❌ | ✅ |
| Análise jurisprudencial por IA | ❌ | ✅ |
| OCR avançado (Google Vision) | ❌ | ✅ |

**Para ativar IA:** acesse Configurações → Chaves IA e configure pelo menos uma chave (Gemini é gratuito).

### 36.6 Importação e Exportação de Arquivos

O sistema suporta todos os tipos comuns de arquivo:

| Tipo | Extensões | Método |
|------|----------|--------|
| Documentos Word | .docx, .doc | mammoth.js (extração completa) |
| PDF | .pdf | pdfjs-dist (texto extraído) |
| Texto puro | .txt, .md | leitura direta |
| Imagens | .jpg, .png, .webp, .gif, .bmp | Tesseract.js (OCR local) |
| Áudio | .mp3, .wav, .ogg, .m4a, .webm | OpenAI/Groq Whisper (requer chave) |
| Vídeo | .mp4, .avi, .mov, .mkv | extração de áudio + Whisper |

**Limite de upload:** 150 MB por arquivo.

**Exportação:**
- DOCX com template personalizado (margens ABNT, Times New Roman 12pt)
- Copiar HTML formatado para a área de transferência
- Imprimir diretamente do editor

### 36.7 Produção com PM2 (processo sempre ativo)

```bash
# Instala PM2
npm install -g pm2

# Compila a API
BASE_PATH=/api PORT=8080 pnpm --filter @workspace/api-server run build
# Compila o frontend
BASE_PATH=/ PORT=3000 pnpm --filter @workspace/assistente-juridico run build

# Inicia com PM2
pm2 start artifacts/api-server/dist/index.mjs \
  --name sk-juridico-api \
  --env production \
  -- --env PORT=8080,BASE_PATH=/api

# Serve o frontend compilado (ex: nginx ou serve)
pm2 serve artifacts/assistente-juridico/dist 3000 --name sk-juridico-web --spa

# Salva e configura inicialização automática
pm2 save
pm2 startup
```

### 36.8 Produção com Docker

```dockerfile
# Dockerfile
FROM node:20-alpine
RUN npm install -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN BASE_PATH=/api PORT=8080 pnpm --filter @workspace/api-server run build

EXPOSE 8080
ENV PORT=8080 BASE_PATH=/api NODE_ENV=production
CMD ["node", "artifacts/api-server/dist/index.mjs"]
```

```bash
# Build e inicialização
docker build -t sk-juridico .
docker run -d \
  -p 8080:8080 \
  -e DATABASE_URL="postgresql://..." \
  -e SESSION_SECRET="sua-chave-secreta" \
  --name sk-juridico \
  sk-juridico
```

### 36.9 Versão Mobile Independente (Capacitor + servidor próprio)

```bash
# Passo 1: Suba o servidor (VPS ou rede local)
bash start-local.sh

# Passo 2: Configure a URL no capacitor.config.ts
export SERVER_URL=https://sk-juridico.seu-dominio.com.br
# ou em rede local: export SERVER_URL=http://192.168.1.100:8080

# Passo 3: Compile o frontend para assets estáticos
BASE_PATH=/ PORT=3000 pnpm --filter @workspace/assistente-juridico run build

# Passo 4: Sincronize com o Android Studio
npm install -g @capacitor/cli
npx cap add android   # só na primeira vez
npx cap sync android

# Passo 5: Gere o APK
npx cap open android
# Android Studio → Build → Generate Signed APK
```

**O APK resultante:**
- Carrega o SK Jurídico do servidor configurado
- Funciona na mesma rede Wi-Fi (escritório) ou via internet
- Sem Google Play, sem conta Replit, sem serviços externos
- Dados ficam no servidor próprio (banco PostgreSQL)

### 36.10 Instrução Completa: Criar Versão Mobile do Zero

Execute estes comandos em sequência em qualquer Linux/macOS:

```bash
#!/usr/bin/env bash
# ════════════════════════════════════════════════════════════════
# SK Jurídico IA v1.7.0 — Setup Mobile Completo (independente)
# Execute: bash setup-mobile-completo.sh
# Sem Replit. Sem serviços externos. 100% seu.
# ════════════════════════════════════════════════════════════════

set -e

# 1. Dependências globais
npm install -g pnpm @capacitor/cli @expo/eas-cli

# 2. Instala dependências do projeto
pnpm install

# 3. Configura banco (ajuste conforme sua instalação)
# Para modo sem banco: adicione LOCAL_MODE=1 no .env
pnpm --filter @workspace/db run push 2>/dev/null || true

# 4. Compila tudo
BASE_PATH=/api PORT=8080 pnpm --filter @workspace/api-server run build
BASE_PATH=/ PORT=3000 pnpm --filter @workspace/assistente-juridico run build

# 5. Configura Capacitor
export SERVER_URL="${SERVER_URL:-http://$(hostname -I | awk '{print $1}'):8080}"
npx cap add android 2>/dev/null || true
npx cap sync android

# 6. Inicia o servidor (para testes na rede local)
PORT=8080 BASE_PATH=/api NODE_ENV=production \
  node artifacts/api-server/dist/index.mjs &

echo ""
echo "════════════════════════════════════════════════"
echo "  Setup concluído!"
echo "  API:      http://localhost:8080/api"
echo "  Frontend: http://localhost:3000"
echo "  APK:      npx cap open android"
echo "            → Build → Generate Signed APK"
echo "  SERVER_URL configurado: $SERVER_URL"
echo "════════════════════════════════════════════════"
```

### 36.11 Chaves de API: Configuração Interna

Todas as chaves são configuradas **pela interface** em Configurações → Chaves IA.
São salvas no banco de dados (criptografadas) e nunca expostas no código.

Para configurar via variáveis de ambiente (alternativa):

```bash
# No .env
GEMINI_API_KEY=AIza...        # Google Gemini (gratuito)
OPENAI_API_KEY=sk-...         # OpenAI GPT-4
GROQ_API_KEY=gsk_...          # Groq (gratuito com limites)
PERPLEXITY_API_KEY=pplx-...   # Perplexity
CUSTOM_API_KEY=...            # Qualquer provedor compatível com OpenAI
CUSTOM_API_URL=https://...    # URL base do provedor
CUSTOM_API_MODEL=...          # Modelo a usar
```

As variáveis de ambiente têm **menor prioridade** que as chaves configuradas pela interface.

---

*Manual SK Jurídico IA v1.7.0 · Maio 2026*
*Desenvolvido para uso 100% local — sem dependências de serviços proprietários externos*
