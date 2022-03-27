import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';

export const SectionSimple = styled.div`
  display: flex;
  max-width: 110rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: url('/assets/shared/desktop/bg-pattern-circle.svg');
    position: absolute;
    top: 52%;
    right: -39rem;
    z-index: -1;

    ${media.tablet} {
      content: none;
    }
  }

  img {
    margin-right: -13rem;
    position: relative;

    @media (max-width: 1150px) {
      margin-right: -10rem;
    }

    ${media.tablet} {
      transform: scale(0.64);
      margin-right: -4rem;
    }

    ${media.phone} {
      transform: scale(0.58);
    }
  }

  ${media.tablet} {
    flex-direction: column-reverse;
    margin-bottom: 10rem;
    margin-top: -14rem;

    div {
      max-width: 57.3rem;
      width: 100%;
      margin-top: -13rem;
    }
  }

  ${media.phone} {
    margin-top: -18rem;
    margin-bottom: 8rem;
  }
`;
