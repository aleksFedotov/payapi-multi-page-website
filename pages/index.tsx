import type { NextPage } from 'next';
import Head from 'next/head';

import { MainContainer } from '../components/shared/main-container/MainContainerStyles';
import Header from '../components/shared/header/Header';
import HeroHome from '../components/home/hero-home/HeroHome';
import WorkSection from '../components/home/work-section/WorkSection';
import ImplementSection from '../components/home/implement-section/ImplementSection';
import SimpleSection from '../components/home/simple-section/SimpleSection';
import FeatureSection from '../components/home/features-section/FeatureSection';
import ReadyToStart from '../components/shared/ready-to-start/ReadyToStart';
import Footer from '../components/shared/footer/Footer';

const Home: NextPage<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  return (
    <>
      <Head>
        <title>PayAPI Website</title>
        <meta name="description" content="PayAPI Website with NextJS" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <MainContainer className="home">
        <Header toggleMenu={toggleMenu} />
        <HeroHome />
        <WorkSection />
        <ImplementSection />
        <SimpleSection />
        <FeatureSection />
        <ReadyToStart />
        <Footer />
      </MainContainer>
    </>
  );
};

export default Home;
