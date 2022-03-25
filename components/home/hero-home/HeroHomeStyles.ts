import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 110rem;
  width: 100%;
  align-items: center;
  margin-top: 2rem;
  padding: 0 2.4rem;
`;

export const HeroTextWrapper = styled.div`
  max-width: 54.6rem;
  width: 100%;

  h1 {
    font-size: var(--line-height-header-xl);
    color: var(--color-san-luan-blue);
    letter-spacing: -0.55px;
    margin-bottom: 2rem;
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
`;
