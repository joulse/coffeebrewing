import { animated } from 'react-spring';

export const Input = ({
  cups,
  grounds,
  onChange,
  onCupsChange,
  temperature,
  value,
  water,
}: any) => {
  return (
    <div className="container">
      <div className="flex mb-3">
        <div className="mb-3">
          <input
            min="1"
            max="8"
            name="cups"
            onChange={e => onChange(e)}
            type="number"
            value={value}
            className="text-8xl font-extrabold outline-none focus:outline-none text-basecursor-default"
          />
        </div>
        <div className="flex flex-col ml-3">
          <button
            className="text-4xl font-bold bg-white shadow-lg rounded-lg text-black hover:bg-gray-50 h-12 w-12 mb-4"
            onClick={() => onCupsChange(cups + 1)}
          >
            +
          </button>
          <button
            className="text-4xl font-bold bg-white shadow-lg rounded-lg text-black hover:bg-gray-50 h-12 w-12"
            onClick={() => onCupsChange(cups - 1)}
          >
            -
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <div className="bg-white rounded-lg p-5 shadow-lg">
            <span className="flex justify-center text-xs">Temperature</span>
            <span className="flex font-bold justify-center">
              <animated.span>{temperature}</animated.span>
              <span>˚C</span>
            </span>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-lg">
            <span className="flex justify-center text-xs">Total Water</span>
            <span className="flex font-bold justify-center">
              <animated.span>{water}</animated.span>
              <span>g</span>
            </span>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-lg">
            <span className="flex justify-center text-xs">Coffee Grounds</span>
            <span className="flex font-bold justify-center">
              <animated.span>{grounds}</animated.span>
              <span>g</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
