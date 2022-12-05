import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import VueI18n from "vue-i18n";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import i18n from './i18n'

library.add(faPhone);

createApp(App).use(i18n)
  .use(router, VueI18n)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
