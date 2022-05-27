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

      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click.prevent="view(scope.row)"> 查看 </el-button>
          <el-popconfirm
            title="确认删除吗?"
            confirm-button-text="是"
            cancel-button-text="否"
            @confirm="del(scope.row)"
          >
            <template #reference>
              <el-button>删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
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
import { nextTick, onMounted, reactive, ref } from "vue-demi";
import { IModalFormInstance } from "../../interfaces/index";
import ModalForm from "./components/modalForm/index.vue";
import { ICreateMenuForm, IMenuTableRow } from "./interface";
import { add, list } from "./api";
const modalForm = ref<IModalFormInstance<ICreateMenuForm>>();

const columns = ref([
  { title: "ID", dataIndex: "id" },
  { title: "路由地址", dataIndex: "path" },
  { title: "菜单名称", dataIndex: "menuName" },
  { title: "组件名称", dataIndex: "componentName" },
  { title: "生成时间", dataIndex: "createdDate" },
  { title: "修改时间", dataIndex: "updateDate" },
]);
const state = reactive({
  visible: false,
  data: [],
});

const view = (row: IMenuTableRow) => {
  state.visible = true;
  nextTick(() => {
    const { data } = getForm();
  });
};
const del = (row: IMenuTableRow) => {
  axios.delete("http://localhost:8888/menus/" + row.id).then((res) => {
    state.visible = false;
    getList();
  });
};

const addRow = () => {
  state.visible = true;
};

const getForm = () => modalForm.value as IModalFormInstance<ICreateMenuForm>;

const submit = () => {
  const { form, data } = getForm();
  form.validate((valid: boolean) => {
    if (valid) {
      add(data).then((res) => {
        console.log(res);
      });
    }
  });
};
const handleClose = () => {};

const getList = () => {
  list({ current: 1, pageSize: 1, menuName: "路由菜单" });
};

onMounted(() => {
  getList();
});
</script>

<style scoped></style>
