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

      <el-table-column prop="users" label="产权人">
        <template #default="{ row }">
          <span>{{ row.user.userName }}</span>
        </template>
      </el-table-column>
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
import { IHouse, IHouseTableRow } from "./interface";

const modalForm = ref<IModalFormInstance<IHouse>>();

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

const view = (row: IHouse) => {
  state.visible = true;
  nextTick(() => {
    const { data } = getForm();
    const { address, floor, communityName, compleYear, user } = row;
    data.address = address;
    data.floor = floor;
    data.communityName = communityName;
    data.compleYear = compleYear;
    data.userId = user.id;
  });
};
const del = (row: IHouseTableRow) => {
  axios.delete("http://localhost:3001/houses/" + row.id).then((res) => {
    state.visible = false;
    getList();
  });
};

const addRow = () => {
  state.visible = true;
};

const getForm = () => modalForm.value as IModalFormInstance<IHouse>;

const submit = () => {
  const { form, data } = getForm();
  form.validate((valid: boolean) => {
    if (valid) {
      axios.post("http://localhost:3001/houses", data).then((res) => {
        state.visible = false;
        getList();
      });
    }
  });
};
const handleClose = () => {};

const getList = () => {
  axios.get("http://localhost:3001/houses").then((res) => {
    state.data = res.data;
  });
};

onMounted(() => {
  getList();
});
</script>

<style scoped></style>
