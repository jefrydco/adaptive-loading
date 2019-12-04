import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faClock,
  faMoneyBill,
  faTicketAlt,
  faFilm
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch, faClock, faMoneyBill, faTicketAlt, faFilm);

Vue.component("font-awesome", FontAwesomeIcon);

import "./index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
