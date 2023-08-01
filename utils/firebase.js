// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5gvah6uTUOBWEKu77Ep9_DzEyotfYb04",
  authDomain: "guess-the-flag-2a9af.firebaseapp.com",
  databaseURL: "https://guess-the-flag-2a9af-default-rtdb.firebaseio.com",
  projectId: "guess-the-flag-2a9af",
  storageBucket: "guess-the-flag-2a9af.appspot.com",
  messagingSenderId: "56174861713",
  appId: "1:56174861713:web:25210eb18a0e5cf56ace30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export{
    db
}