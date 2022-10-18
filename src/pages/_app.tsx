import type { AppProps } from 'next/app';

import '../styles/globals.css';

import ModalContextProvider from '../contexts/ModalContext';

import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ModalContextProvider>
      <Header />
      <Component {...pageProps} />
    </ModalContextProvider>
  );
}

export default MyApp;
