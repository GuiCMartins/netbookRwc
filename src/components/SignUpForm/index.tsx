import { SignUpInfo } from 'constants/SignUpInfo';
import ISignUpInfo from 'interfaces/ISignUpInfo';
import { useState } from 'react';
import FormInput from 'components/FormInput';
import { isStringEmpty } from 'utils/StringUtils';
import Button from 'components/HtmlWrapped/Button';
import Form from 'components/Form';
import { create } from 'controller/User';

const SignUpForm = () => {
  const [userSignUpInfo, setUserSignUpInfo] = useState<ISignUpInfo>({
    [SignUpInfo.NAME.key]: '',
    [SignUpInfo.SIGN_IN_INFO.value.EMAIL.key]: '',
    [SignUpInfo.SIGN_IN_INFO.value.PASS.key]: '',
  });

  const [isValidName, setIsValidName] = useState<boolean | undefined>(
    undefined
  );
  const [isValidEmail, setIsValidEmail] = useState<boolean | undefined>(
    undefined
  );
  const [isValidPass, setIsValidPass] = useState<boolean | undefined>(
    undefined
  );

  const setFormValues = (key: string, value: string) => {
    setUserSignUpInfo({
      ...userSignUpInfo,
      [key]: value,
    });
  };

  const userSignUpInfoValidate = () => {
    const nameIsEmpty = isStringEmpty(userSignUpInfo.name);
    const emailIsEmpty = isStringEmpty(userSignUpInfo.email);
    const passIsEmpty = isStringEmpty(userSignUpInfo.pass);

    setIsValidName(nameIsEmpty);
    setIsValidEmail(emailIsEmpty);
    setIsValidPass(passIsEmpty);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!isValidName && !isValidEmail && !isValidPass) {
      create(userSignUpInfo);
    }
    event.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        info={SignUpInfo.NAME}
        onChange={setFormValues}
        isValid={isValidName}
        setIsValid={setIsValidName}
        type="text"
        value={userSignUpInfo.name}
      />
      <FormInput
        info={SignUpInfo.SIGN_IN_INFO.value.EMAIL}
        onChange={setFormValues}
        isValid={isValidEmail}
        setIsValid={setIsValidEmail}
        type="email"
        value={userSignUpInfo.email}
      />
      <FormInput
        info={SignUpInfo.SIGN_IN_INFO.value.PASS}
        onChange={setFormValues}
        isValid={isValidPass}
        setIsValid={setIsValidPass}
        type="password"
        value={userSignUpInfo.pass}
      />
      <Button type="submit" onClick={userSignUpInfoValidate} text="Enviar" />
    </Form>
  );
};

export default SignUpForm;
