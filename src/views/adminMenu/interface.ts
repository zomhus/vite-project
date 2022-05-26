export interface IMenuForm {
  parentId: number;
  path: string;
  componentName: string;
  menuName: string;
  iconName: string;
}

export interface IMenuTableRow extends IMenuForm {
  id: number;
  updateDate: Date;
  createdDate: Date;
}
