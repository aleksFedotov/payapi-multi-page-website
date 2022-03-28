import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

interface PricingProps {
  marked: boolean;
}

export const PricingHeading = styled.h1`
  max-width: 110rem;
  width: 100%;
  margin-top: 8.2rem;
  margin-bottom: 7.2rem;
  font-size: var(--font-size-heading-xl);
  color: var(--color-san-luan-blue);
  ${media.tablet} {
    text-align: center;
  }
`;

export const PricingWrapper = styled.div`
  max-width: 110rem;
  width: 100%;
  display: flex;
  gap: 3rem;
`;

export const Price = styled.div`
  max-width: 35rem;
  width: 100%;
`;

export const PriceHeader = styled.div`
  h2 {
    font-size: var(--font-size-heading-m);
    color: var(--color-charm-pink);
    margin-bottom: 2.4rem;
  }
  p {
    color: var(--color-light-san-juan-blue);
    margin-bottom: 2rem;
  }

  h3 {
    font-size: var(--font-size-heading-xl);
    color: var(--color-san-luan-blue);
    margin-bottom: 3.2rem;
  }

  ${media.tablet} {
    p {
      text-align: center;
    }
  }
`;

export const PricingList = styled.ul`
  list-style: none;
  padding: 3rem 0;
  border-top: 1px solid rgba(54, 83, 107, 0.25);
  border-bottom: 1px solid rgba(54, 83, 107, 0.25);
  margin-bottom: 2.4rem;
`;

export const ListItem = styled.li<PricingProps>`
  display: flex;
  gap: 2.2rem;

  div {
    height: 0.8rem;
    width: 1.2rem;
  }

  p {
    color: ${({ marked }) =>
      marked
        ? 'var(--color-light-san-juan-blue)'
        : 'var(--color-san-luan-blue)'};
  }
`;
