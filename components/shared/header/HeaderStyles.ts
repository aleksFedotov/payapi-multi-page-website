import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

interface NavProps {
  color?: string;
  type?: string;
}

export const HeaderWrapper = styled.header<NavProps>`
  max-width: 110rem;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  margin-top: 4rem;

  button {
    margin-left: auto;
    width: 17.3rem;

    &.primary {
      display: block;
      ${media.phone} {
        display: none;
      }
    }

    &.menu {
      display: none;
      ${media.phone} {
        display: block;
      }
    }
  }
`;

export const Navigation = styled.nav<NavProps>`
  max-width: 23rem;
  width: 100%;
  margin-left: 6rem;
  ${media.phone} {
    display: ${({ type }) => type === 'header' && 'none'};
    margin-left: 0;
  }
`;

export const NavigationList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;

  ${media.phone} {
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
  }
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
