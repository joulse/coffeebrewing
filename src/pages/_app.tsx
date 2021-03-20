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
          <div className="flex items-center justify-between flex-wrap">
            <div className="mr-6">
              <Link href="/">
                <a className="flex title-font font-bold text-black tracking-tight text-xl hover:text-gray-900">
                  Coffee Brewing
                </a>
              </Link>
            </div>
            <nav className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <Link href="/methods/chemex">
                  <a className="mr-4 text-black hover:text-gray-900">Chemex</a>
                </Link>
                <Link href="/methods/frenchpress">
                  <a className="mr-4 text-black hover:text-gray-900">
                    French Press
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
