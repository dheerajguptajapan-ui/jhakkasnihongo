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

### 1. Deploy to Netlify (Recommended)
1.  **Sign up** at [Netlify.com](https://www.netlify.com/).
2.  Click **"Add new site"** -> **"Import from existing project"**.
3.  Connect your **GitHub** account and select the `jhakkasnihongo` repository.
4.  **Settings:**
    *   **Build Command:** `npm run build`
    *   **Publish Directory:** `dist`
5.  Click **Deploy**. Netlify will give you a public URL (e.g., `jhakkas-nihongo.netlify.app`).

### 2. Make the Repository Private
Once Netlify is connected, you can safely go to your **GitHub Repo Settings** -> **General** -> **Danger Zone** -> **Change visibility** -> **Make Private**. 
*   *Netlify will still have access to build your site, but the public will not see your code.*

### 3. Application Download (APK)
To provide a download link on your new public site:
1.  Place your latest APK file in the `public/download/` folder.
2.  Rename it to `jhakkas_nihongo.apk`.
3.  Your download link will be: `https://your-site-name.netlify.app/download/jhakkas_nihongo.apk`

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
