// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-391cc.firebaseapp.com",
    projectId: "mern-auth-391cc",
    storageBucket: "mern-auth-391cc.appspot.com",
    messagingSenderId: "630450059522",
    appId: "1:630450059522:web:e83ac49ce2e3df6d186a1b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);