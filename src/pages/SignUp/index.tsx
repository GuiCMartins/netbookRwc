import ContainerCenter from 'components/ContainerCenter';
import FormCard from 'components/FormCard';
import SignUpForm from 'components/SignUpForm';

const SignUp = () => {
  return (
    <ContainerCenter>
      <FormCard height="80%">
        <SignUpForm />
      </FormCard>
    </ContainerCenter>
  );
};

export default SignUp;
