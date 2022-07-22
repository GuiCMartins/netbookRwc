import '../../index.css';
import { Card, ContainerCard } from './styles';
import LoginForm from 'components/Login/LoginForm';

const SignUp = () => {
  return (
    <ContainerCard>
      <Card>
        <LoginForm />
      </Card>
    </ContainerCard>
  );
};

export default SignUp;
