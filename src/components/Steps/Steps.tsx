export const Steps = ({ children }: any) => {
  return (
    <div className="container">
      <div className="bg-black rounded-2xl py-8 px-16 shadow-lg">
        <ol className="list-decimal font-medium text-white">{children}</ol>
      </div>
    </div>
  );
};

export default Steps;
