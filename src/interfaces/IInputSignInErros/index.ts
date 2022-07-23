import { SignInInfo } from 'constants/SignInInfo';

export default interface IInputSignInErros {
  [SignInInfo.EMAIL.key]: boolean;
  [SignInInfo.PASS.key]: boolean;
}
