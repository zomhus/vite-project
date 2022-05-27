export interface ICreateMenuForm {
  parentId: number | string;
  pathName: string;
  componentName: string;
  menuName: string;
  iconName: string;
}

export interface ICreateMenuFormTree extends ICreateMenuForm {
  children: ICreateMenuFormTree[];
}

export interface IQueryMenuCondition {
  current?: number;
  pageSize?: number;
  menuName?: string;
  iconName?: string;
}

export interface IMenuTableRow extends ICreateMenuForm {
  id: number;
  updateDate: Date;
  createdDate: Date;
}
