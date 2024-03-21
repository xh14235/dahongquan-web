<template>
  <div class="x-wrapper">
    <x-header />
    <div class="main-wrapper">
      <router-view />
    </div>
    <x-footer />
  </div>
</template>

<script setup>
import XHeader from "@/components/xHeader";
import XFooter from "@/components/xFooter";
import { baseSetting } from "@/api/setting";
import { useStore } from "vuex";
const store = useStore();
// 获取基本配置
const getBaseSetting = () => {
  baseSetting().then((res) => {
    const bgUrl = res?.bgUrl || "/img/bg.jpg";
    const logoUrl = res?.logoUrl || "/img/logo.jpg";
    store.commit({
      type: "setting/BASE_SETTING",
      setting: { bgUrl, logoUrl },
    });
  });
};
getBaseSetting();
</script>

<style lang="less">
.main-wrapper {
  padding-top: 60px;
  // height: 2000px;
}
</style>
