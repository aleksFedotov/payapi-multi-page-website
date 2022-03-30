import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

export const AboutContainer = styled.div`
  max-width: 92rem;
  width: 100%;
`;

export const AboutTextWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 5.7rem;

  h2 {
    color: var(--color-san-luan-blue);
    font-size: var(--line-height-header-xs);
    max-width: 25.5rem;
    width: 100%;
  }
  p {
    width: 100%;
  }

  ${media.tablet} {
    gap: 1rem;

    h2 {
      max-width: 22.3rem;
    }
  }

  ${media.phone} {
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;
    margin-bottom: 4.8rem;

    p,
    h2 {
      text-align: center;
    }

    h2 {
      font-size: var(--font-size-heading-xs);
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: calc(100% + 4.8rem);
  margin: 4.3rem 0 7.2rem;

  &::before {
    content: url('/assets/shared/desktop/bg-pattern-circle.svg');
    position: absolute;
    bottom: 50%;
    left: -52rem;
    z-index: 0;
    transform: translateY(50%);

    ${media.tablet} {
      content: none;
    }
  }

  img {
    width: 100%;
  }

  ${media.phone} {
    margin: 2.7rem 0 4.8rem;
  }
`;

export const CompanySummary = styled.div`
  max-width: 110rem;
  width: 100%;
  display: flex;
  gap: 3rem;

  ${media.phone} {
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgba(54, 83, 107, 0.25);
    border-bottom: 1px solid rgba(54, 83, 107, 0.25);
    padding: 1.6rem 0;
    margin-bottom: 4.8rem;
  }
`;

export const SummaryItem = styled.div`
  border-top: 1px solid rgba(54, 83, 107, 0.25);
  border-bottom: 1px solid rgba(54, 83, 107, 0.25);
  padding: 1.6rem 0;
  width: 100%;
  margin-bottom: 7.3rem;

  p {
    font-size: 1.6rem;
    opacity: 0.75;
    line-height: var(--line-height-body);
  }

  h3 {
    font-size: var(--font-size-heading-xl);
    color: var(--color-charm-pink);
    line-height: var(--line-height-header-xl);
    font-weight: 400;
  }

  ${media.phone} {
    border-top: none;
    border-bottom: none;
    margin-bottom: 0;
    padding: 0;
    p,
    h3 {
      text-align: center;
    }
  }
`;
