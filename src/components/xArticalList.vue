<template>
  <div class="x-artical" v-if="list && list.length">
    <div class="x-artical-list">
      <div
        class="x-artical-list-item"
        v-for="item of list"
        :key="item._id"
        @click="toArticalDetail(item)"
      >
        <div class="x-artical-list-item-title">{{ item.title }}</div>
        <div class="x-artical-list-item-time">
          {{ $moment(item.time).format("YYYY:MM:DD HH:mm:ss") }}
        </div>
        <div class="x-artical-list-item-desc">{{ item.desc }}</div>
      </div>
    </div>
    <el-pagination
      :current-page="pageNo"
      :page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <el-empty v-else />
</template>

<script setup>
import { articalList } from "@/api/artical.js";
import { reactive, defineProps, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  code: {
    type: String,
    require: true,
  },
});

let pageSize = ref(10);
let pageNo = ref(1);
let total = ref(0);

const list = reactive([]);
const getArticalList = () => {
  articalList({
    category: props.code,
    pageNo: pageNo.value,
    pageSize: pageSize.value,
  }).then((res) => {
    list.push(...res.datas);
    pageNo.value = res.pageNo;
    pageSize.value = res.pageSize;
    total.value = res.total;
  });
};
getArticalList();

const handleSizeChange = (val) => {
  pageSize.value = val;
  pageNo.value = 1;
  getArticalList();
};
const handleCurrentChange = (val) => {
  pageNo.value = val;
  getArticalList();
};

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
.el-pagination {
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
