<template>
  <div class="x-artical">
    <el-form
      ref="baseForm"
      :model="form"
      :rules="rules"
      status-icon
      label-width="auto"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="单位" prop="unit">
        <el-input v-model="form.unit" placeholder="请输入单位" />
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="form.tel" placeholder="请输入电话" />
      </el-form-item>
      <el-form-item label="留言" prop="content">
        <el-input
          v-model="form.content"
          placeholder="请输入留言"
          :rows="3"
          type="textarea"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit" :loading="loading">
          确认
        </el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import { addMessage } from "@/api/message.js";
const baseForm = ref(null);
let loading = ref(false);

const form = reactive({
  name: "",
  unit: "",
  tel: "",
  content: "",
  time: "",
});

const validatePhone = (rule, value, callback) => {
  // const reg = /^(\+[0-9]{2,}-?)?1[0-9]{10}$/;
  const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
  if (!reg.test(value)) {
    callback(new Error("手机号码格式错误"));
  } else {
    callback();
  }
};
const rules = reactive({
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  tel: [
    { required: true, message: "请输入电话", trigger: "blur" },
    { validator: validatePhone, trigger: "blur" },
  ],
  content: [{ required: true, message: "请输入留言", trigger: "blur" }],
});

const handleSubmit = () => {
  baseForm.value.validate((valid) => {
    if (valid) {
      loading.value = true;
      form.time = new Date();
      addMessage(form)
        .then(() => {
          ElMessage({
            message: "添加留言成功！",
            type: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          loading.value = false;
        });
    }
  });
};

const handleReset = () => {
  form.name = "";
  form.unit = "";
  form.tel = "";
  form.content = "";
  form.time = "";
};
</script>

<style lang="less" scoped></style>
