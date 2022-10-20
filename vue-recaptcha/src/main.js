import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { VueReCaptcha } from "vue-recaptcha-v3";

createApp(App)
  .use(VueReCaptcha, { siteKey: "6LfSJOoUAAAAACo5FptLy5inFhJmhIPF9E9ekwsN" })
  .mount("#app");
