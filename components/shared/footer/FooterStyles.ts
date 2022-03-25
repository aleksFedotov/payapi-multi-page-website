import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  background-color: var(--color-mirage-blue);
  background-image: url('/assets/shared/desktop/bg-pattern-circle.svg');
  background-repeat: no-repeat;
  background-position: 100.5rem -13.6rem;
  padding: 0 2.4rem;

  svg {
    path {
      fill: var(--color-water-white);
    }
  }
`;

export const FooterContent = styled.div`
  max-width: 110rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Socials = styled.div`
  max-width: 12rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;

  a {
    cursor: pointer;
    &:hover {
      svg {
        path {
          fill: var(--color-charm-pink);
        }
      }
    }
  }
`;
