import Form from 'components/Form';
import Button from 'components/HtmlWrapped/Button';
import FormInput from 'components/FormInput';
import { SignInInfo } from 'constants/SignInInfo';
import { useState } from 'react';
import ISignInInfo from 'interfaces/ISignInInfo';
import IInputSignInErros from 'interfaces/IInputSignInErros';
import { isStringEmpty } from 'utils/StringUtils';

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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!errors.email && !errors.pass) {
    }
    event.preventDefault();
  };

  const userLoginInfoValidate = () => {
    const emailIsEmpty = isStringEmpty(userSignInInfo.email);
    const passIsEmpty = isStringEmpty(userSignInInfo.pass);

    setErrors({
      [SignInInfo.EMAIL.key]: emailIsEmpty,
      [SignInInfo.PASS.key]: passIsEmpty,
    });
  };

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
