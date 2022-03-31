import React, { useState } from 'react';
import useInput from '../../../hooks/useInput';

import {
  Form,
  ContactTextarea,
  ContactInputWrapper,
  ContactInput,
  UpdatesWrapper,
} from './ContactForm.Styles';

import { ErrorMessage } from '../../shared/erroe-message/ErrorMessageStyles';

import { Button } from '../../shared/UI/ButtonsStyles';

const isNotEmpty = (value: string) => value.trim() !== '';
const isValidEmail = (value: string) => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};

const ContactForm = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isValidEmail);

  const {
    value: companyValue,
    isValid: companyIsValid,
    hasError: companyHasError,
    valueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler,
    reset: resetCompany,
  } = useInput(isNotEmpty);
  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isNotEmpty);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    nameIsValid &&
    emailIsValid &&
    companyIsValid &&
    titleIsValid &&
    messageIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const data = {
      name: nameValue,
      email: emailValue,
      company: companyValue,
      title: titleValue,
      message: messageValue,
      updates: checked,
    };

    resetName();
    resetEmail();
    resetCompany();
    resetTitle();
    resetMessage();
    setChecked(false);
  };

  const updatesHandler = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <Form onSubmit={submitHandler}>
      <ContactInputWrapper hasError={nameHasError}>
        <ContactInput
          placeholder="Name"
          type="text"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <ErrorMessage left="2rem" bottom="-2.5rem">
            This field can’t be empty
          </ErrorMessage>
        )}
      </ContactInputWrapper>
      <ContactInputWrapper hasError={emailHasError}>
        <ContactInput
          placeholder="Email Address"
          type="text"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <ErrorMessage left="2rem" bottom="-2.5rem">
            Invalid email
          </ErrorMessage>
        )}
      </ContactInputWrapper>
      <ContactInputWrapper hasError={companyHasError}>
        <ContactInput
          placeholder="Company Name"
          type="text"
          value={companyValue}
          onChange={companyChangeHandler}
          onBlur={companyBlurHandler}
        />
        {companyHasError && (
          <ErrorMessage left="2rem" bottom="-2.5rem">
            This field can’t be empty
          </ErrorMessage>
        )}
      </ContactInputWrapper>
      <ContactInputWrapper hasError={titleHasError}>
        <ContactInput
          placeholder="Title"
          type="text"
          value={titleValue}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
        {titleHasError && (
          <ErrorMessage left="2rem" bottom="-2.5rem">
            This field can’t be empty
          </ErrorMessage>
        )}
      </ContactInputWrapper>

      <ContactInputWrapper hasError={messageHasError}>
        <ContactTextarea
          placeholder="Message"
          value={messageValue}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
        {messageHasError && (
          <ErrorMessage left="2rem" bottom="-2.5rem">
            This field can’t be empty
          </ErrorMessage>
        )}
      </ContactInputWrapper>

      <UpdatesWrapper isChecked={checked}>
        <span onClick={updatesHandler}></span>
        <p onClick={updatesHandler}>
          Stay up-to-date with company announcements and updates to our API
        </p>
      </UpdatesWrapper>

      <Button className="secondary-dark" type="submit" disabled={!formIsValid}>
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
