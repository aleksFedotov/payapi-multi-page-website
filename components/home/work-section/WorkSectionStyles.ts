import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const Section = styled.section`
  position: relative;
  width: calc(100% + 4.8rem);
  background-color: var(--color-mirage-blue);
  display: flex;
  justify-content: center;
  padding: 10rem 2.4rem;
  overflow: hidden;

  &::after {
    content: url('/assets/shared/desktop/bg-pattern-circle.svg');
    position: absolute;
    top: -35.9rem;
    left: -23.5rem;
    z-index: 1;

    ${media.tablet} {
      left: 50%;
      top: -54.8rem;
      transform: translate(-50%);
    }
  }
  ${media.tablet} {
    padding: 8.6rem 0;

    button {
      margin: 0 auto;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  max-width: 110rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ${media.tablet} {
    flex-direction: column-reverse;
    gap: 6rem;
  }
`;

export const ComapaniesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  row-gap: 4rem;
  column-gap: 6rem;
  align-items: center;

  svg {
    justify-self: center;

    path {
      fill: var(--color-water-white);
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
