import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

interface PricingProps {
  marked: boolean;
}

export const PricingWrapper = styled.div`
  max-width: 110rem;
  width: 100%;
  display: flex;
  gap: 3rem;

  ${media.phone} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Price = styled.div`
  max-width: 35rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  button {
    align-self: center;
  }

  span {
    width: 100%;
    height: 1px;
    background-color: rgba(54, 83, 107, 0.25);
    margin-bottom: 2.4rem;
  }
`;

export const PriceHeader = styled.div`
  border-bottom: 1px solid rgba(54, 83, 107, 0.25);
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
    p,
    h2,
    h3 {
      text-align: center;
    }
    h2 {
      font-size: var(--font-size-heading-xs);
    }
    h3 {
      font-size: var(--font-size-heading-l);
    }
  }

  ${media.phone} {
    h3 {
      font-size: var(--line-height-header-l);
    }
  }
`;

export const PricingList = styled.ul`
  list-style: none;
  padding: 3rem 0;
  ${media.tablet} {
    align-self: center;
  }
`;

export const ListItem = styled.li<PricingProps>`
  display: flex;
  gap: 2.2rem;

  div {
    height: 0.8rem;
    width: 1.2rem;
  }

  p {
    font-size: 1.6rem;
    color: ${({ marked }) =>
      marked
        ? 'var(--color-light-san-juan-blue)'
        : 'var(--color-san-luan-blue)'};
  }
`;
