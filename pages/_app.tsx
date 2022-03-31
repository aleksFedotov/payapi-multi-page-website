import '../styles/globals.css';
import { useState } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { GlobalStyles } from '../styles/GlobalStyles';
import { MainContainer } from '../components/shared/main-container/MainContainerStyles';

import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';
import MobileMenu from '../components/shared/mobile-menu/MobileMenu';

import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpened, seIsMenuOpened] = useState<boolean>(false);
  const router = useRouter();

  const menuToggleHandler = () => {
    seIsMenuOpened((prevState) => !prevState);
  };
  return (
    <>
      <GlobalStyles />
      <MainContainer className={router.pathname.slice(1)}>
        <Header toggleMenu={menuToggleHandler} isOpened={isMenuOpened} />
        <Component {...pageProps} />
        <Footer />
        <AnimatePresence>
          {isMenuOpened && (
            <MobileMenu toggleMenu={menuToggleHandler} key={'mobile'} />
          )}
        </AnimatePresence>
      </MainContainer>
    </>
  );
}

export default MyApp;
