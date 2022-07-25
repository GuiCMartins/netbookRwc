import Form from 'components/Form';
import Button from 'components/HtmlWrapped/Button';
import FormInput from 'components/FormInput';
import { SignInInfo } from 'constants/SignInInfo';
import { useState } from 'react';
import ISignInInfo from 'interfaces/ISignInInfo';
import { isStringEmpty } from 'utils/StringUtils';
import { signInFirebaseUser } from 'services/Firebase';
import { logInNetbookUser } from 'services/Netbook/User';

const SignInForm = () => {
  const [userSignInInfo, setUserSignInInfo] = useState<ISignInInfo>({
    [SignInInfo.EMAIL.key]: '',
    [SignInInfo.PASS.key]: '',
  });

  const [isValidEmail, setIsValidEmail] = useState<boolean | undefined>(
    undefined
  );
  const [isValidPass, setIsValidPass] = useState<boolean | undefined>(
    undefined
  );

  const setFormValues = (key: string, value: string) => {
    setUserSignInInfo({
      ...userSignInInfo,
      [key]: value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!isValidEmail && !isValidPass) {
      signInFirebaseUser(userSignInInfo)
        .then(async (user) => {
          await logInNetbookUser(user);
        })
        .catch((e) => {
          alert(e.message);
        });
    }
    event.preventDefault();
  };

  const userLoginInfoValidate = () => {
    const emailIsEmpty = isStringEmpty(userSignInInfo.email);
    const passIsEmpty = isStringEmpty(userSignInInfo.pass);

    setIsValidEmail(emailIsEmpty);
    setIsValidPass(passIsEmpty);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        info={SignInInfo.EMAIL}
        onChange={setFormValues}
        isValid={isValidEmail}
        setIsValid={setIsValidEmail}
        type="email"
        value={userSignInInfo.email}
      />
      <FormInput
        info={SignInInfo.PASS}
        onChange={setFormValues}
        isValid={isValidPass}
        setIsValid={setIsValidPass}
        type="password"
        value={userSignInInfo.pass}
      />
      <Button type="submit" onClick={userLoginInfoValidate} text="Entrar" />
    </Form>
  );
};

export default SignInForm;
