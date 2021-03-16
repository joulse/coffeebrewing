export const Steps = ({ water }: any) => {
  const firstPressPour = 70;
  const finalPressPour = water - 70;

  return (
    <div className="container">
      <div className="bg-black rounded-2xl py-8 px-16 shadow-lg">
        <ol className="list-decimal font-medium text-white">
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
            <h1 className="flex mt-1 text-xl font-bold">{`${firstPressPour}g`}</h1>
          </li>
          <li className="mb-5">Let rest 30 sec</li>
          <li className="mb-5">
            Final pour
            <h1 className="flex mt-1 text-xl font-bold">{`${finalPressPour}g`}</h1>
          </li>
          <li className="mb-5">Let rest 3 min 30</li>
          <li className="mb-5">Enjoy!</li>
        </ol>
      </div>
    </div>
  );
};

export default Steps;
