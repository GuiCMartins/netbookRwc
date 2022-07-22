import IInputText from 'interfaces/IInputText';
import { Input } from './styles';

const InputText = ({
  id,
  placeholder,
  value,
  type = 'text',
  required = false,
  onChange,
}: IInputText) => {
  return (
    <Input
      id={id}
      placeholder={placeholder}
      value={value}
      required={required}
      type={type}
      onChange={onChange}
    />
  );
};

export default InputText;
