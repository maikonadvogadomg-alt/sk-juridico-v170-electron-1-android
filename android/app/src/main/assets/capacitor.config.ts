import type { CapacitorConfig } from "@capacitor/cli";

/**
 * SK Jurídico IA — Capacitor Config v1.7.0
 *
 * Para build APK sem depender de serviços externos:
 * 1. Defina SERVER_URL com a URL do seu servidor publicado
 *    ex: export SERVER_URL=https://sk-juridico.meudominio.com.br
 * 2. Execute: npx cap sync android && npx cap open android
 *
 * Para modo offline (assets locais — sem servidor):
 * - Comente o bloco `server` abaixo
 * - Faça build do frontend: pnpm --filter @workspace/assistente-juridico run build
 * - O webDir aponta para o dist já compilado
 */

const serverUrl = process.env.SERVER_URL || "";

const config: CapacitorConfig = {
  appId: "com.skjuridico.app",
  appName: "SK Jurídico IA",
  webDir: "artifacts/assistente-juridico/dist",

  // Servidor remoto (recomendado — mantém dados sincronizados)
  ...(serverUrl
    ? {
        server: {
          url: serverUrl,
          cleartext: false,
          androidScheme: "https",
          hostname: "app.skjuridico",
          allowNavigation: [serverUrl.replace(/^https?:\/\//, "")],
        },
      }
    : {}),

  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      launchAutoHide: true,
      backgroundColor: "#0d1526",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "large",
      spinnerColor: "#3b82f6",
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: "Dark",
      backgroundColor: "#0d1526",
    },
    Keyboard: {
      resize: "body",
      resizeOnFullScreen: true,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    LocalNotifications: {
      smallIcon: "ic_stat_juridico",
      iconColor: "#3b82f6",
    },
    CapacitorHttp: {
      enabled: true,
    },
  },

  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
    buildOptions: {
      releaseType: "APK",
    },
  },

  ios: {
    contentInset: "automatic",
    allowsLinkPreview: false,
    scrollEnabled: true,
    limitsNavigationsToAppBoundDomains: true,
  },
};

export default config;
