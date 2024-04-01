import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style/tailwind.css";
import "@/assets/style/preflight.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import moment from "moment";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css";

const app = createApp(App);

app.config.globalProperties.$moment = moment;

app.use(store).use(VueAwesomeSwiper).use(router).use(ElementPlus).mount("#app");
