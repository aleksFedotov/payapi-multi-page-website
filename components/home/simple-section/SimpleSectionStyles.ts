import styled from 'styled-components';

export const SectionSimple = styled.div`
  display: flex;
  max-width: 110rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4rem;

  &::before {
    content: url('/assets/shared/desktop/bg-pattern-circle.svg');
    position: absolute;
    top: 52%;
    right: -39rem;
    z-index: -1;
  }
`;

export const ImageWrapper = styled.div`
  margin-right: -13rem;
  position: relative;

  @media (max-width: 1100px) {
    margin-right: 0rem;
  }
`;
