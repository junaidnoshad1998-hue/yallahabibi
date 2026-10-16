# Yalla Habibi Android App

Android Studio source code for the Yalla Habibi restaurant ordering app. The Android app opens the locally bundled HTML/CSS/JavaScript interface inside an Android WebView.

## Features
- Restaurant menu and cart interface
- WhatsApp ordering links
- Restaurant contact and information
- Android WebView launcher app

## Build locally
1. Install Android Studio and Android SDK Platform 35.
2. Open this repository folder in Android Studio.
3. Allow Gradle sync.
4. Select **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
5. The debug APK is normally created at `app/build/outputs/apk/debug/app-debug.apk`.

## Build an APK on GitHub
Push this repository to GitHub. Open **Actions**, select the workflow **Build Android APK**, and run it. When the workflow finishes, download the `yalla-habibi-debug-apk` artifact from that run.

## WhatsApp number
The order links in the bundled assets currently use `923258871788` (Pakistan country code +92, without the leading 0). If the number changes, search in `app/src/main/assets/index.html` and `app/src/main/assets/app.js` for `923258871788` and replace it consistently.

## Important notes
- This is Android Studio source code, not a prebuilt APK.
- The project does not include a Gradle Wrapper. The GitHub Actions workflow installs Gradle 8.9 directly.
- The original ZIP did not include separate referenced logo/menu/food image files, so any such images referenced by the page may not appear.
