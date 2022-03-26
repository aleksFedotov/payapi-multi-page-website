import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

interface TextWrapperProps {
  color: string;
}

export const TextWrapper = styled.div<TextWrapperProps>`
  max-width: 44.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h2,
  p {
    color: ${({ color }) =>
      color === 'white'
        ? 'var(--color-water-white)'
        : 'var( --color-san-luan-blue)'};
  }

  p {
    opacity: 0.7;
  }

  ${media.tablet} {
    h2 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }

  ${media.phone} {
    h2 {
      font-size: var(--font-size-heading-m);
    }
  }
`;
