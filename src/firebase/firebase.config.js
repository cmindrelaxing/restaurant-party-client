// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXQHPPMv3kGEbCn9AL4uvuTWD1WsmlqLw",
  authDomain: "restaurant-management-5d05c.firebaseapp.com",
  projectId: "restaurant-management-5d05c",
  storageBucket: "restaurant-management-5d05c.appspot.com",
  messagingSenderId: "675731748588",
  appId: "1:675731748588:web:20b397322fc79d4a0d17c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;