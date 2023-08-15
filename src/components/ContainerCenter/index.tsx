import { ReactNode } from 'react';

interface ContainerCenterProps {
  children: ReactNode;
}

const ContainerCenter = ({ children }: ContainerCenterProps) => {
  return (
    <div className="d-flex justify-content-around align-items-center">
      {children}
    </div>
  );
};

export default ContainerCenter;
