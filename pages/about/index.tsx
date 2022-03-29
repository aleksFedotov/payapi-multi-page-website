import type { NextPage } from 'next';
import Head from 'next/head';

import { HeadingPrimary } from '../../components/shared/UI/Heading';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>PayAPI Website</title>
        <meta name="description" content="PayAPI Website with NextJS" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <HeadingPrimary>
        We empower innovators by delivering access to the financial system
      </HeadingPrimary>
    </>
  );
};

export default About;
