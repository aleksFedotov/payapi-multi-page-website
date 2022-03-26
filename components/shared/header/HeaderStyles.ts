import styled from 'styled-components';

interface NavProps {
  color: string;
}

export const HeaderWrapper = styled.header`
  max-width: 110rem;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  margin-top: 4rem;
  padding: 0 2.4rem;

  button {
    margin-left: auto;
    width: 17.3rem;
  }
`;

export const Navigation = styled.nav`
  max-width: 23rem;
  width: 100%;
  margin-left: 6rem;
`;

export const NavigationList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const NavigationListItem = styled.li<NavProps>`
  font-size: var(--font-size-body);

  a {
    color: ${({ color }) =>
      color === 'dark'
        ? 'var(--color-san-luan-blue)'
        : 'var(--color-water-white)'};
    opacity: 0.7;
    text-decoration: none;
    font-size: inherit;

    &:hover {
      opacity: 1;
    }
  }
`;
