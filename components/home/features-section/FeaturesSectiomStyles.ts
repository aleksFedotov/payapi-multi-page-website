import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const SectionFeatures = styled.section`
  max-width: 110rem;
  width: 100%;
  display: flex;
  gap: 3rem;

  ${media.tablet} {
    gap: 1.5rem;
  }

  ${media.phone} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Feature = styled.div`
  max-width: 35rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  h3 {
    font-size: 1.8rem;
    font-family: 'Public Sans', sans-serif;
    font-weight: 700;
    text-align: center;
    margin-top: 1.6rem;
  }

  p {
    text-align: center;
  }
`;
