import type { NextPage } from 'next';
import Head from 'next/head';

import ReadyToStart from '../../components/shared/ready-to-start/ReadyToStart';
import { PricingHeading } from '../../components/pricing/PricingContentStyles';
import PricingContent from '../../components/pricing/PricingContent';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PayAPI Website</title>
        <meta name="description" content="PayAPI Website with NextJS" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <PricingHeading>Pricing</PricingHeading>
      <PricingContent />
      <ReadyToStart />
    </>
  );
};

export default Home;
