import styled from 'styled-components';

interface ErrorProps {
  bottom: string;
  left: string;
}

export const ErrorMessage = styled.p<ErrorProps>`
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  color: #ff0000;
  opacity: 0.5;
  font-family: 'Public Sans', sans-serif;
`;
