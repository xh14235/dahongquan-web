<template>
  <div class="x-home-news">
    <div class="x-home-box news-wrapper">
      <div class="news-img">
        <img src="@/assets/img/home-news.jpg" alt="" />
      </div>
      <div class="news-list">
        <div
          class="news-item"
          v-for="item of list"
          :key="item._id"
          @click="toArticalDetail(item)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { articalList } from "@/api/artical.js";
import { reactive, defineProps, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const list = reactive([]);
const getArticalList = () => {
  articalList({
    category: "news",
    pageNo: 1,
    pageSize: 5,
  }).then((res) => {
    list.push(...res.datas);
  });
};
getArticalList();

const toArticalDetail = (item) => {
  router.push({
    path: "/artical/details",
    query: {
      id: item._id,
    },
  });
};
</script>

<style lang="less" scoped>
.x-home-news {
  background: #f7f7f7;
  .news-wrapper {
    display: flex;
    align-items: center;
    .news-img {
      margin-right: 60px;
      cursor: pointer;
      box-shadow: 2px 2px 14px @textColorMain;
      width: 400px;
      flex: 0 0 400px;
    }
    .news-list {
      flex: auto;
      width: calc(100% - 460px);
      .news-item {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 72px;
        font-size: 24px;
        color: @mainColor;
        cursor: pointer;
      }
    }
  }
}
</style>
