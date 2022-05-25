<template>
  <div class="login">
    <el-form :model="data" label-width="120px" ref="form">
      <el-form-item
        label="用户名称"
        prop="userName"
        :rules="[{ message: '必填', required: true }]"
      >
        <el-input v-model="data.userName" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[{ message: '请选择一个产权人', required: true }]"
      >
        <el-input v-model="data.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { IUser } from "./interface";

const data = reactive<IUser>({
  userName: "",
  password: "",
});
</script>

<style scoped></style>
