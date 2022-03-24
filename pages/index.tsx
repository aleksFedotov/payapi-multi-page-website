import type { NextPage } from 'next';
import Head from 'next/head';

import { MainContainer } from '../components/shared/main-container/MainContainerStyles';
import Header from '../components/shared/header/Header';
import HeroHome from '../components/home/hero-home/HeroHome';
import WorkSection from '../components/home/work-section/WorkSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PayAPI Website</title>
        <meta name="description" content="PayAPI Website with NextJS" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <MainContainer className="home">
        <Header />
        <HeroHome />
        <WorkSection />
      </MainContainer>
    </>
  );
};

export default Home;
