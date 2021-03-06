import type { NextPage } from 'next';
import Head from 'next/head';

import ReadyToStart from '../../components/shared/ready-to-start/ReadyToStart';
import { HeadingPrimary } from '../../components/shared/UI/Heading';
import PricingContent from '../../components/pricing/PricingContent';

const Pricing: NextPage = () => {
  return (
    <>
      <Head>
        <title>PayAPI Website</title>
        <meta name="description" content="PayAPI Website with NextJS" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <HeadingPrimary>Pricing</HeadingPrimary>
      <PricingContent />
      <ReadyToStart />
    </>
  );
};

export default Pricing;
