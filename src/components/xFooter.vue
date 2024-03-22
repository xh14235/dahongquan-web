<template>
  <div class="x-footer">
    <div class="x-footer-top">
      <div class="x-footer-nav">
        <div
          class="x-footer-nav-item"
          v-for="item of list"
          :key="item.code"
          @click="toMenu(item)"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="x-footer-qrcode">
        <img src="@/assets/img/qrcode.jpg" />
      </div>
    </div>
    <div class="x-footer-icp">Copyright ©2019 xh14235. 沪ICP备19006810号</div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
import { useRouter } from "vue-router";
const router = useRouter();

const list = reactive([]);

const toMenu = (item) => {
  router.push({
    path: item.path,
  });
};

onMounted(() => {
  setTimeout(() => {
    list.push({
      title: "网站首页",
      path: "/",
    });
    list.push(...store.state.menu.menus);
  }, 200);
});
</script>
