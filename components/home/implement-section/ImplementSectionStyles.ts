import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const SectionImplement = styled.section`
  max-width: 101.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;
  padding: 0 2.4rem;

  svg {
    width: 60.5rem;
    height: 44.4rem;
  }

  ${media.tablet} {
    flex-direction: column;
    margin-bottom: 10rem;
    gap: 4.8rem;

    svg {
      width: 41rem;
      height: 25rem;
      padding: 0 2.4rem;
    }
    div {
      max-width: 57.3rem;
      width: 100%;
    }
  }

  ${media.phone} {
    margin-top: 8rem;
    svg {
      width: 32.8rem;
      height: 20.9rem;
    }
  }
`;
