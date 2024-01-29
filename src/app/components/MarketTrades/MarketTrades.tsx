"use client";

const tableData = [
  {
    id: 1,
    price: 41789.2,
    Amount: 0.00018,
    time: "01:23:30",
    type: "sell",
  },
  {
    id: 2,
    price: 41789.2,
    Amount: 0.00018,
    time: "01:23:30",
    type: "buy",
  },
  {
    id: 3,
    price: 41789.2,
    Amount: 0.00018,
    time: "01:23:30",
    type: "sell",
  },
];

export default function MarketTrades() {
  return (
    <div className="sm:w-[100%] flex flex-col h-[100%] sm:flex-col sm:h-[100%]">
      <div className=" sm:h-[15%] sm:text-[0.8rem] text-[0.8rem] bg-switchColor flex flex-row  sm:flex-row justify-evenly sm:justify-evenly items-center sm:items-center ">
        <div className="sm:w-[25%] w-[25%]  ">Price(USDT)</div>
        <div className="sm:w-[25%] w-[25%] text-end sm:text-end ">Amount(BTC)</div>
        <div className="sm:w-[25%] w-[25%] text-end sm:text-end ">Time</div>
      </div>

      {tableData.map((item) => (
        <div
          key={item.id}
          className="sm:h-[8%] sm:text-[0.8rem]  flex flex-row sm:flex-row justify-evenly sm:justify-evenly items-center sm:items-center "
        >
          <div
            className={`sm:w-[25%] w-[25%] sm:text-start bg-red-200 text-start ${
              item.type === "sell"
                ? "sm:text-red-500 text-red-500 "
                : "sm:text-green-400 text-green-400"
            }`}
          >
            {item.price}
          </div>
          <div className="sm:w-[25%] w-[25%] text-end sm:text-end ">
            {item.Amount}
          </div>
          <div className="sm:w-[25%] w-[25%] text-end sm:text-end ">
            {item.time}
          </div>
        </div>
      ))}
    </div>
  );
}
