#!/bin/bash
set -e
echo "=== Instalando Android SDK ==="
SDK_DIR="/usr/local/lib/android/sdk"
sudo mkdir -p "$SDK_DIR/cmdline-tools"
curl -fsSL https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip -o /tmp/cmdtools.zip
unzip -q /tmp/cmdtools.zip -d /tmp/cmdtools-ext
sudo mv /tmp/cmdtools-ext/cmdline-tools "$SDK_DIR/cmdline-tools/latest"
sudo rm -rf /tmp/cmdtools.zip /tmp/cmdtools-ext
export ANDROID_HOME="$SDK_DIR"
export PATH="$PATH:$SDK_DIR/cmdline-tools/latest/bin:$SDK_DIR/platform-tools"
yes | sdkmanager --licenses >/dev/null 2>&1
sdkmanager "platforms;android-35" "build-tools;35.0.0" "platform-tools" 2>&1 | tail -3
echo 'export ANDROID_HOME=/usr/local/lib/android/sdk' >> ~/.bashrc
echo 'export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools' >> ~/.bashrc
chmod +x android/gradlew
echo "✅ Pronto! Execute: ./build.sh"
