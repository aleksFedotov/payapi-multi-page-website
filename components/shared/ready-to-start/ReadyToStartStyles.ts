import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const ReadyToStartWrapper = styled.div`
  max-width: 110rem;
  width: 100%;
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8rem;

  h2 {
    color: var(--color-san-luan-blue);
  }

  ${media.tablet} {
    flex-direction: column;
    gap: 4rem;
  }

  ${media.phone} {
    margin-top: 8rem;

    h2 {
      font-size: var(--font-size-heading-m);
    }
  }
`;
