import { SignUpInfo } from 'constants/SignUpInfo';
import IInputSignInErros from 'interfaces/IInputSignInErros';

export default interface IInputSignUpErros {
  [SignUpInfo.NAME.key]: boolean;
  [SignUpInfo.SIGN_IN_INFO.key]: IInputSignInErros;
}
