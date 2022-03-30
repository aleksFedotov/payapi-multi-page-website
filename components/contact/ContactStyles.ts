import styled from 'styled-components';

export const HeadingWrapper = styled.div`
  max-width: 110rem;
  width: 100%;
`;

export const ContactContentWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 110rem;
  width: 100%;
`;

export const JoinContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  h2 {
    font-size: var(--font-size-heading-xs);
    opacity: 0.75;
  }
`;
