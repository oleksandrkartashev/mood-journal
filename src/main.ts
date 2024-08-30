import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./tailwind.css";
import "./global.css";

createApp(App).use(createPinia()).use(router).mount("#app");
