import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          media="print"
          onLoad={`this.media='all'` as any}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          />
        </noscript>
      </Head>
      <div>
        <header className="container mx-auto flex flex-wrap py-5 px-8 items-start">
          <Link href="/">
            <a className="flex title-font font-bold text-black hover:text-gray-900">
              <span className="text-xl">Coffee Brewing</span>
            </a>
          </Link>
        </header>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
