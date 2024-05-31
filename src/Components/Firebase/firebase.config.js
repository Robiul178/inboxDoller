// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGhU7-AWkx16L02XO3WFkxeJUNwBSSVuE",
    authDomain: "task-managment-2653f.firebaseapp.com",
    projectId: "task-managment-2653f",
    storageBucket: "task-managment-2653f.appspot.com",
    messagingSenderId: "786703886180",
    appId: "1:786703886180:web:773f83ca6af66462533c71",
    measurementId: "G-9XHNT8Y1YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
