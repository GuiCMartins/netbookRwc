import IButton from 'interfaces/IButton';
import { ButtonHtml } from './styles';

const Button = ({ text, cancel = false, onClick, type }: IButton) => {
  return (
    <ButtonHtml type={type} onClick={onClick} cancel={cancel}>
      {text}
    </ButtonHtml>
  );
};

export default Button;
