<template>
  <div class="x-wrapper">
    <x-header />
    <router-view />
    <x-footer />
  </div>
</template>

<script setup>
import XHeader from "@/components/xHeader";
import XFooter from "@/components/xFooter";
</script>

<style lang="less"></style>
