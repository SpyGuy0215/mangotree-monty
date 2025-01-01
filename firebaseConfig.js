// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrXenzBRS64jpvUBrvb2uqUSR77Pcay8U",
    authDomain: "mangotree-e729a.firebaseapp.com",
    projectId: "mangotree-e729a",
    storageBucket: "mangotree-e729a.firebasestorage.app",
    messagingSenderId: "540774028601",
    appId: "1:540774028601:web:c921a24082a6a35a1a04e8",
    measurementId: "G-QJC49GT6PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;