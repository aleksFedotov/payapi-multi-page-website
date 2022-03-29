import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const HeadingPrimary = styled.h1`
  max-width: 110rem;
  width: 100%;
  margin-top: 8.2rem;
  margin-bottom: 7.2rem;
  font-size: var(--font-size-heading-xl);
  color: var(--color-san-luan-blue);
  ${media.tablet} {
    text-align: center;
    font-size: var(--font-size-heading-l);
  }

  ${media.phone} {
    font-size: var(--font-size-heading-m);
  }
`;
