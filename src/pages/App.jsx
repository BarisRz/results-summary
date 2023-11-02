import Result from "../components/Result";

function App() {
  return (
    <>
      <div className="container flex">
        <div className="info w-1/2 flex flex-col gap-6 p-10 px-14 items-center text-center">
          <p className="text-2xl">Your Result</p>
          <div className="score rounded-full h-52 w-52 bg-white justify-self-center flex flex-col justify-center items-center">
            <p className="text-7xl font-extrabold text-white">76</p>
            <p>of 100</p>
          </div>
          <p className="text-white font-bold text-4xl">Great</p>
          <p className="ranking">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <Result />
      </div>
    </>
  );
}

export default App;
