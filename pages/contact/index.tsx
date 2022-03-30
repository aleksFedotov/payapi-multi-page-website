import type { NextPage } from 'next';
import Head from 'next/head';

import ReadyToStart from '../../components/shared/ready-to-start/ReadyToStart';
import {
  HeadingWrapper,
  ContactContentWrapper,
  JoinContent,
} from '../../components/contact/ContactStyles';
import { HeadingPrimary } from '../../components/shared/UI/Heading';
import Copmanies from '../../components/shared/copmanies/Copmanies';
import ContactForm from '../../components/contact/contact-form/ContactForm';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>PayAPI Website</title>
        <meta name="description" content="PayAPI Website with NextJS" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <HeadingWrapper>
        <HeadingPrimary>
          Submit a help request and we’ll get in touch shortly.
        </HeadingPrimary>
      </HeadingWrapper>
      <ContactContentWrapper>
        <ContactForm />
        <JoinContent>
          <h2>Join the thousands of innovators already building with us</h2>
          <Copmanies color="dark" />
        </JoinContent>
      </ContactContentWrapper>

      <ReadyToStart />
    </>
  );
};

export default Contact;
