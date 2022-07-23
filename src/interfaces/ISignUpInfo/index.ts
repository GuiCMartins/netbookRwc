import { SignUpInfo } from 'constants/SignUpInfo';

export default interface ISignUpInfo {
  [SignUpInfo.NAME.key]: string;
  [SignUpInfo.EMAIL.key]: string;
  [SignUpInfo.PASS.key]: string;
}
