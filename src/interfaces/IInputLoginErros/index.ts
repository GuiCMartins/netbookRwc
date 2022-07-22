import { LoginInfo } from 'constants/LoginInfo';

export default interface IInputLoginErros {
  [LoginInfo.NAME.key]: boolean;
  [LoginInfo.EMAIL.key]: boolean;
  [LoginInfo.PASS.key]: boolean;
}
