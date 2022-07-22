import styled from 'styled-components';

export const MessageDiv = styled.div<{ alert: boolean }>`
  padding: 0.5em;
  text-align: center;
  font-size: 1rem;
  font-weight: normal;
  border-radius: 0.4em;
  color: ${(props) => (props.alert ? '#721c24' : '#155724')};
  background-color: ${(props) => (props.alert ? '#ffe7e6' : '#d4edda')};
`;
