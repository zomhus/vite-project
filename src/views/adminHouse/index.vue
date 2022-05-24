<template>
  <div class="admin-house">
    <el-button @click="addRow">新增</el-button>
    <el-table :data="state.data">
      <el-table-column
        :prop="column.dataIndex"
        :label="column.title"
        :key="column.dataIndex"
        v-for="column in columns"
      />
    </el-table>
    <el-dialog
      v-model="state.visible"
      title="新增"
      width="50%"
      destroy-on-close
    >
      <modal-form ref="modalForm" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="state.visible = false">取消</el-button>
          <el-button type="primary" @click="submit">提交</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, reactive, ref } from "vue-demi";
import { IModalFormInstance } from "./interface";
import ModalForm from "./components/modalForm/index.vue";

const modalForm = ref<IModalFormInstance>();

const columns = reactive([
  { title: "地址", dataIndex: "address" },
  { title: "楼层", dataIndex: "floor" },
  { title: "小区名称", dataIndex: "communityName" },
  { title: "建成年份", dataIndex: "compleYear" },
  { title: "创建时间", dataIndex: "createdDate" },
  { title: "更新时间", dataIndex: "updatedDate" },
]);
const state = reactive({
  visible: false,
  data: [],
});
const addRow = () => {
  state.visible = true;
};
const submit = () => {
  const formTarget = modalForm.value as IModalFormInstance;

  const { form, data } = formTarget;
  form.validate((valid: boolean) => {
    if (valid) {
      axios.post("http://localhost:3001/houses", data).then((res) => {
        state.visible = false;
      });
    }
  });
};
const handleClose = () => {};
onMounted(() => {
  axios.get("http://localhost:3001/houses").then((res) => {
    state.data = res.data;
  });
});
</script>

<style scoped></style>
