import NotRegister from 'components/NotRegister';
import SignInForm from 'components/SignInForm';
import { Card, ContainerCard, SignInContainer } from './styles';

const SignIn = () => {
  return (
    <SignInContainer>
      <ContainerCard>
        <Card>
          <SignInForm />
        </Card>
      </ContainerCard>
      <ContainerCard>
        <Card>
          <NotRegister />
        </Card>
      </ContainerCard>
    </SignInContainer>
  );
};

export default SignIn;
