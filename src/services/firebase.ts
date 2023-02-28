// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuMBSJbrGBWx6D3kKy24qbkufaZ1q_ZhE",
  authDomain: "fome-de-gol.firebaseapp.com",
  projectId: "fome-de-gol",
  storageBucket: "fome-de-gol.appspot.com",
  messagingSenderId: "288430619264",
  appId: "1:288430619264:web:000c26f8724a6ed1464465",
  measurementId: "G-D2938RZ593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };