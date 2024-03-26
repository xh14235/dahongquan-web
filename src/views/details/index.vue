<template>
  <x-intro v-if="articalId" :id="articalId" />
</template>

<script setup>
import XIntro from "@/components/xIntro.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const articalId = ref("");
onMounted(() => {
  const { id } = route.query;
  articalId.value = id;
});
</script>
