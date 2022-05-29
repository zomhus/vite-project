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
    <el-form-item
      label="重复密码"
      prop="passwordRepeat"
      :rules="[{ message: '重复密码必填', required: true }]"
    >
      <el-input v-model="data.passwordRepeat" />
    </el-form-item>
    <el-form-item
      label="手机号码"
      prop="phone"
      :rules="[{ message: '电话号码必填', required: true }]"
    >
      <el-input v-model="data.phone" />
    </el-form-item>
    <el-form-item
      label="学校"
      prop="school"
      :rules="[{ message: '学校必填', required: true }]"
    >
      <el-input v-model="data.school" />
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-select v-model="data.sex">
        <el-option :value="1" label="男"></el-option>
        <el-option :value="0" label="女"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      label="真实姓名"
      prop="realName"
      :rules="[{ message: '学校必填', required: true }]"
    >
      <el-input v-model="data.realName"></el-input>
    </el-form-item>
    <el-form-item
      label="真实姓名"
      prop="age"
      :rules="[{ message: '学校必填', required: true }]"
    >
      <el-input-number v-model="data.age"></el-input-number>
    </el-form-item>
  </el-form>
  <el-button @click="regist">注册</el-button>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ICreateUserForm } from "./interface";
import { FormInstance, ElMessage } from "element-plus";
import { registApi } from "./api";
const form = ref<FormInstance>();

const data = reactive<ICreateUserForm>({
  userName: "",
  password: "",
  phone: "",
  school: "",
  passwordRepeat: "",
  sex: 1,
  realName: "",
  age: 0,
});
const regist = () => {
  form.value?.validate((validate) => {
    if (validate) {
      registApi(data).then(() => {
        ElMessage.success("注册成功");
      });
    }
  });
};
</script>

<style scoped></style>
