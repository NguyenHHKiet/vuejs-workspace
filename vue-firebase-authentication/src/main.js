import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCy6dEpnOr00ul63sjye44-Ac93qUEx1w",
  authDomain: "walkie-talkie-app-cdaae.firebaseapp.com",
  projectId: "walkie-talkie-app-cdaae",
  storageBucket: "walkie-talkie-app-cdaae.appspot.com",
  messagingSenderId: "923635066",
  appId: "1:923635066:web:e5d0393d4b2c1b5833dac3",
  measurementId: "G-E42KPDLRFL",
};

// Initialize Firebase
const feed = initializeApp(firebaseConfig);
const analytics = getAnalytics(feed);

const app = createApp(App);

app.use(router);

app.mount("#app");
