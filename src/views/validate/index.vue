<template>
  <form @submit.prevent="submit" ref="formRef">
    <input type="text" v-model="searchCondition.text" />
    <button type="submit">提交</button>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const formRef = ref<null | HTMLElementTagNameMap["input"]>(null);
const searchCondition = reactive({ text: "" });
</script>

<style scoped></style>
