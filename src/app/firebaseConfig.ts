import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDN6dBFYPMJhmFKj2IdcQryNRx4bMoQyGM",
  authDomain: "musify-nextjs.firebaseapp.com",
  databaseURL:
    "https://musify-nextjs-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "musify-nextjs",
  storageBucket: "musify-nextjs.firebasestorage.app",
  messagingSenderId: "42031637309",
  appId: "1:42031637309:web:b923d5b7566ad51c611b54",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const authFirebase = getAuth(app);

export { database, authFirebase };
