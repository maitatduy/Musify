# 🎵 Music App

A modern music streaming web application built with **Next.js 14 (App Router)**, **Firebase**, and **Tailwind CSS**.  
Features include authentication, playlist management, favorites, real-time playback, and more.

---

## 🚀 Features

- 🔐 **Authentication**

  - User registration & login with Firebase Auth
  - Persistent session across pages
  - Logout with menu state toggle

- 🎶 **Music Player**

  - Play / Pause songs
  - Seek bar with real-time progress
  - Volume control
  - Next / Previous navigation

- ❤️ **Favorites**

  - Add / Remove songs from wishlist
  - Display user's favorite songs list

- 📂 **Categories & Search**
  - Browse songs by categories
  - Search songs and filter results
  - Display singer information dynamically

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database & Auth:** [Firebase](https://firebase.google.com/)
- **Real-time:** Firebase Realtime Database
- **Icons:** [React Icons](https://react-icons.github.io/react-icons)

---

## ⚡ Getting Started

### 1️⃣ Clone repository

```bash
git clone https://github.com/maitatduy/Musify
cd Musify
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Setup Firebase

- Create a Firebase project in [Firebase Console](https://console.firebase.google.com/).
- Enable **Authentication** (Email/Password).
- Enable **Realtime Database**.
- Copy your Firebase config into `src/app/firebaseConfig.ts`:

```ts
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 4️⃣ Run the app

```bash
npm run dev
```

Visit 👉 `http://localhost:3000`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check [issues page](https://github.com/maitatduy/Musify/issues).

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

- **Mai Tất Duy**  
  🔗 [GitHub](https://github.com/maitatduy)

## 🚀 Deployment

This project is deployed on [Vercel](https://vercel.com/).

👉 Live Demo: [https://musify-ecru.vercel.app/](https://musify-ecru.vercel.app/)

Whenever changes are pushed to the `main` branch, Vercel automatically builds and redeploys the latest version of the app.
