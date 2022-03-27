import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 110rem;
  width: 100%;
  align-items: center;
  margin-top: 7.4rem;
  margin-bottom: 7.4rem;
  height: fit-content;

  svg {
    width: 26.3rem;
    height: 50rem;
    margin-right: 9.6rem;
  }

  ${media.tablet} {
    flex-direction: column-reverse;
    gap: 4.8rem;
    margin-bottom: 10rem;
    margin-top: 4.8rem;

    svg {
      margin-right: 0;
      width: 15.9rem;
      height: 30rem;
    }
  }

  ${media.phone} {
    svg {
      width: 12.8rem;
      height: 24rem;
    }
  }
`;

export const HeroTextWrapper = styled.div`
  max-width: 54.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: var(--line-height-header-xl);
    color: var(--color-san-luan-blue);
    font-weight: 400;
    margin-bottom: 2rem;
  }

  ${media.tablet} {
    max-width: 57.3rem;
    margin-top: -2rem;
    padding: 0 3.6rem;
    align-items: center;

    h1 {
      font-size: var(--font-size-heading-l);
      line-height: var(--line-height-header-l);
      text-align: center;
    }
  }

  ${media.phone} {
    padding: 0;
    h1 {
      font-size: var(--font-size-heading-m);
      line-height: var(--line-height-header-m);
    }
  }
`;

export const HeroText = styled.p`
  margin-top: 1.6rem;
  font-family: 'Public Sans', sans-serif;
  color: var(--color-san-luan-blue);

  a {
    color: inherit;
    font-weight: 700;
  }

  ${media.tablet} {
    text-align: center;
  }
`;
