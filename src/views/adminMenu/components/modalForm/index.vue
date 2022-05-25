<template>
  <el-form :model="data" label-width="120px" ref="form">
    <el-form-item
      label="父级菜单"
      prop="parentId"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-tree-select
        default-expand-all
        check-strictly
        v-model="data.parentId"
        :data="menuTree"
        :props="{ label: 'menuName', value: 'id' }"
      />
    </el-form-item>
    <el-form-item
      label="路由路径"
      prop="path"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-input v-model="data.path" />
    </el-form-item>
    <el-form-item
      label="组件名称"
      prop="componentName"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-input v-model="data.componentName" />
    </el-form-item>
    <el-form-item
      label="菜单名称"
      prop="menuName"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-input v-model="data.menuName" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { FormInstance } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
import { IMenuForm } from "../../interface";

const data = reactive<IMenuForm>({
  parentId: 1,
  path: "",
  componentName: "",
  menuName: "",
});

const form = ref<FormInstance>();

defineExpose({ form, data });

const menuTree = ref([]);
const getTree = () => {
  axios.get("http://localhost:3001/getTreeMenu").then((res) => {
    menuTree.value = res.data;
  });
};

onMounted(() => {
  getTree();
});
</script>

<style scoped></style>
