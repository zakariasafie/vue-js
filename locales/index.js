import Vue from "vue";
import Vue18in from "vue-i18n";
import en from "./en/index";
import ar from "./ar/index";
Vue.use(Vue18in);

const messages={
    en :en,
    ar :ar
  };
export default new Vue18in({
    locale :localStorage.getItem("lang"),
    messages,
  });
