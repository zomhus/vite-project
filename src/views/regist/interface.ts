export interface ICreateUserForm {
  userName: string;
  password: string;
  school: string;
  passwordRepeat: string;
  phone: number | string;
  sex: number;
  realName: string;
  age: string | number;
}
