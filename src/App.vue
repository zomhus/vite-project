<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue-demi";

let a = 1;
const b = ref(1);
watch(b, () => {
  console.log(123123);
});
onMounted(() => {
  console.log(123);
  // a++;
  b.value++;
});
</script>
