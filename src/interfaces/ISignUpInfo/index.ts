import { SignUpInfo } from 'constants/SignUpInfo';

export default interface ISignUpInfo {
  [SignUpInfo.NAME.key]: string;
  [SignUpInfo.SIGN_IN_INFO.value.EMAIL.key]: string;
  [SignUpInfo.SIGN_IN_INFO.value.PASS.key]: string;
}
