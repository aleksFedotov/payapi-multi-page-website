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
      transform: translateX(-50%);
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
