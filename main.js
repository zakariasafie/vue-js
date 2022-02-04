
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./locales/index"
import MaterialKit from "./plugins/material-kit";

Vue.use(MaterialKit);
Vue.config.productionTip = false;




const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
  ``