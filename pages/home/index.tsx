import type { NextPage } from 'next';
import Head from 'next/head';

import HeroHome from '../../components/home/hero-home/HeroHome';
import WorkSection from '../../components/home/work-section/WorkSection';
import ImplementSection from '../../components/home/implement-section/ImplementSection';
import SimpleSection from '../../components/home/simple-section/SimpleSection';
import FeatureSection from '../../components/home/features-section/FeatureSection';
import ReadyToStart from '../../components/shared/ready-to-start/ReadyToStart';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PayAPI Website</title>
        <meta name="description" content="PayAPI Website with NextJS" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>

      <HeroHome />
      <WorkSection />
      <ImplementSection />
      <SimpleSection />
      <FeatureSection />
      <ReadyToStart />
    </>
  );
};

export default Home;
