// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcTGFpIvCWYm55iXZgTr1Ty2c8QveQn2Q",
  authDomain: "webappecomerce.firebaseapp.com",
  projectId: "webappecomerce",
  storageBucket: "webappecomerce.appspot.com",
  messagingSenderId: "177393968220",
  appId: "1:177393968220:web:ce12487cc86a5d438a3299"
};
 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app) 