import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';

export const DemoEmailWrapper = styled.div`
  position: relative;
  max-width: 44.5rem;
  width: 100%;

  cursor: pointer;

  button {
    width: 17.3rem;
    position: absolute;
    right: 0;

    top: 0;
  }

  ${media.phone} {
    height: 11.2rem;
    max-width: 100%;
    button {
      width: 100%;
      left: 0;
      right: 0;
      top: 6.4rem;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-water-white);
  box-shadow: 1rem 1rem 2.5rem -1rem rgba(54, 83, 107, 0.25);
  border-radius: 2.4rem;
  padding-left: 2.8rem;
  font-family: 'Public Sans', sans-serif;
  height: 4.8rem;

  input {
    font-family: inherit;
    font-size: var(--font-size-body);
    color: var(--color-san-luan-blue);
    border: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-family: inherit;
      opacity: 0.5;
    }
  }

  ${media.tablet} {
    p {
      bottom: 5rem;
    }
  }

  ${media.phone} {
    p {
      left: auto;
      right: 2.8rem;
      bottom: 50%;
      transform: translateY(50%);
    }
  }
`;
