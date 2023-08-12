import styled from 'styled-components';

type ContainerProps = { height?: string };

export const Container = styled.div`
  background-color: #2b3035;
  height: ${({ height }: ContainerProps) => height ?? '60%'};
`;
