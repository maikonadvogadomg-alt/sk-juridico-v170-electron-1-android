#!/bin/bash
# Build script — Android puro (sem npm, sem Capacitor)
# Precisa de: Java 17 e Android SDK
set -e
export ANDROID_HOME="${ANDROID_HOME:-/usr/local/lib/android/sdk}"
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools"
echo "=== 🔨 Compilando APK Android ==="
cd android
chmod +x gradlew
./gradlew assembleDebug --no-daemon -Dorg.gradle.jvmargs=-Xmx3g
APK="app/build/outputs/apk/debug/app-debug.apk"
if [ -f "$APK" ]; then
  SIZE=$(du -h "$APK" | cut -f1)
  echo ""
  echo "✅ APK pronto: android/$APK ($SIZE)"
  echo "📥 No VS Code: clique com botão direito no arquivo → Download"
else
  echo "❌ APK não encontrado — verifique os erros acima"
  exit 1
fi
