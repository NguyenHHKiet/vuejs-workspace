import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { VueReCaptcha } from "vue-recaptcha-v3";

createApp(App)
  .use(VueReCaptcha, { siteKey: "6LcKFBcaAAAAABi8U9SedTJ4yEeoSzdJI9cKXxrG" })
  .mount("#app");
