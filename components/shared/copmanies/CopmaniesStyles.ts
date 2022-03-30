import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

interface CompaniesProps {
  color: string;
}

export const ComapaniesGrid = styled.div<CompaniesProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  row-gap: 4rem;
  column-gap: 6rem;
  align-items: center;

  svg {
    justify-self: center;

    path {
      fill: ${({ color }) =>
        color === 'light'
          ? 'var(--color-water-white)'
          : 'var(--color-san-luan-blue)'};
    }
  }

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.phone} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;

    svg {
      transform: scale(0.82);
    }
  }
`;
