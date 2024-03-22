import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/index.vue";
import History from "@/views/history/index.vue";
import Xie from "@/views/xie/index.vue";
import News from "@/views/news/index.vue";
import Video from "@/views/video/index.vue";
import Contact from "@/views/contact/index.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/xie",
    component: Xie,
  },
  {
    path: "/history",
    component: History,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/video",
    component: Video,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
