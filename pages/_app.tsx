import '../styles/globals.css';
// import Script from 'next/script';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script src={`${process.env.basePath}/serviceworkerRegistration.js`} /> */}
      <Component {...pageProps} />
    </>
  );
}
