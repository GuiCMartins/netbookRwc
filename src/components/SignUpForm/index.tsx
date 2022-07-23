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
    [SignUpInfo.SIGN_IN_INFO.value.EMAIL.key]: '',
    [SignUpInfo.SIGN_IN_INFO.value.PASS.key]: '',
  });

  const [errors, setErrors] = useState<IInputSignUpErros>({
    [SignUpInfo.NAME.key]: false,
    [SignUpInfo.SIGN_IN_INFO.key]: {
      [SignUpInfo.SIGN_IN_INFO.value.EMAIL.key]: false,
      [SignUpInfo.SIGN_IN_INFO.value.PASS.key]: false,
    },
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
      [SignUpInfo.SIGN_IN_INFO.key]: {
        [SignUpInfo.SIGN_IN_INFO.value.EMAIL.key]: emailIsEmpty,
        [SignUpInfo.SIGN_IN_INFO.value.PASS.key]: passIsEmpty,
      },
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!errors.name && !errors.signIn.email && !errors.signIn.pass) {
      useService.create(userSignUpInfo);
    }
    event.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        info={SignUpInfo.NAME}
        onChange={setFormValues}
        errors={errors.name}
        type="text"
        value={userSignUpInfo.name}
      />
      <FormInput
        info={SignUpInfo.SIGN_IN_INFO.value.EMAIL}
        onChange={setFormValues}
        errors={errors.signIn.email}
        type="email"
        value={userSignUpInfo.email}
      />
      <FormInput
        info={SignUpInfo.SIGN_IN_INFO.value.PASS}
        onChange={setFormValues}
        errors={errors.signIn.pass}
        type="password"
        value={userSignUpInfo.pass}
      />
      <Button type="submit" onClick={userSignUpInfoValidate} text="Enviar" />
    </Form>
  );
};

export default SignUpForm;
