import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

export const HeadingWrapper = styled.div`
  display: flex;
  max-width: 110rem;
  width: 100%;

  ${media.tablet} {
    justify-content: center;
  }
`;

export const ContactContentWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 110rem;
  width: 100%;
  gap: 12rem;

  ${media.tablet} {
    flex-direction: column;
    gap: 6rem;
  }
`;

export const JoinContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  h2 {
    font-size: var(--font-size-heading-xs);
    opacity: 0.75;
  }

  ${media.tablet} {
    align-items: center;
    h2 {
      text-align: center;
      max-width: 44.5rem;
      width: 100%;
    }
  }
`;
