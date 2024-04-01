<template>
  <div class="x-home">
    <banner />

    <div class="x-home-box x-home-video">
      <video
        src="http://localhost:3000/uploads/3e10ee36969154594ab6e9d5dea83d25"
        autoplay
        loop
        controls
      />
    </div>

    <news />
    <inhiertor />
  </div>
</template>

<script setup>
import Banner from "./components/banner.vue";
import News from "./components/news.vue";
import Inhiertor from "./components/inhiertor.vue";
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.x-home-video {
  padding-top: 90px;
  video {
    width: 100%;
    background: @textColorMain;
  }
}
</style>
