import Form from 'components/Form';
import Button from 'components/HtmlWrapped/Button';
import FormInput from 'components/FormInput';
import { SignUpInfo } from 'constants/SignUpInfo';
import IInputSignUpErros from 'interfaces/IInputSignUpErros';
import ISignUpInfo from 'interfaces/ISignUpInfo';
import { useState } from 'react';

const SignInForm = () => {
  const [userLoginInfo, setUserLoginInfo] = useState<ISignUpInfo>({
    [SignUpInfo.NAME.key]: '',
    [SignUpInfo.EMAIL.key]: '',
    [SignUpInfo.PASS.key]: '',
  });

  const [errors, setErrors] = useState<IInputSignUpErros>({
    [SignUpInfo.NAME.key]: false,
    [SignUpInfo.EMAIL.key]: false,
    [SignUpInfo.PASS.key]: false,
  });

  const setFormValues = (key: string, value: string) => {
    setUserLoginInfo({
      ...userLoginInfo,
      [key]: value,
    });
  };

  const onSubmit = () => {};

  const userLoginInfoValidate = () => {};

  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        info={SignUpInfo.EMAIL}
        onChange={setFormValues}
        errors={errors.email}
        type="email"
        value={userLoginInfo.email}
      />
      <FormInput
        info={SignUpInfo.PASS}
        onChange={setFormValues}
        errors={errors.pass}
        type="password"
        value={userLoginInfo.pass}
      />
      <Button type="submit" onClick={userLoginInfoValidate} text="Entrar" />
    </Form>
  );
};

export default SignInForm;
