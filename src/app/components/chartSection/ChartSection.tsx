import LiveChart from "../LiveChart/LiveChart";

export default function ChartSection() {
  const timeframes = ["1M", "5M", "15M", "30M", "1H", "1D", "7D"];

  return (
    <section className="flex sm:flex-col sm:w-[52vw] sm:mr-3 sm:rounded-lg   sm:h-[100%]">
      <div className=" sm-w-[100%] flex sm:justify-between sm:flex-row bg-dashbgtrans sm:h-[18.57%] sm:border-b-2 border-borderline">
        <div className="  flex sm:w-[27%] sm:flex-row sm:justify-evenly sm:items-center ">
          <img src="/dashboard/exchange/tron.svg" />
          <span className="font-poppinsRegular">TetherUS</span>
          <span className="font-poppins">Usdt</span>
        </div>
        <div className="sm:w-[70%] sm:text-[0.55rem] flex sm:flex-row sm:justify-evenly">
          <div className="flex sm:flex-col sm:justify-center sm:items-start">
            <span>Last Price</span>
            <span className="font-poppinsSemibold sm:text-[0.6rem]">86.33</span>
          </div>
          <div className="flex sm:flex-col sm:justify-center sm:items-start">
            <span>Volume</span>
            <span className="font-poppinsSemibold sm:text-[0.6rem]">
              20,000
            </span>
          </div>
          <div className="flex sm:flex-col sm:justify-center sm:items-start">
            <span>Changes</span>
            <span className="font-poppinsSemibold sm:text-[0.6rem] text-priceRed">
              -9.65%
            </span>
          </div>
          <div className="flex sm:flex-col sm:justify-center sm:items-start">
            <span>High</span>
            <span className="font-poppinsSemibold sm:text-[0.6rem]">89.26</span>
          </div>
          <div className="flex sm:flex-col sm:justify-center sm:items-start">
            <span>Low</span>
            <span className="font-poppinsSemibold sm:text-[0.6rem]">84.59</span>
          </div>
        </div>
      </div>
      <div className="bg-dashbgtrans sm:h-[12%] flex sm:flex-row sm:justify-between  sm:items-center">
        <div className="sm:ml-4 font-poppinsRegular ">
          <div
            className="border rounded flex sm:flex-row sm:items-center sm:text-center sm:justify-center"
            style={{ borderColor: "rgba(130, 156, 165, 1)" }}
          >
            {timeframes.map((timeframe, index) => (
              <button
                key={timeframe}
                className={`sm:p-1   ${
                  index !== timeframes.length - 1 ? "border-r" : ""
                }`}
                // onClick={() => handleTimeframeChange(timeframe)}
                style={{
                  marginRight: "5px",
                  color: "rgba(130, 156, 165, 1)",
                  fontSize: "0.7rem",
                  borderColor: "rgba(130, 156, 165, 1)",
                }}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>
        <div className="sm:mr-12  flex sm:w-[25%] sm:items-center sm:justify-evenly">
          <span className="sm:text-[0.8rem]">Live Price</span>
          <span className="sm:text-[0.6rem]">₹ 2940000.00</span>
        </div>
      </div>

      <div className="bg-dashbgtrans sm:h-[69.4%] sm:rounded-b-lg sm:w-[100%] sm:p-2 ">
        <div className="rounded-lg sm:h-[100%] sm:w-[100%]  ">
          <LiveChart />
        </div>
      </div>
    </section>
  );
}
