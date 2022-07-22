import IMessage from 'interfaces/IMessage';
import { MessageDiv } from './styles';

const Message = ({ text, alert = false }: IMessage) => {
  return <MessageDiv alert={alert}>{text}</MessageDiv>;
};

export default Message;
