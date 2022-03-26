import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const MainContainer = styled.main`
  position: relative;
  max-width: 144rem;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  height: fit-content;
  background-color: #edf3f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  overflow: hidden;

  &.home {
    &::before {
      content: '';
      background-image: url('/assets/shared/desktop/bg-pattern-circle.svg');
      position: absolute;
      z-index: -1;
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
`;
