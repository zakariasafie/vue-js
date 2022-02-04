<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
            <select v-model="language" @change="changeLanguage()">
      <option value="ar" >عربي</option>
      <option value="en">English</option>
    </select>
      <div class="md-toolbar-section-start">
        <h3 class="md-title">Vitclose</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <md-list-item
                href="http://localhost:8080/#/home"
                target=""
                v-if="showDownload"
              >
                <i class="material-icons">home</i>
                <p>{{$t('header.home')}}</p>
              </md-list-item>
              <md-list-item
                href="http://localhost:8080/#/home"
                target=""
                v-if="!showDownload"
              >
                <i class="material-icons">home</i>
                <p>{{$t('header.home')}}</p>
              </md-list-item>

              <li class="md-list-item" v-if="showDownload">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>{{$t('header.category')}}</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/">
                            <i class="material-icons">layers</i>
                            <p>{{$t('header.Citrus')}}</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://localhost:8080/#/profile"
                          >
                            <i class="material-icons">content_paste</i>
                            <p>{{$t('header.Fruits')}}</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <li class="md-list-item" v-if="!showDownload">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>{{$t('header.category')}}</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/">
                            <i class="material-icons">layers</i>
                            <p>{{$t('header.Citrus')}}</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://localhost:8080/#/profile"
                          >
                            <i class="material-icons">content_paste</i>
                            <p>{{$t('header.Fruits')}}</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <li class="md-list-item" v-if="showDownload" >
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">language</i>
                        <option>{{$t('header.lang')}}</option>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/">
                            <i class="material-icons">sort_by_alpha</i>
                            <p>{{$t('header.ar')}}</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demos.creative-tim.com/vue-material-kit/documentation/"
                          >
                            <i class="material-icons">translate</i>
                            <option>{{$t('header.en')}}</option>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              
              <li class="md-list-item" v-if="!showDownload" >
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">language</i>
                        <option>{{$t('header.lang')}}</option>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/">
                            <i class="material-icons">sort_by_alpha</i>
                            <p>{{$t('header.ar')}}</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demos.creative-tim.com/vue-material-kit/documentation/"
                          >
                            <i class="material-icons">translate</i>
                            <option>{{$t('header.en')}}</option>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              

              <md-list-item
                href="https://www.facebook.com/CreativeTim"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom"
                  >{{$t('header.facebook')}}</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://www.instagram.com/CreativeTimOfficial"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
                <p class="hidden-lg">Instagram</p>
                <md-tooltip md-direction="bottom"
                  >{{$t('header.instagram')}}</md-tooltip
                >
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>


<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {

  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      language :null,
    }
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    changeLanguage(){
      localStorage.setItem("lang",this.language);
      window.location.reload();
    },


    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  created (){
    if(localStorage.getItem("lang")==null){
      localStorage.setItem("lang","ar")
    }
    this.language= localStorage.getItem("lang");
   

  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
