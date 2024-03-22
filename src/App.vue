<template>
  <div class="x-wrapper">
    <x-header />
    <div class="x-main">
      <router-view />
    </div>
    <x-footer />
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, watch, computed } from "vue";
import XHeader from "@/components/xHeader";
import XFooter from "@/components/xFooter";
import { baseSetting } from "@/api/setting";
import { menuList } from "@/api/menu.js";
import { useStore } from "vuex";
const store = useStore();
// 获取基本配置
const getBaseSetting = () => {
  baseSetting()
    .then((res) => {
      const bgUrl = res?.bgUrl || "/img/bg.jpg";
      const logoUrl = res?.logoUrl || "/img/logo.jpg";
      store.commit({
        type: "setting/BASE_SETTING",
        setting: { bgUrl, logoUrl },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
// 获取菜单
const getMenuList = () => {
  menuList()
    .then((res) => {
      store.commit({
        type: "menu/SET_MENU",
        menus: res,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
  getBaseSetting();
  getMenuList();
});
</script>
