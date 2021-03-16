// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 10rem 1.5rem;
//   margin-left: auto;
//   margin-right: auto;
//   max-width: 1024px;
//   width: 100%;
// `;

// const Brewing = styled.div`
//   padding: 1.5rem;
//   width: 50%;
// `;

// const BrewingItem = styled(motion.div)`
//   margin-bottom: 1.5rem;
// `;

// const StyledLink = styled(Link)`
//   color: #503b2e;
//   font-size: 2rem;
//   font-weight: 700;
//   text-decoration: none;
//   text-transform: uppercase;
//   transition: all 300ms ease-in-out;

//   &:hover {
//     color: #c48f41;
//   }

//   @media (min-width: 768px) {
//     font-size: 3rem;
//   }
// `;

// const Shadow = styled.div`
//   display: none;
//   width: 50%;

//   @media (min-width: 768px) {
//     display: block;
//   }
// `;

// const ShadowContent = styled.div`
//   background: transparent url(${background}) no-repeat 0 0;
//   background-size: contain;
//   height: 383px;
//   position: relative;

//   > div {
//     left: 50%;
//     margin-left: -100px;
//     margin-top: -100px;
//     position: absolute;
//     top: 50%;
//   }
// `;

// const Animation = styled.div`
//   > div {
//     animation: spin 5s ease-in-out infinite;

//     @keyframes spin {
//       0%,
//       100% {
//         transform: translateY(0);
//       }

//       25% {
//         transform: translateY(20px);
//       }

//       50% {
//         transform: translateY(0);
//       }

//       75% {
//         transform: translateY(20px);
//       }
//     }
//   }
// `;

// const Box = styled(motion.div)`
//   opacity: 0;
//   position: absolute;

//   > svg {
//     transform: rotate(20deg);
//   }
// `;

import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Illustration from '../components/Illustration/Illustration';

export const Home: NextPage = () => {
  return (
    <React.Fragment>
      <div className="container flex items-center h-screen mx-auto px-8 -mt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="w-full lg:w-1/3 flex flex-col order-2 lg:order-1">
            <h1 className="mb-6 text-4xl font-bold md:text-8xl lg:text-6xl title-font">
              Brew the perfect cup of coffee
            </h1>
            <h2 className="leading-snug mb-6 text-lg tracking-tight">
              Coffee brewing helps you prepare your coffee in the best possible
              way and focus on what is most important, enjoying&nbsp;life.
            </h2>
            <a
              href="#methods"
              className="bg-black px-5 py-3 text-white rounded-lg hover:bg-gray-900 text-center"
            >
              Discover brewing methods
            </a>
          </div>
          <div className="w-full lg:w-2/3 flex order-1 lg:order-2">
            <Illustration children="I001" />
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center h-screen mx-auto px-8">
        <h2 className="mb-6 text-4xl font-bold title-font" id="methods">
          Brewing methods
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
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
  /* <Container>
          <Brewing>
            <BrewingItem
              animate={{ opacity: 1, y: 200 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{
                type: 'inertia',
                velocity: 80,
              }}
            >
              <StyledLink to="/frenchpress">FrenchPress</StyledLink>
            </BrewingItem>
          </Brewing>
          <Shadow>
            <ShadowContent>
              <Animation>
                <Box animate={{ opacity: 1 }}>
                  <FrenchPress />
                </Box>
              </Animation>
            </ShadowContent>
          </Shadow>
        </Container> */
};

export default Home;
