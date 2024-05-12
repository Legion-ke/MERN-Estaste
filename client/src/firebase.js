// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "import.meta.env.VITE_FIREBASE_API_KEY",
  authDomain: "late-night-82e9c.firebaseapp.com",
  projectId: "late-night-82e9c",
  storageBucket: "late-night-82e9c.appspot.com",
  messagingSenderId: "85828725832",
  appId: "1:85828725832:web:88ba21418e4ef9caffbc7d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);