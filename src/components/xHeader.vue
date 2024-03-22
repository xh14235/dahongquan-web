<template>
  <!-- <div class="x-header">
    <div class="logo" @click="toHome"><img :src="logoUrl" /></div>
    <div class="nav">
      <div
        class="nav-item"
        v-for="item of list"
        :key="item._id"
        @click="toMenu(item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="right">right</div>
  </div> -->
  <div class="x-header">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      router
    >
      <div class="x-header-logo" @click="toHome">
        <img :src="logoUrl" />
      </div>
      <div class="flex-grow" />
      <el-menu-item :index="item.path" v-for="item of list" :key="item._id">
        {{ item.title }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
import { useStore } from "vuex";
const store = useStore();

const logoUrl = ref("");
const list = reactive([]);

const toHome = () => {
  router.push({
    path: "/",
  });
};

const activeIndex = ref("/");
watch(
  () => route.path,
  (val) => {
    activeIndex.value = val;
  },
  { immediate: true }
);
onMounted(() => {
  setTimeout(() => {
    logoUrl.value = store.state.setting.setting.logoUrl;
    list.push(...store.state.menu.menus);
  }, 200);
});
</script>

<style lang="less">
// .x-header {
//   position: fixed !important;
//   width: 100%;
//   // height: 60px;
//   // background: #333333;
//   // padding: 0 20px;
//   // display: flex;
//   // justify-content: space-between;
//   // align-items: center;
//   .logo {
//     padding: 6px 20px;
//     img {
//       height: 48px;
//       cursor: pointer;
//     }
//   }
//   .nav {
//     display: flex;
//     .nav-item {
//       color: #ffffff;
//       margin-left: 10px;
//       cursor: pointer;
//     }
//   }
// }
</style>
