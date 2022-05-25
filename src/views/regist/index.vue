<template>
  <el-form :model="data" label-width="120px" ref="form">
    <el-form-item
      label="用户名称"
      prop="userName"
      :rules="[{ message: '用户名必填', required: true }]"
    >
      <el-input v-model="data.userName" />
    </el-form-item>
    <el-form-item
      label="密码"
      prop="password"
      :rules="[{ message: '密码必填', required: true }]"
    >
      <el-input v-model="data.password" />
    </el-form-item>
  </el-form>
  <el-button @click="regist">注册</el-button>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { IUser } from "./interface";
import { FormInstance, ElMessage } from "element-plus";
import axios from "axios";
const form = ref<FormInstance>();
const data = reactive<IUser>({
  userName: "",
  password: "",
});
const regist = () => {
  form.value?.validate((validate) => {
    if (validate) {
      axios.post("http://localhost:3001/users", data).then((res) => {
        ElMessage.success("注册成功");
      });
    }
  });
};
</script>

<style scoped></style>
