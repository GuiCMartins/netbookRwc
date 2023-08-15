import SignInForm from 'components/SignInForm';
import FormCard from 'components/FormCard';
import ContainerCenter from 'components/ContainerCenter';

const SignIn = () => {
  return (
    <ContainerCenter>
      <FormCard>
        <SignInForm />
      </FormCard>
    </ContainerCenter>
  );
};

export default SignIn;
