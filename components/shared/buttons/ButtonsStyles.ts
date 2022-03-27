import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Public Sans', sans-serif;
  color: var(--color-water-white);
  height: 4.8rem;
  font-size: var(--font-size-body);
  border-radius: 2.4rem;
  cursor: pointer;
  letter-spacing: -0.12px;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.98);
  }

  &.primary {
    border: none;
    background-color: var(--color-dark-pink);
    color: var(--color-water-white);

    &:hover {
      background-color: var(--color-charm-pink);
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  &.secondary-ligth {
    border: 1px solid var(--color-water-white);
    background-color: var(--color-mirage-blue);
    color: var(--color-water-white);
    max-width: 12.9rem;
    width: 100%;

    &:hover {
      background-color: var(--color-water-white);
      color: var(--color-mirage-blue);
    }

    &:disabled {
      border: 1px solid rgba(251, 252, 254, 0.5);
      color: rgba(251, 252, 254, 0.5);
      pointer-events: none;
    }
  }

  &.secondary-dark {
    border: 1px solid var(--color-san-luan-blue);
    background-color: var(--color-water-white);
    color: var(--color-san-luan-blue);
    max-width: 12.9rem;
    width: 100%;

    &:hover {
      background-color: var(--color-san-luan-blue);
      color: var(--color-water-white);
    }

    &:disabled {
      border: 1px solid rgba(54, 83, 107, 0.5);
      color: rgba(54, 83, 107, 0.5);
      pointer-events: none;
    }
  }

  &.menu {
    position: relative;
    border: none;
    height: 3rem;
    width: 3rem;
    border-radius: 0;
    background-color: transparent;
    z-index: 5;
  }
`;
