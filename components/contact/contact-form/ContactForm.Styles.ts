import styled, { css } from 'styled-components';

interface IInputProps {
  hasError: boolean;
}

interface IUpdatesProps {
  isChecked: boolean;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 44.5rem;
  width: 100%;
  font-size: var(--font-size-body);
  line-height: var(--line-height-header-s);
  letter-spacing: -0.12px;

  button {
    max-width: 15.2rem;
    width: 100%;
  }

  p {
    opacity: 1;
  }
`;

export const ContactInputWrapper = styled.div<IInputProps>`
  position: relative;
  cursor: pointer;
  display: block;
  border: none;
  background-color: transparent;
  padding: 0rem 2rem 1.6rem 2rem;
  opacity: 0.5;

  border-bottom: 1px solid rgba(54, 83, 107, 0.5);
  &:hover {
    opacity: 1;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-bottom: 1px solid rgb(255, 0, 0);

      input {
        &::placeholder {
          color: #ff0000;
        }
      }

      textarea {
        &::placeholder {
          color: #ff0000;
        }
      }
    `}
`;

export const ContactInput = styled.input`
  font-family: inherit;
  font-size: var(--font-size-body);
  border: none;
  background-color: transparent;
  color: var(--color-san-luan-blue);

  &:focus {
    outline: none;
  }
`;

export const ContactTextarea = styled.textarea`
  background: transparent;
  color: inherit;
  font-family: inherit;

  border: none;
  outline: none;
  resize: none;
  min-height: 9rem;
`;

export const UpdatesWrapper = styled.div<IUpdatesProps>`
  display: flex;
  align-items: center;
  gap: 2.6rem;
  width: 100%;

  span {
    cursor: pointer;
    height: 2.4rem;
    min-width: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ isChecked }) =>
      isChecked ? '#BA4270' : 'rgba(54,83,107, 0.25)'};

    ${({ isChecked }) =>
      isChecked &&
      css`
        background-image: url('/assets/pricing/iocn-check-box.svg');
        background-repeat: no-repeat;
        background-position: center;
      `}
  }

  p {
    cursor: pointer;
  }
`;
