<template>
  <el-button :="attrs" @click="send" :loading="loading" :disabled="loading">
    <slot />
  </el-button>
</template>

<script setup lang="ts">
import { useAttrs, ref, Ref, useSlots } from "vue";

const attrs = useAttrs();
const slots = useSlots();

const loading: Ref<boolean> = ref<boolean>(false);

const { request } = defineProps<{
  request: (loading: Ref<boolean>) => Promise<string>;
}>();

const send = () => {
  request(loading);
};
</script>

<style lang="less" scoped></style>
