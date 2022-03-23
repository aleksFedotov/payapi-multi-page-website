import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <div id="main_container"></div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
