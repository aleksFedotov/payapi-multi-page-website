import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const FooterWrapper = styled.footer`
  position: relative;
  width: calc(100% + 4.8rem);
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-mirage-blue);
  overflow: hidden;
  padding: 0 2.4rem;

  &::before {
    content: url('/assets/shared/desktop/bg-pattern-circle.svg');
    position: absolute;
    z-index: 0;
    top: -13.6rem;
    right: -39rem;
    width: 78rem;
    height: 78rem;

    ${media.phone} {
      left: 50%;
      transform: translateX(-50%);
      top: 20.2rem;
    }
  }

  svg {
    path {
      fill: var(--color-water-white);
    }
  }

  ${media.phone} {
    height: fit-content;
    padding: 4rem 0;
  }
`;

export const FooterContent = styled.div`
  max-width: 110rem;
  width: 100%;
  display: flex;
  align-items: center;

  ${media.phone} {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`;

export const Socials = styled.div`
  max-width: 12rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;

  a {
    cursor: pointer;
    &:hover {
      svg {
        path {
          fill: var(--color-charm-pink);
        }
      }
    }
  }

  ${media.phone} {
    margin-left: 0;
  }
`;
