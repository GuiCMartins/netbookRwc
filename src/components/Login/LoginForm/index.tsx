import { LoginInfo } from 'constants/LoginInfo';
import ILoginInfo from 'interfaces/ILoginInfo';
import { useState } from 'react';
import { useUserService } from 'services/userService';
import { Form } from './styles';
import LoginFormInput from 'components/Login/LoginFormInput';
import { isStringEmpty } from 'utils/StringUtils';
import IInputLoginErros from 'interfaces/IInputLoginErros';
import Button from 'components/HtmlWrapped/Button';

const LoginForm = () => {
  const useService = useUserService();

  const [userLoginInfo, setUserLoginInfo] = useState<ILoginInfo>({
    [LoginInfo.NAME.key]: '',
    [LoginInfo.EMAIL.key]: '',
    [LoginInfo.PASS.key]: '',
  });

  const [errors, setErrors] = useState<IInputLoginErros>({
    [LoginInfo.NAME.key]: false,
    [LoginInfo.EMAIL.key]: false,
    [LoginInfo.PASS.key]: false,
  });

  const setFormValues = (key: string, value: string) => {
    setUserLoginInfo({
      ...userLoginInfo,
      [key]: value,
    });
  };

  const userLoginInfoValidate = () => {
    const nameIsEmpty = isStringEmpty(userLoginInfo.name);
    const emailIsEmpty = isStringEmpty(userLoginInfo.email);
    const passIsEmpty = isStringEmpty(userLoginInfo.pass);

    setErrors({
      [LoginInfo.NAME.key]: nameIsEmpty,
      [LoginInfo.EMAIL.key]: emailIsEmpty,
      [LoginInfo.PASS.key]: passIsEmpty,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!errors.name && !errors.email && !errors.pass) {
      useService.create(userLoginInfo);
    }
    event.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <LoginFormInput
        info={LoginInfo.NAME}
        onChange={setFormValues}
        error={errors.name}
        type="text"
        value={userLoginInfo.name}
      />
      <LoginFormInput
        info={LoginInfo.EMAIL}
        onChange={setFormValues}
        error={errors.email}
        type="email"
        value={userLoginInfo.email}
      />
      <LoginFormInput
        info={LoginInfo.PASS}
        onChange={setFormValues}
        error={errors.pass}
        type="password"
        value={userLoginInfo.pass}
      />
      <Button type="submit" onClick={userLoginInfoValidate} text="Enviar" />
    </Form>
  );
};

export default LoginForm;
