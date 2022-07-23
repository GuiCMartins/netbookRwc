import '../../index.css';
import { Card, ContainerCard } from './styles';
import SignUpForm from 'components/SignUpForm';

const SignUp = () => {
  return (
    <ContainerCard>
      <Card>
        <SignUpForm />
      </Card>
    </ContainerCard>
  );
};

export default SignUp;
