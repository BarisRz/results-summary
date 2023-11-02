import data from "../data/data.json";

function Result() {
  return (
    <div className="result w-1/2 max-md:w-full bg-white p-10 flex flex-col gap-8">
      <p className="text-2xl font-bold">Summary</p>
      <div className="detail flex flex-col gap-5">
        <div className="reaction w-72 h-14 bg-black flex items-center p-4 justify-between">
          <div className="flex gap-2">
            <img src={data[0].icon} alt="icon" />
            <p className="font-bold">{data[0].category}</p>
          </div>
          <div className="flex gap-2 text-black">
            <p className="font-extrabold">{data[0].score}</p>
            <p className="text-slate-400"> / 100</p>
          </div>
        </div>
        <div className="memory w-72 h-14 bg-black flex items-center p-4 justify-between">
          <div className="flex gap-2">
            <img src={data[1].icon} alt="icon" />
            <p className="font-bold">{data[1].category}</p>
          </div>
          <div className="flex gap-2 text-black">
            <p className="font-extrabold">{data[1].score}</p>
            <p className="text-slate-400"> / 100</p>
          </div>
        </div>
        <div className="verbal w-72 h-14 bg-black flex items-center p-4 justify-between">
          <div className="flex gap-2">
            <img src={data[2].icon} alt="icon" />
            <p className="font-bold">{data[2].category}</p>
          </div>
          <div className="flex gap-2 text-black">
            <p className="font-extrabold">{data[2].score}</p>
            <p className="text-slate-400"> / 100</p>
          </div>
        </div>
        <div className="visual w-72 h-14 bg-black flex items-center p-4 justify-between">
          <div className="flex gap-2">
            <img src={data[3].icon} alt="icon" />
            <p className="font-bold">{data[3].category}</p>
          </div>
          <div className="flex gap-2 text-black">
            <p className="font-extrabold">{data[3].score}</p>
            <p className="text-slate-400"> / 100</p>
          </div>
        </div>
      </div>
      <div className="continue w-72 h-14 flex justify-center items-center">
        Continue
      </div>
    </div>
  );
}

export default Result;
