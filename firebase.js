// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkfpJESVAwiag9vHV2cy6-BYxL7-xbmoo",
  authDomain: "instagram-clone-8e3fa.firebaseapp.com",
  projectId: "instagram-clone-8e3fa",
  storageBucket: "instagram-clone-8e3fa.appspot.com",
  messagingSenderId: "144630888105",
  appId: "1:144630888105:web:c5f7421a1a84ead0b15bb8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
