import { Outlet } from 'react-router-dom';
import { HeaderHtml, Title } from './styles';

const InitialPageHeader = () => {
  return (
    <>
      <HeaderHtml>
        <Title>NetBook</Title>
      </HeaderHtml>
      <Outlet />
    </>
  );
};

export default InitialPageHeader;
