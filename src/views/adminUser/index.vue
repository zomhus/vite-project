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
import { list } from "./api";
import ModalForm from "./components/modalForm/index.vue";
import { IUserTableRow } from "./interface";

const modalForm = ref<IModalFormInstance<IUserTableRow>>();
const idRef = ref();
const columns = reactive([
  { title: "用户名字", dataIndex: "userName" },
  { title: "年龄", dataIndex: "age" },
  { title: "城市", dataIndex: "city" },
  { title: "学校", dataIndex: "school" },
]);
const state = reactive({
  visible: false,
  data: [],
});
const addRow = () => {
  state.visible = true;
};
const view = (scope: IUserTableRow) => {
  state.visible = true;
  nextTick(() => {
    let { data } = getForm();
    const { age, city, userName, school, id } = scope;
    idRef.value = id;
    data.userName = userName;
    data.age = age;
    data.school = school;
    data.city = city;
  });
};

const del = (scope: IUserTableRow) => {
  axios.delete(`http://localhost:3001/users/${scope.id}`).then((res) => {
    getFunc();
  });
};

const getForm = () => modalForm.value as IModalFormInstance<IUserTableRow>;

const submit = () => {
  const { form, data } = getForm();
  form.validate((valid) => {
    if (valid) {
      axios.post("http://localhost:3001/users", data).then((res) => {
        state.visible = false;
        getFunc();
      });
    }
  });
};
const getFunc = () => {
  list().then(() => {});
};

onMounted(() => {
  getFunc();
});
</script>

<style scoped></style>
