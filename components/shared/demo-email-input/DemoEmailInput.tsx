import React, { useRef, useState } from 'react';

import { Button } from '../UI/ButtonsStyles';
import { DemoEmailWrapper, InputWrapper } from './DemoEmailInputStyles';
import { ErrorMessage } from '../erroe-message/ErrorMessageStyles';

const DemoEmailInput: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const validEmail = (email: string) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const emailSudmitHanlder = () => {
    const query = inputRef.current!.value;
    if (validEmail(query)) {
      inputRef.current!.value = '';
      return;
    } else {
      setIsError(true);
    }
  };
  return (
    <DemoEmailWrapper
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <InputWrapper>
        <input
          type="text"
          placeholder="Enter email address"
          ref={inputRef}
          onChange={() => {
            setIsError(false);
          }}
        />
        {isError && (
          <ErrorMessage bottom="5.5rem" left="2.8rem">
            Invalid email
          </ErrorMessage>
        )}
      </InputWrapper>

      <Button className="primary" onClick={emailSudmitHanlder}>
        Schedule a Demo
      </Button>
    </DemoEmailWrapper>
  );
};

export default DemoEmailInput;
