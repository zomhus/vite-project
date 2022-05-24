<script setup lang="ts">
import Validate from "./validate/index.vue";
import { ref, reactive, watch, watchEffect, Ref } from "vue";
import { store } from "../store/modules/user";
import requestBtn from "../components/request-btn/index.vue";
const useStore = store();

let info = reactive<{
  name: string;
  age: number;
}>({ name: "", age: 1 });

defineProps<{ msg: string }>();

const emit = defineEmits<{
  (event: "change"): void;
  (event: "update", id: number): void;
}>();

emit("change");

emit("update", 123);

// watch(info, (oldValue, newValue) => {
//   console.log(oldValue, newValue);
// });

let loading = ref<boolean>(false);
const check = (e: MouseEvent) => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
};

let columns = reactive([]);
let count = ref<number>(1);
watchEffect(() => console.log(count, "count"));
let title = ref("");
watch(title, () => {
  console.log(title, "123123");
});
let name = ref("");
const search = (loading: Ref<boolean>) => {
  loading.value = true;
};
const update = (result: any) => {
  console.log(result);
};
</script>

<template>
  <request-btn :request="(loading) => search"> target </request-btn>
  <el-button @click="check" :loading="loading" auto-insert-space>
    检查</el-button
  >
  <Validate />
  <div>{{ useStore.name }}11111111</div>
  <div v-for="item in Object.values(info)" :key="item">{{ item }}</div>
  <div @click="count++">{{ count }}</div>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped></style>
