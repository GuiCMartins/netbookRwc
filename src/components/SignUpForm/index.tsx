import { SignUpInfo } from 'constants/SignUpInfo';
import ISignUpInfo from 'interfaces/ISignUpInfo';
import { useState } from 'react';
import { useUserService } from 'services/userService';
import FormInput from 'components/FormInput';
import { isStringEmpty } from 'utils/StringUtils';
import IInputSignUpErros from 'interfaces/IInputSignUpErros';
import Button from 'components/HtmlWrapped/Button';
import Form from 'components/Form';

const SignUpForm = () => {
  const useService = useUserService();

  const [userSignUpInfo, setUserSignUpInfo] = useState<ISignUpInfo>({
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
    setUserSignUpInfo({
      ...userSignUpInfo,
      [key]: value,
    });
  };

  const userSignUpInfoValidate = () => {
    const nameIsEmpty = isStringEmpty(userSignUpInfo.name);
    const emailIsEmpty = isStringEmpty(userSignUpInfo.email);
    const passIsEmpty = isStringEmpty(userSignUpInfo.pass);

    setErrors({
      [SignUpInfo.NAME.key]: nameIsEmpty,
      [SignUpInfo.EMAIL.key]: emailIsEmpty,
      [SignUpInfo.PASS.key]: passIsEmpty,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!errors.name && !errors.email && !errors.pass) {
      useService.create(userSignUpInfo);
    }
    event.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        info={SignUpInfo.NAME}
        onChange={setFormValues}
        error={errors.name}
        type="text"
        value={userSignUpInfo.name}
      />
      <FormInput
        info={SignUpInfo.EMAIL}
        onChange={setFormValues}
        error={errors.email}
        type="email"
        value={userSignUpInfo.email}
      />
      <FormInput
        info={SignUpInfo.PASS}
        onChange={setFormValues}
        error={errors.pass}
        type="password"
        value={userSignUpInfo.pass}
      />
      <Button type="submit" onClick={userSignUpInfoValidate} text="Enviar" />
    </Form>
  );
};

export default SignUpForm;
