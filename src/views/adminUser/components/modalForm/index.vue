<template>
  <el-form :model="data" label-width="120px" ref="form">
    <el-form-item
      label="用户名称"
      prop="userName"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-input v-model="data.userName" />
    </el-form-item>
    <el-form-item
      label="年龄"
      prop="age"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-input-number v-model="data.age" :min="1" />
    </el-form-item>
    <el-form-item
      label="城市"
      prop="city"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-input v-model="data.city" />
    </el-form-item>

    <el-form-item
      label="学校"
      prop="school"
      :rules="[{ message: '请选择一个产权人', required: true }]"
    >
      <el-input v-model="data.school" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { FormInstance } from "element-plus";
import { reactive, ref } from "vue";
import { IUser } from "../../interface";

const data = reactive<IUser>({
  userName: "",
  age: 1,
  city: "",
  school: "",
});

const form = ref<FormInstance>();

defineExpose({ form, data });
</script>

<style scoped></style>
