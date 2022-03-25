import styled from 'styled-components';

export const DemoEmailWrapper = styled.div`
  position: relative;
  max-width: 44.5rem;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-water-white);
  box-shadow: 1rem 1rem 2.5rem -1rem rgba(54, 83, 107, 0.25);
  border-radius: 2.4rem;
  padding-left: 2.8rem;
  cursor: pointer;
  font-family: 'Public Sans', sans-serif;

  input {
    font-family: inherit;
    font-size: var(--font-size-body);
    color: var(--color-san-luan-blue);
    border: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-family: inherit;
      opacity: 0.5;
    }
  }
`;
