import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const SectionImplement = styled.section`
  max-width: 110rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10rem;

  img {
    margin-left: -7.4rem;
  }

  div {
    margin-top: -4rem;
  }

  ${media.tablet} {
    flex-direction: column;
    margin-bottom: 10rem;
    gap: 4.8rem;

    img {
      transform: scale(0.92);
      margin-left: 5rem;
    }
    div {
      margin-top: -10rem;
      max-width: 57.3rem;
      width: 100%;
    }
  }

  ${media.phone} {
    margin-top: 0rem;
    margin-bottom: 8rem;
    img {
      transform: scale(0.73);
      margin-left: 4rem;
    }

    div {
      margin-top: -13rem;
    }
  }
`;
