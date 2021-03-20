import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import Input from '../../components/Input/Input';
import Steps from '../../components/Steps/Steps';

export const Chemex: NextPage = () => {
  const [cups, setCups] = useState(2);
  const [grounds, setGrounds] = useState(25);
  const [water, setWater] = useState(300);
  const temperature = 92;

  const props = useSpring({
    firstPour: grounds * 2,
    finalPour: water - grounds * 2,
    grounds: grounds,
    temperature: temperature,
    water: water,
    from: {
      firstPour: 0,
      finalPour: 0,
      grounds: 0,
      temperature: 0,
      water: 0,
    },
  });

  const onChange = useCallback(e => {
    let value = e.target.value;
    if (e.target.value < 0) {
      value = 0;
    }

    setCups(value);
    setGrounds(value * 12.5);
    setWater(value * 150);
  }, []);

  const onCupsChange = useCallback(value => {
    if (value <= 0) {
      return;
    }

    setCups(value);
    setGrounds(value * 12.5);
    setWater(value * 150);
  }, []);

  return (
    <div className="container flex items-center lg:h-screen mx-auto py-4 lg:py-0 px-8 lg:-mt-20">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
          <div className="mb-3">
            <h1 className="text-2xl font-bold md:text-8xl lg:text-6xl title-font">
              Chemex
            </h1>
          </div>
          <p className="text-gray-600 mb-4">
            The Chemex Coffeemaker is a manual pour-over style glass
            coffeemaker, invented by Peter Schlumbohm in 1941, manufactured by
            the Chemex Corporation in Chicopee, Massachusetts. In 1958,
            designers at the Illinois Institute of Technology said that the
            Chemex Coffeemaker is "one of the best-designed products of modern
            times" and it is included in the collection of the Museum of Modern
            Art in New York City
          </p>
          <Input
            cups={cups}
            grounds={props.grounds.interpolate((x: any) => x.toFixed(0))}
            onChange={onChange}
            onCupsChange={onCupsChange}
            temperature={props.temperature.interpolate((x: any) =>
              x.toFixed(0)
            )}
            value={cups}
            water={props.water.interpolate((x: any) => x.toFixed(0))}
          />
        </div>
        <div className="w-full lg:w-1/2 flex order-1 mb-3 lg:mb-0 lg:order-2 lg:ml-4">
          <Steps
            children={
              <React.Fragment>
                <li className="mb-5">
                  Place the filter in the Chemex
                  <span className="text-xs flex mt-1">
                    The filters are pre-folded into four sheets: separate them
                    into two with one sheet on one side and three sheets on the
                    other. Place the thicker side (the three sheets) against the
                    spout
                  </span>
                </li>
                <li className="mb-5">
                  Rinse with hot water
                  <span className="text-xs flex mt-1">
                    This preheats the Chemex and eliminates the paper-like taste
                    of the natural filter
                  </span>
                </li>
                <li className="mb-5">
                  Leave the filter in place and discard the water
                </li>
                <li className="mb-5">
                  Add the ground coffee to the rinsed filter
                </li>
                <li className="mb-5">
                  Pour the water in two stages
                  <div className="flex text-xl font-bold font-display">
                    <animated.span>
                      {props.firstPour.interpolate((x: any) => x.toFixed(0))}
                    </animated.span>
                    <span className="ml-1">g</span>
                  </div>
                </li>
                <li className="mb-5">
                  Wait 45 seconds for the coffee to develop its full flavour
                  <span className="text-xs flex mt-1">
                    Drip the coffee from the centre of the cone to the outside
                    of the cone, turning in a circle to saturate the coffee with
                    water
                  </span>
                </li>
                <li className="mb-5">
                  Bring your overall water weight
                  <span className="text-xs flex mt-1"></span>
                  <div className="flex text-xl font-bold font-display">
                    <animated.span>
                      {props.finalPour.interpolate((x: any) => x.toFixed(0))}
                    </animated.span>
                    <span className="ml-1">g</span>
                  </div>
                </li>
                <li className="mb-5">Wait 3 minutes 30 seconds</li>
                <li className="mb-5">Remove the filter and enjoy!</li>
              </React.Fragment>
            }
            grounds={grounds}
            water={water}
          />
        </div>
      </div>
    </div>
  );
};

export default Chemex;
