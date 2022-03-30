import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const MainContainer = styled.main`
  position: relative;
  max-width: 144rem;
  width: 100%;
  margin: 0 auto;

  height: fit-content;
  background-color: #edf3f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 0 2.4rem;

  &.home {
    &::before {
      content: '';
      background-image: url('/assets/shared/desktop/bg-pattern-circle.svg');
      position: absolute;
      z-index: 2;
      width: 78rem;
      height: 78rem;
      background-repeat: no-repeat;
      background-size: cover;
      top: -17.2rem;
      right: -14rem;

      ${media.tablet} {
        right: 50%;
        top: -66.3rem;
        width: 94.9rem;
        height: 94.9rem;
        transform: translateX(50%);
      }
    }
  }

  &.pricing,
  &.contact,
  &.about {
    &::before {
      content: '';
      background-image: url('/assets/shared/desktop/bg-pattern-circle.svg');
      position: absolute;
      z-index: 0;
      width: 78rem;
      height: 78rem;
      background-repeat: no-repeat;
      background-size: cover;
      top: -52.7rem;
      right: -14rem;

      ${media.tablet} {
        top: -46.4rem;
        right: -51.7rem;
      }

      ${media.phone} {
        top: -64.4rem;
        right: -48rem;
      }
    }
  }

  &.about,
  &.contact {
    h1 {
      max-width: 73rem;
      width: 100%;
    }
  }
`;
