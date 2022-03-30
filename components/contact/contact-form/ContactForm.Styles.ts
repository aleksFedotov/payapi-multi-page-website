import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 44.5rem;
  width: 100%;
  font-size: var(--font-size-body);
  line-height: var(--line-height-header-s);
  letter-spacing: -0.12px;
  color: var(--color-san-luan-blue);
`;

export const ContactLabel = styled.div`
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
`;

export const ContactInput = styled.input`
  font-family: inherit;
  font-size: var(--font-size-body);

  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const ContactTextarea = styled.textarea`
  background: transparent;
  color: inherit;
  font-family: inherit;
  padding: 0 20px 17px;
  border: none;
  border-bottom: 1px solid rgba(54, 83, 107, 0.5);
  outline: none;
  resize: none;
  min-height: 9rem;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;
