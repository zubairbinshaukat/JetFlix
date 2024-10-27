// pages/_app.js
import Head from 'next/head';
import InstallButton from '@/components/InstallBtn';
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* PWA manifest and theme color */}
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#716B6A" />
      </Head>

      {/* Render the current page */}
      <Component {...pageProps} />

      {/* Install Button Component */}
      <InstallButton />
    </>
  );
}

export default MyApp;
