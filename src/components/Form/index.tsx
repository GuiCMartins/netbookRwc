import { IForm } from 'interfaces/IForm';
import { FormContainer } from './styles';

const Form = ({ children, onSubmit }: IForm) => {
  return (
    <FormContainer onSubmit={onSubmit} autoComplete="off">
      {children}
    </FormContainer>
  );
};

export default Form;
