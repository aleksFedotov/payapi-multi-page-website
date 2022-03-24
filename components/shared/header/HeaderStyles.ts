import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  max-width: 110rem;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  margin-top: 4rem;

  button {
    margin-left: auto;
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

export const NavigationListItem = styled.li`
  font-size: var(--font-size-body);

  a {
    color: var(--color-san-luan-blue);
    text-decoration: none;
    font-size: inherit;
  }
`;
