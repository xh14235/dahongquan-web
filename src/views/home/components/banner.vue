<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :loop="true"
    :centeredSlides="true"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in list" :key="item._id" @click="jump(item.path)">
      <div class="banner-box">
        <img class="banner-img" :src="item.imgUrl" />
        <div class="banner-title">{{ item.title }}</div>
        <div class="banner-desc">{{ item.desc }}</div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { reactive } from "vue";
import { bannerList } from "@/api/setting";
import { useRouter } from "vue-router";
const router = useRouter();

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const modules = [Autoplay, Pagination, Navigation, A11y];

const list = reactive([]);
const getBannerList = () => {
  bannerList().then((res) => {
    list.push(...res);
  });
};

getBannerList();

const jump = (path) => {
  router.push({
    path,
  });
};
</script>

<style lang="less" scoped>
.banner-box {
  position: relative;
  cursor: pointer;
  color: #ffffff;
  .banner-title {
    position: absolute;
    top: 100px;
    left: 300px;
    font-size: 36px;
  }
  .banner-desc {
    position: absolute;
    top: 160px;
    left: 300px;
    max-width: 50%;
  }
}
</style>
