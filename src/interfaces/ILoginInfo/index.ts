import { LoginInfo } from 'constants/LoginInfo';

export default interface ILoginInfo {
  [LoginInfo.NAME.key]: string;
  [LoginInfo.EMAIL.key]: string;
  [LoginInfo.PASS.key]: string;
}
