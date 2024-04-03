<template>
  <div class="x-home">
    <banner />

    <div class="x-home-box x-home-video">
      <video :src="homeVideo" autoplay loop controls />
    </div>

    <news />
    <inhiertor />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Banner from "./components/banner.vue";
import News from "./components/news.vue";
import Inhiertor from "./components/inhiertor.vue";
import { useStore } from "vuex";
const store = useStore();

const homeVideo = ref("");
onMounted(() => {
  setTimeout(() => {
    console.log(store.state.setting);
    console.log(store.state.setting.setting);
    console.log(store.state.setting.setting.homeVideo);
    homeVideo.value = store.state.setting.setting.homeVideo;
    console.log(homeVideo.value);
  }, 200);
});
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
