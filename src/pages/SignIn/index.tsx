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
          <SignInForm />
        </Card>
      </ContainerCard>
    </SignInContainer>
  );
};

export default SignIn;
