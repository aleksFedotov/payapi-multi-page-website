import React, { useRef } from 'react';

import {
  ContactLabel,
  ContactInput,
  Form,
  ContactTextarea,
} from './ContactForm.Styles';

const ContactForm = () => {
  return (
    <Form>
      <ContactLabel>
        <ContactInput placeholder="Name" />
      </ContactLabel>
      <ContactLabel>
        <ContactInput placeholder="Email Address" />
      </ContactLabel>
      <ContactLabel>
        <ContactInput placeholder="Company Name" />
      </ContactLabel>
      <ContactLabel>
        <ContactInput placeholder="Title" />
      </ContactLabel>
      <ContactTextarea placeholder="Message" />
    </Form>
  );
};

export default ContactForm;
