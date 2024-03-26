import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style/tailwind.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import moment from "moment";

const app = createApp(App);

app.config.globalProperties.$moment = moment;

app.use(store).use(router).use(ElementPlus).mount("#app");
