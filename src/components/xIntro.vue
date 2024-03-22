<template>
  <div class="x-artical" v-if="artical.code">
    <div class="x-artical-title">{{ artical.title }}</div>
    <div class="x-artical-content" v-html="artical.content"></div>
  </div>
  <el-empty v-else />
</template>

<script setup>
import { articalInfo } from "@/api/artical";
import { ref, defineProps } from "vue";

const props = defineProps({
  code: {
    type: String,
    require: true,
  },
});

const artical = ref({});
const getInfo = () => {
  articalInfo({ code: props.code }).then((res) => {
    artical.value = res;
  });
};
getInfo();
</script>

<style></style>
