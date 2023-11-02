import Result from "../components/Result";

function App() {
  return (
    <>
      <div className="container flex">
        <div className="info w-1/2 flex flex-col gap-6 max-md:gap-2 p-10 max-md:p-8 px-14 items-center text-center">
          <p className="text-2xl max-md:text-lg">Your Result</p>
          <div className="score rounded-full h-52 w-52 max-md:h-40 max-md:w-40 bg-white justify-self-center flex flex-col justify-center items-center">
            <p className="text-7xl max-md:text-5xl font-extrabold text-white">
              76
            </p>
            <p>of 100</p>
          </div>
          <p className="text-white font-bold text-4xl max-md:text-2xl">Great</p>
          <p className="ranking max-md:text-base">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <Result />
      </div>
    </>
  );
}

export default App;
