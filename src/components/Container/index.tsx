import { ReactNode } from 'react';
import { PrimaryContainer, SecondContainer } from './styles';

type PropsWithChildren = { children: ReactNode };

const Container = ({ children }: PropsWithChildren) => {
  return (
    <PrimaryContainer className="container-fluid text-center vw-80">
      <SecondContainer className="row h-100 justify-content-around align-items-center">
        {children}
      </SecondContainer>
    </PrimaryContainer>
  );
};

export default Container;
