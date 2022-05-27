export interface ICreateMenuForm {
  parentId: number | string;
  pathName: string;
  componentName: string;
  menuName: string;
  iconName: string;
}

export interface IQueryMenuCondition {
  current?: number;
  pageSize?: number;
  menuName?: string;
}

export interface IMenuTableRow extends ICreateMenuForm {
  id: number;
  updateDate: Date;
  createdDate: Date;
}
