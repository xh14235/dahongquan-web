<template>
  <div class="home">
    <el-carousel height="440px">
      <el-carousel-item v-for="item in list" :key="item._id">
        <img :src="item.imgUrl" />
        <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { bannerList } from "@/api/setting";
import { reactive } from "vue";

const list = reactive([]);
const getBannerList = () => {
  bannerList().then((res) => {
    list.push(...res);
  });
};

getBannerList();
</script>

<style lang="less" scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
</style>
