<template>
  <el-form :model="data" label-width="120px" ref="form">
    <el-form-item
      label="小区名称"
      prop="communityName"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-input v-model="data.communityName" />
    </el-form-item>
    <el-form-item
      label="楼层"
      prop="floor"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-input-number v-model="data.floor" :min="1" />
    </el-form-item>
    <el-form-item
      label="地址"
      prop="address"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-input v-model="data.address" />
    </el-form-item>
    <el-form-item label="建成年份" prop="compleYear">
      <el-date-picker v-model="data.compleYear" value-format="YYYY-MM-DD" />
    </el-form-item>
    <el-form-item
      label="产权人"
      prop="userId"
      :rules="[{ message: '请选择一个产权人', required: true }]"
    >
      <el-select v-model="data.userId">
        <el-option label="请选择一个用户" value="" />
        <el-option
          v-for="user in userList"
          :value="user.id"
          :label="user.userName"
        ></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { FormInstance } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
import { IUser, IHouse } from "../../interface";

const data = reactive<IHouse>({
  communityName: "",
  floor: 1,
  address: "",
  compleYear: "",
  userId: "",
});

const userList = ref<IUser[]>([]);

const form = ref<FormInstance>();

defineExpose({ form, data });

onMounted(() => {
  axios.get("http://localhost:3001/users").then((res) => {
    console.log(res.data);
    userList.value = res.data;
  });
});
</script>

<style scoped></style>
