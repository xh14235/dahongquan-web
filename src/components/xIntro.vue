<template>
  <div class="x-artical" v-if="artical.code || artical._id">
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
  },
  id: {
    type: String,
  },
});

const artical = ref({});
const getInfo = () => {
  articalInfo({ code: props.code, id: props.id }).then((res) => {
    artical.value = res;
  });
};
getInfo();
</script>

<style></style>
