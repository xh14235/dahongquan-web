<template>
  <el-config-provider :locale="locale">
    <div class="x-wrapper">
      <x-header />
      <div class="x-main">
        <router-view />
      </div>
      <x-footer />
    </div>
  </el-config-provider>
</template>

<script setup>
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
const locale = zhCn;
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
      const logoUrl = res?.logoUrl || "/img/logo.png";
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
      let list = res
        .filter((item) => item.showInNav)
        .sort((a, b) => {
          if (getOrderNum(a.order, 0) === getOrderNum(b.order, 0)) {
            return getOrderNum(a.order, 1) - getOrderNum(b.order, 1);
          } else {
            return getOrderNum(a.order, 0) - getOrderNum(b.order, 0);
          }
        });
      store.commit({
        type: "menu/SET_MENU",
        menus: list,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getOrderNum = (str, num) => {
  let order = 0;
  if (str.includes("-")) {
    order = str.split("-")[num];
  } else {
    order = Number(str);
  }
  return order;
};

onMounted(() => {
  getBaseSetting();
  getMenuList();
});
</script>
