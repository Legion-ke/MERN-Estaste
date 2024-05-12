// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-27ac7.firebaseapp.com",
  projectId: "mern-estate-27ac7",
  storageBucket: "mern-estate-27ac7.appspot.com",
  messagingSenderId: "401326073153",
  appId: "1:401326073153:web:7ed7ba9d284ed8c94bedc0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);