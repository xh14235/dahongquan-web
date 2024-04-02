import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/index.vue";
import History from "@/views/history/index.vue";
import Xie from "@/views/xie/index.vue";
import News from "@/views/news/index.vue";
import Video from "@/views/video/index.vue";
import Picture from "@/views/picture/index.vue";
import Contact from "@/views/contact/index.vue";
import Boxer from "@/views/boxer/index.vue";
import Details from "@/views/details/index.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "解家大洪拳",
    },
  },
  {
    path: "/xie",
    component: Xie,
    meta: {
      title: "解家历史",
    },
  },
  {
    path: "/history",
    component: History,
    meta: {
      title: "解家大洪拳",
    },
  },
  {
    path: "/news",
    component: News,
    meta: {
      title: "新闻动态",
    },
  },
  {
    path: "/video",
    component: Video,
    meta: {
      title: "视频图文",
    },
  },
  {
    path: "/contact",
    component: Contact,
    meta: {
      title: "联系我们",
    },
  },
  {
    path: "/artical/details",
    component: Details,
    meta: {
      title: "文章详情",
    },
  },
  {
    path: "/picture",
    component: Picture,
    meta: {
      title: "老照片",
    },
  },
  {
    path: "/boxer",
    component: Boxer,
    meta: {
      title: "代表拳师",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;
