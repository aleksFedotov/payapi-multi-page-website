import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: var(--color-mirage-blue);
  background-image: url('/assets/shared/desktop/bg-pattern-circle.svg');
  background-repeat: no-repeat;
  background-position: -23.5rem -35.9rem;
  display: flex;
  justify-content: center;
  padding: 10rem 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  max-width: 110rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ContentTextWrapper = styled.div`
  max-width: 44.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h2 {
    color: var(--color-water-white);
  }

  p {
    color: var(--color-water-white);
    opacity: 0.7;
  }
`;

export const ComapaniesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  row-gap: 4rem;
  column-gap: 6rem;
  align-items: center;

  svg {
    justify-self: center;

    path {
      fill: var(--color-water-white);
    }
  }
`;
