import InputText from 'components/HtmlWrapped/InputText';
import Label from 'components/HtmlWrapped/Label';
import Message from 'components/Message';
import IFormInput from 'interfaces/IFormInput';
import { useState } from 'react';
import { useEffect } from 'react';
import { isStringEmpty } from 'utils/StringUtils';
import { InputContainer } from './styles';

const FormInput = ({
  value,
  info,
  type,
  isValid,
  setIsValid,
  onChange,
}: IFormInput) => {
  useEffect(() => {
    if (isValid === undefined) {
      setIsValid(false);
      return;
    }

    setIsValid(isStringEmpty(value));
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
      {isValid && <Message alert text={'Campo obrigatório!'} />}
    </InputContainer>
  );
};

export default FormInput;
