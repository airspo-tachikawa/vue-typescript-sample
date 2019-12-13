import Vue from "vue";
import OnsenUI from "vue-onsenui";
import App from "./App";
import router from "./router";

import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

Vue.use(OnsenUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
