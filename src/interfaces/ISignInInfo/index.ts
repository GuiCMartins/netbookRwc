import { SignInInfo } from 'constants/SignInInfo';

export default interface ISignInInfo {
  [SignInInfo.EMAIL.key]: string;
  [SignInInfo.PASS.key]: string;
}
