import { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import Input from '../../components/Input/Input';
import Steps from '../../components/Steps/Steps';

export const FrenchPress: NextPage = () => {
  const [cups, setCups] = useState(2);
  const [grounds, setGrounds] = useState(23);
  const [water, setWater] = useState(180);
  const temperature = 90;

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
            grounds={grounds}
            onChange={onChange}
            onCupsChange={onCupsChange}
            temperature={temperature}
            value={cups}
            water={water}
          />
        </div>
        <div className="w-full lg:w-1/2 flex order-1 mb-3 lg:mb-0 lg:order-2 lg:ml-4">
          <Steps grounds={grounds} water={water} />
        </div>
      </div>
    </div>
  );
};

export default FrenchPress;
