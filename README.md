<div align="center">
  <img src="public/pwa-512x512.png" alt="Jhakkas Nihongo Logo" width="120" />

  # 🏎️ JHAKKAS NIHONGO v3.3.1
  
  **High-Performance Japanese Mastery | Offline-First PWA | Gamified SRS**

  [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dheerajguptajapan-ui/jhakkasnihongo)
  [![React](https://img.shields.io/badge/React-19-blue.svg?style=for-the-badge&logo=react)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg?style=for-the-badge&logo=vite)](https://vitejs.dev/)

  *Built for the next generation of Japanese Masters.*
</div>

---

## 🔒 Privacy & Deployment Guide
If you wish to keep your source code **Private** while keeping the app accessible to the public, follow these steps:

### 1. Deploy to Firebase Hosting (Recommended)
Since you already have a Firebase project (`jhakkasnihongo-60f31`), this is the best place to host your app.

1.  **Install Firebase CLI** (if not already installed):
    ```bash
    npm install -g firebase-tools
    ```
2.  **Login to Firebase**:
    ```bash
    firebase login
    ```
3.  **Deploy the App**:
    ```bash
    npm run build
    firebase deploy --only hosting
    ```
*Your app will be live at:* `https://jhakkasnihongo-60f31.web.app`

### 2. Make the Repository Private
Once your app is deployed to Firebase, you can safely go to your **GitHub Repo Settings** -> **General** -> **Danger Zone** -> **Change visibility** -> **Make Private**. 
*   *Firebase Hosting does not depend on the GitHub repository's visibility, so the app will stay online.*

### 3. Application Download (APK)
To provide a download link on your new public site:
1.  Place your latest APK file in the `public/download/` folder.
2.  Rename it to `jhakkas_nihongo.apk`.
3.  Your download link will be: `https://jhakkasnihongo-60f31.web.app/download/jhakkas_nihongo.apk`

---

## ⚡ Core Architecture

- **Offline-First PWA (NEW in 3.3.0)**: Engineered with `vite-plugin-pwa`. The entire application caches locally, ensuring zero-latency access without an internet connection. Updates are downloaded silently via OTA (Over-The-Air) Service Workers.
- **Firebase Cloud Sync (NEW in 3.3.0)**: Background synchronization engine that automatically beams offline progress (XP, streaks, SRS stages) to the cloud the second you regain connectivity.
- **Global Admin Console**: Real-time overview of active operatives, study streaks, and intelligence feedback directly within the app.
- **Atomic SRS Engine**: Advanced algorithm integration for precision vocabulary retention, grammar tracking, and kanji mastery.

## 📱 Mobile-First UI/UX

- **Glassmorphic HUD**: A premium, high-contrast cyberpunk interface featuring cinematic transitions and reactive micro-animations.
- **High-Density Dashboards**: Ferrari-inspired "Mission Status" grids optimized for maximum information density on small viewports.
- **Universal Furigana Engine**: Programmatic grammar parsing with native HTML5 `<ruby>` support for mathematically perfect rendering.

## 🛠️ Local Development

Clone the repository and run the engine locally:

```bash
# Install dependencies
npm install

# Run high-speed development server
npm run dev

# Build the production PWA bundle
npm run build
```

---

<div align="center">
  <i>JHAKKAS CORE v3.3.0 // SECURE LINK ESTABLISHED</i>
</div>
