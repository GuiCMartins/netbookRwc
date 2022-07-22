import InputText from 'components/HtmlWrapped/InputText';
import Label from 'components/HtmlWrapped/Label';
import Message from 'components/Message';
import ILoginFormInput from 'interfaces/ILoginFormInput';
import { useState } from 'react';
import { useEffect } from 'react';
import { isStringEmpty } from 'utils/StringUtils';
import { InputContainer } from './styles';

const LoginFormInput = ({
  value,
  info,
  type,
  error,
  onChange,
}: ILoginFormInput) => {
  const [erro, setErro] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (erro === undefined) {
      setErro(false);
      return;
    }

    setErro(isStringEmpty(value));
  }, [value]);

  return (
    <InputContainer>
      <Label htmlFor={info.key} content={info.value} />
      <InputText
        id={info.key}
        placeholder={info.value}
        value={value}
        type={type}
        onChange={(event) => onChange(info.key, event.target.value)}
      />
      {(erro || error) && <Message alert text={'Campo obrigatório!'} />}
    </InputContainer>
  );
};

export default LoginFormInput;
