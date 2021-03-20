import { NextPage } from 'next';
import Link from 'next/link';
import React, { useRef } from 'react';
import { config, useSpring } from 'react-spring';

export const Home: NextPage = () => {
  const methods = useRef() as any;

  const [y, setY] = useSpring(() => ({
    immediate: false,
    config: config.slow,
    y: 0,
    onFrame: (props: any) => {
      window.scroll(0, props.y);
    },
  }));

  return (
    <React.Fragment>
      <div
        className="container flex items-center lg:h-screen mx-auto px-8 mb-8"
        style={{
          backgroundImage: `url('/shape.svg')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="w-full lg:w-1/3 flex flex-col order-2 lg:order-1">
            <h1 className="mb-6 text-4xl font-bold md:text-8xl lg:text-6xl title-font">
              Brew the perfect cup of coffee
            </h1>
            <h2 className="leading-snug mb-6 text-lg tracking-tight">
              Coffee brewing helps you prepare your coffee in the best possible
              way and focus on what is most important, enjoying&nbsp;life and
              drinking coffee.
            </h2>
            <button
              className="bg-black px-5 py-3 text-white rounded-lg hover:bg-gray-900 text-center"
              onClick={() =>
                setY({ y: methods.current.getBoundingClientRect().top })
              }
            >
              Discover brewing methods
            </button>
          </div>
          <div className="w-full lg:w-2/3 flex order-1 lg:order-2">
            <img alt="Coffee Brewing" src="/coffee.svg" />
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center mx-auto px-8 mb-8">
        <h2 className="mb-6 text-4xl font-bold title-font" ref={methods}>
          Brewing methods
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <Link href="/methods/chemex">
            <a className="bg-black hover:bg-gray-900 h-96 rounded-2xl flex items-end">
              <span className="mb-4 ml-4 text-white font-medium">Chemex</span>
            </a>
          </Link>
          <Link href="/methods/frenchpress">
            <a className="bg-black hover:bg-gray-900 h-96 rounded-2xl flex items-end">
              <span className="mb-4 ml-4 text-white font-medium">
                French Press
              </span>
            </a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
