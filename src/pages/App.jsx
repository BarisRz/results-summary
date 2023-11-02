import Result from "../components/Result";

function App() {
  return (
    <>
      <div className="container shadow-2xl">
        <div className="info w-1/2 grid p-10 px-14 text-center">
          <p className="text-2xl">Your Result</p>
          <div className="score rounded-full h-48 w-48 bg-white justify-self-center flex flex-col justify-center items-center">
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
