import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 144rem;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-color: #edf3f8;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.home {
    background-image: url('/assets/shared/desktop/bg-pattern-circle.svg'),
      url('/assets/shared/desktop/bg-pattern-circle.svg');
    background-repeat: no-repeat;
    background-position: 80rem -17.2rem, 105rem 165.3rem;
  }
`;
