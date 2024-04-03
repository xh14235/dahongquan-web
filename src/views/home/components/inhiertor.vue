<template>
  <div class="x-home-inheritor">
    <div class="x-home-box">
      <swiper
        v-if="list && list.length"
        :slidesPerView="4"
        :spaceBetween="60"
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
        <swiper-slide v-for="item of list" :key="item._id">
          <div class="inhiertor-box" @click="toArticalDetail(item)">
            <img class="inhiertor-img" :src="item.imgUrl" />
            <div class="inhiertor-name">{{ item.title }}</div>
          </div>
        </swiper-slide>
      </swiper>
      <el-empty v-else />
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const modules = [Autoplay, Navigation, A11y];

import { articalList } from "@/api/artical.js";
import { reactive, defineProps, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const list = reactive([]);
const getArticalList = () => {
  setTimeout(() => {
    articalList({
      category: "person",
      pageNo: 1,
      pageSize: 9999,
    }).then((res) => {
      list.push(...res.datas);
    });
  }, 1000);
};
getArticalList();

const toArticalDetail = (item) => {
  router.push({
    path: "/artical/details",
    query: {
      id: item._id,
    },
  });
};
</script>

<style lang="less" scoped>
.inhiertor-box {
  text-align: center;
  cursor: pointer;
  .inhiertor-img {
    border-radius: 50%;
  }
  .inhiertor-name {
    font-size: 18px;
    margin-top: 20px;
  }
}
</style>
