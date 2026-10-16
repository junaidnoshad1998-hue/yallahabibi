# Yalla Habibi Android project

This project wraps the supplied Yalla Habibi website in an Android WebView app.

## Build an APK
1. Install Android Studio on a computer.
2. Open this folder (`YallaHabibi`) in Android Studio.
3. Allow Gradle sync and install Android SDK Platform 35 if prompted.
4. Select **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
5. Android Studio will show the APK location, typically `app/build/outputs/apk/debug/app-debug.apk`.

## Notes
- Internet permission is enabled because the page currently loads Tailwind CSS and Google Fonts from the internet.
- The upload did not include the referenced restaurant logo, menu poster, or food image files, so those images may not display. The rest of the supplied HTML/CSS/JavaScript is bundled locally.
- This ZIP is Android Studio source, not a compiled APK.
