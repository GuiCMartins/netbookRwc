import Form from 'components/Form';
import Button from 'components/HtmlWrapped/Button';
import FormInput from 'components/FormInput';
import { SignInInfo } from 'constants/SignInInfo';
import { useState } from 'react';
import ISignInInfo from 'interfaces/ISignInInfo';
import IInputSignInErros from 'interfaces/IInputSignInErros';

const SignInForm = () => {
  const [userSignInInfo, setUserSignInInfo] = useState<ISignInInfo>({
    [SignInInfo.EMAIL.key]: '',
    [SignInInfo.PASS.key]: '',
  });

  const [errors, setErrors] = useState<IInputSignInErros>({
    [SignInInfo.EMAIL.key]: false,
    [SignInInfo.PASS.key]: false,
  });

  const setFormValues = (key: string, value: string) => {
    setUserSignInInfo({
      ...userSignInInfo,
      [key]: value,
    });
  };

  const onSubmit = () => {};

  const userLoginInfoValidate = () => {};

  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        info={SignInInfo.EMAIL}
        onChange={setFormValues}
        errors={errors.email}
        type="email"
        value={userSignInInfo.email}
      />
      <FormInput
        info={SignInInfo.PASS}
        onChange={setFormValues}
        errors={errors.pass}
        type="password"
        value={userSignInInfo.pass}
      />
      <Button type="submit" onClick={userLoginInfoValidate} text="Entrar" />
    </Form>
  );
};

export default SignInForm;
