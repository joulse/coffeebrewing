import { NextPage } from 'next';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import Input from '../../components/Input/Input';
import Steps from '../../components/Steps/Steps';

export const FrenchPress: NextPage = () => {
  const [cups, setCups] = useState(2);
  const [grounds, setGrounds] = useState(23);
  const [water, setWater] = useState(180);
  const temperature = 90;

  const props = useSpring({
    firstPressPour: 70,
    finalPressPour: water - 70,
    grounds: grounds,
    temperature: temperature,
    water: water,
    from: {
      firstPressPour: 0,
      finalPressPour: 0,
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
    setGrounds(value * 7.5);
    setWater(value * 90);
  }, []);

  const onCupsChange = useCallback(value => {
    if (value <= 0) {
      return;
    }

    setCups(value);
    setGrounds(value * 7.5);
    setWater(value * 90);
  }, []);

  return (
    <div className="container flex items-center lg:h-screen mx-auto py-4 lg:py-0 px-8 lg:-mt-24">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
          <div className="mb-3">
            <Link href="/">
              <a className="flex items-center">
                <h1 className="text-2xl font-bold md:text-8xl lg:text-6xl title-font">
                  French Press
                </h1>
              </a>
            </Link>
          </div>
          <p className="text-gray-600 mb-4">
            A French press, also known as a cafetière, cafetière à piston,
            Cafeteria, press pot, coffee press, or coffee plunger, is a coffee
            brewing device invented by Ugo Paolini and patented by Italian
            designer Attilio Calimani and Giulio Moneta in 1929.
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
                <li className="mb-5">Place the press on the scale and tare</li>
                <li className="mb-5">
                  Heat the water in the kettle
                  <span className="text-xs flex mt-1">
                    Between 88 and 92°C depending on how your coffee is roasting
                  </span>
                </li>
                <li className="mb-5">Pour the coffee in the press</li>
                <li className="mb-5">
                  First pour
                  <div className="flex mt-1 text-xl font-bold font-display">
                    <animated.span>
                      {props.firstPressPour.interpolate((x: any) =>
                        x.toFixed(0)
                      )}
                    </animated.span>
                    <span className="ml-1">g</span>
                  </div>
                </li>
                <li className="mb-5">Let rest 30 sec</li>
                <li className="mb-5">
                  Final pour
                  <div className="flex mt-1 text-xl font-bold font-display">
                    <animated.span>
                      {props.finalPressPour.interpolate((x: any) =>
                        x.toFixed(0)
                      )}
                    </animated.span>
                    <span className="ml-1">g</span>
                  </div>
                </li>
                <li className="mb-5">Let rest 3 min 30</li>
                <li className="mb-5">Enjoy!</li>
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

export default FrenchPress;
