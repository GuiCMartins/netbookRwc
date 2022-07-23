import { SignUpInfo } from 'constants/SignUpInfo';

export default interface IInputSignUpErros {
  [SignUpInfo.NAME.key]: boolean;
  [SignUpInfo.EMAIL.key]: boolean;
  [SignUpInfo.PASS.key]: boolean;
}
