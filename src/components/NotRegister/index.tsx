import Button from 'components/HtmlWrapped/Button';
import { Rotas } from 'constants/Rotas';
import { Link } from 'react-router-dom';
import { ButtonContainer, DivContainer, Title } from './styles';

const NotRegister = () => {
  return (
    <DivContainer>
      <Title>Não esta cadastrado ainda? cadastre-se</Title>
      <ButtonContainer>
        <Link to={Rotas.SIGNUP.path}>
          <Button cancel text="Cadastre-se" />
        </Link>
      </ButtonContainer>
    </DivContainer>
  );
};

export default NotRegister;
