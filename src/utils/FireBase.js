// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyDrnYZ7DVRqQ5Di7x4w4hr1mHXWCeLu0VM",
    authDomain: "swiggy-clone-d0144.firebaseapp.com",
    projectId: "swiggy-clone-d0144",
    storageBucket: "swiggy-clone-d0144.appspot.com",
    messagingSenderId: "859966257717",
    appId: "1:859966257717:web:3957212246be8c58348f7c",
    measurementId: "G-R5QMJ8PBZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();