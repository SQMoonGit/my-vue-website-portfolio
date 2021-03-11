import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "@/plugins/vuetify";
import axios from "axios";
import VueAxious from "vue-axios";
// import VueGoogleCharts from "vue-google-charts";

// Vue.use(VueGoogleCharts);
Vue.use(VueAxious, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
