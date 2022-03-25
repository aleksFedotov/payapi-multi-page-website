import styled from 'styled-components';

export const SectionFeatures = styled.section`
  max-width: 110rem;
  width: 100%;
  display: flex;
  padding: 2.4rem;
  gap: 3rem;
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
