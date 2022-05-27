<template>
  <el-form :model="data" label-width="120px" ref="form">
    <el-form-item label="父级菜单" prop="parentId">
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
      prop="pathName"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-input v-model="data.pathName" />
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
    <el-form-item
      label="菜单名称"
      prop="iconName"
      :rules="[{ message: '必填', required: true }]"
    >
      <el-input v-model="data.iconName" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { FormInstance } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { ICreateMenuForm } from "../../interface";

const data = reactive<ICreateMenuForm>({
  parentId: "",
  pathName: "",
  componentName: "",
  menuName: "",
  iconName: "",
});

const form = ref<FormInstance>();

defineExpose({ form, data });

const menuTree = ref([]);
const getTree = () => {};

onMounted(() => {
  getTree();
});
</script>

<style scoped></style>
