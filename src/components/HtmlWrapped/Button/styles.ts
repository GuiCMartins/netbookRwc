import styled from 'styled-components';

export const ButtonHtml = styled.button<{ cancel: boolean }>`
  padding: 0.5rem 0.75rem;
  font-weight: bold;
  background: ${(props) => (props.cancel ? '#6c757d' : '#c298d8')};
  color: ${(props) => (props.cancel ? '#ffffff' : '#151515')};
  border: ${(props) => `1px solid ${props.cancel ? '#6c757d' : '#c298d8'}`};
  border-radius: 4px;
  transition: 1s background-color, 1s border-color;

  &:hover {
    background: ${(props) => (props.cancel ? '#42494e' : '#c673f1')};
    border: ${(props) => `1px solid ${props.cancel ? '#42494e' : '#c673f1'}`};
    cursor: pointer;
  }
`;
