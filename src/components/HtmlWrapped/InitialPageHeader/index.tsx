import { Link, Outlet } from 'react-router-dom';
import { HeaderHtml, Title } from './styles';
import { Rotas } from 'constants/Rotas';
import Button from '../Button';
import Container from 'components/Container';

const InitialPageHeader = () => {
  return (
    <>
      <HeaderHtml className="d-flex justify-content-between">
        <Title className="d-flex justify-content-flex-start align-items-center h-100 ms-3">
          NetBook
        </Title>
        <div className="d-flex justify-content-center align-items-center me-3">
          <Link to={Rotas.SIGNUP.path}>
            <Button className={'btn-secondary'} text="Cadastre-se" />
          </Link>
        </div>
      </HeaderHtml>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default InitialPageHeader;
