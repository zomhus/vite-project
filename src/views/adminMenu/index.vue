<template>
  <div class="admin-house">
    <el-button @click="addRow">新增</el-button>
    <el-input
      style="width: 250px"
      v-model="searchCondition.iconName"
    ></el-input>
    <el-button @click="getList({ current: 1 })">搜索</el-button>

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
    <el-pagination
      v-model:currentPage="searchCondition.current"
      v-model:page-size="searchCondition.pageSize"
      :total="total"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="(pageSize) => getList({ pageSize })"
      @current-change="(current) => getList({ current })"
    />
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
import { nextTick, onMounted, reactive, ref } from "vue-demi";
import { IModalFormInstance } from "../../interfaces/index";
import ModalForm from "./components/modalForm/index.vue";
import {
  ICreateMenuForm,
  IMenuTableRow,
  IQueryMenuCondition,
} from "./interface";
import { add, delApi, list } from "./api";
const modalForm = ref<IModalFormInstance<ICreateMenuForm>>();

const columns = ref([
  { title: "ID", dataIndex: "id" },
  { title: "路由地址", dataIndex: "pathName" },
  { title: "菜单名称", dataIndex: "menuName" },
  { title: "组件名称", dataIndex: "componentName" },
  { title: "生成时间", dataIndex: "createDate" },
  { title: "修改时间", dataIndex: "updateDate" },
]);
const state = reactive<{ visible: boolean; data: IMenuTableRow[] }>({
  visible: false,
  data: [],
});

const searchCondition = ref<IQueryMenuCondition>({
  current: 1,
  pageSize: 10,
  menuName: "",
  iconName: "",
});

const total = ref<number>(0);
const view = (row: IMenuTableRow) => {
  state.visible = true;
  nextTick(() => {
    const { data } = getForm();
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
        state.visible = false;
        getList({ current: 1 });
      });
    }
  });
};
const handleClose = () => {};

const getList = (params?: IQueryMenuCondition) => {
  list({
    ...searchCondition.value,
    ...params,
  }).then((res) => {
    state.data = res.data.data;
    total.value = res.data.total;
  });
};

const del = (row: IMenuTableRow) => {
  delApi(row.id).then(() => {
    getList({ current: 1 });
  });
};

onMounted(() => {
  getList();
});
</script>

<style scoped></style>
