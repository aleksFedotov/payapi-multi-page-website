import '../styles/globals.css';
import { useState } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { GlobalStyles } from '../styles/GlobalStyles';
import { MainContainer } from '../components/shared/main-container/MainContainerStyles';

import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';
import MobileMenu from '../components/shared/mobile-menu/MobileMenu';

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
        {isMenuOpened && <MobileMenu toggleMenu={menuToggleHandler} />}
      </MainContainer>
    </>
  );
}

export default MyApp;
