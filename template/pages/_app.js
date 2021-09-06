import Head from 'next/head';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'
        />
        <meta
          name='description'
          content='BonnetHood. These show up in search engine results.'
        />{' '}
        <meta name='keywords' content='Keywords' />
        <meta property='og:title' content='BonnetHood' key='title' />
        <meta name='theme-color' content='#f0f6f0' />
        <link rel='manifest' href='/manifest.json' />
        <title>My Page Title</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
