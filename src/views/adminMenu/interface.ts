export interface IMenuForm {
  parentId: number;
  path: string;
  componentName: string;
  menuName: string;
}

export interface IMenuTableRow extends IMenuForm {
  id: number;
  updateDate: Date;
  createdDate: Date;
}
