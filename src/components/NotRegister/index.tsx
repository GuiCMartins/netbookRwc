import Button from 'components/HtmlWrapped/Button';
import { ButtonContainer, DivContainer, Title } from './styles';

const NotRegister = () => {
  return (
    <DivContainer>
      <Title>Não esta cadastrado ainda? cadastre-se</Title>
      <ButtonContainer>
        <Button cancel text="Cadastre-se" />
      </ButtonContainer>
    </DivContainer>
  );
};

export default NotRegister;
