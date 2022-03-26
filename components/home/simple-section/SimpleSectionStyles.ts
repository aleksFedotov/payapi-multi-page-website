import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';

export const SectionSimple = styled.div`
  display: flex;
  max-width: 110rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4rem;

  svg {
    width: 56.5rem;
    height: 49.7rem;
    z-index: 1;
  }

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

  ${media.tablet} {
    flex-direction: column-reverse;

    span {
      width: 49.5rem !important;
      height: 42.3rem !important;
      margin-left: 6rem !important;
    }
    div {
      max-width: 57.3rem;
      width: 100%;
    }

    margin-bottom: 10rem;
  }
`;

export const ImageWrapper = styled.div`
  margin-right: -13rem;
  position: relative;

  @media (max-width: 1100px) {
    margin-right: 0rem;
  }
`;
