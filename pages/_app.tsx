import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/GlobalStyles';
import MobileMenu from '../components/shared/mobile-menu/MobileMenu';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpened, seIsMenuOpened] = useState<boolean>(false);

  const menuToggleHandler = () => {
    seIsMenuOpened((prevState) => !prevState);
  };
  return (
    <>
      <GlobalStyles />

      <Component {...pageProps} toggleMenu={menuToggleHandler} />
      {isMenuOpened && <MobileMenu toggleMenu={menuToggleHandler} />}
    </>
  );
}

export default MyApp;
