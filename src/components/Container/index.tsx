import { ReactNode } from 'react';
import { PrimaryContainer } from './styles';

type PropsWithChildren = { children: ReactNode };

const Container = ({ children }: PropsWithChildren) => {
  return (
    <PrimaryContainer className="container-fluid text-center p-4 vw-80">
      <div className="row h-100 justify-content-around align-items-center">
        {children}
      </div>
    </PrimaryContainer>
  );
};

export default Container;
