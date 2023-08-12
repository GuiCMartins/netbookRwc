import { ReactNode } from 'react';
import { Container } from './styles';

type PropsWithChildren = { children: ReactNode; height?: string };

const FormCard = ({ children, height }: PropsWithChildren) => {
  return (
    <Container height={height} className="col-lg-4 rounded-5 p-4">
      {children}
    </Container>
  );
};

export default FormCard;
