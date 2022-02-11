import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtAOGnlM5lscF_5PDu3J0dmg3_lONqUvc",
    authDomain: "movie-f32c8.firebaseapp.com",
    projectId: "movie-f32c8",
    storageBucket: "movie-f32c8.appspot.com",
    messagingSenderId: "1015600665044",
    appId: "1:1015600665044:web:f0093dccd83e2c43a94641"
}

const app = initializeApp(firebaseConfig); // proje başlatılıyor

export const auth = getAuth(app) // başlatılan projenin credentiallarını taşıyor aslında