// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiHQQiYrUAUevYtPQfx9rMfPz64URYXpk",
    authDomain: "digihome-movie.firebaseapp.com",
    projectId: "digihome-movie",
    storageBucket: "digihome-movie.appspot.com",
    messagingSenderId: "416912500052",
    appId: "1:416912500052:web:1a010e61d8ed1e58ce54c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
