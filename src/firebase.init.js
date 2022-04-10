// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkxybNomc0CydLzCeFxKXn4uoL4BMhLqw",
  authDomain: "ema-jhon-simple-a3d5a.firebaseapp.com",
  projectId: "ema-jhon-simple-a3d5a",
  storageBucket: "ema-jhon-simple-a3d5a.appspot.com",
  messagingSenderId: "671434697949",
  appId: "1:671434697949:web:a129028e9a68e3ec7eff34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
