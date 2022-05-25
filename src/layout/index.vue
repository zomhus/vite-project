<template>
  <el-container>
    <el-header> h </el-header>
    <el-container>
      <el-aside width="200px">s </el-aside>
      <el-main> <router-view /></el-main>
    </el-container>
  </el-container>

  <el-button @click="toggleMode">切换模式</el-button>
</template>

<script setup lang="ts">
import { store } from "../store/modules/menu";
import axios from "axios";
import { onMounted, ref, useSlots } from "vue";

useSlots();

const useStore = store();
const toggleMode = () => {
  const { mode, setMode } = useStore;
  mode === "veritical" ? setMode("horizontal") : setMode("veritical");
};

const handleSelect = (index) => {
  console.log(index);
};
const activeIndex = ref();

const menuList = ref<any[]>([]);
onMounted(() => {
  axios.get("http://localhost:3001/getTreeMenu").then((res) => {
    menuList.value = res.data;
  });
});
</script>

<style scoped></style>
