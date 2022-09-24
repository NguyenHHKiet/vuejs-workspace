import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCy6dEpnOr00ul63sjye44-Ac93qUEx1w",
    authDomain: "walkie-talkie-app-cdaae.firebaseapp.com",
    projectId: "walkie-talkie-app-cdaae",
    storageBucket: "walkie-talkie-app-cdaae.appspot.com",
    messagingSenderId: "923635066",
    appId: "1:923635066:web:e5d0393d4b2c1b5833dac3",
    measurementId: "G-E42KPDLRFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
