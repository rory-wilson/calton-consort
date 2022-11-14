import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-5NV4T124E6`} />

      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5NV4T124E6', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
