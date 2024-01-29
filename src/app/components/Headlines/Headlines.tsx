import { useState } from "react";

const headlineData = [
  {
    id: 1,
    heading:
      "Charles Schwab Shows Neutral Stance on Bitcoin Spot ETFs, May Soon Launch its Proprietary Product",
    description:
      "Bloomberg ETF analyst Eric Balchunas has indicated that Charles Schwab, a multi-trillion dollar asset management company, may soon change its neutral stance on Bitcoin spot Exchange Traded Funds (ETFs). Although clients are currently able to purchase shares of all approved Bitcoin spot ETFs through Charles Schwab, the company itself has not yet explored launching a proprietary product in this space.",
  },
  {
    id: 2,
    heading:
      "Charles Schwab Shows Neutral Stance on Bitcoin Spot ETFs, May Soon Launch its Proprietary Product",
    description:
      "Bloomberg ETF analyst Eric Balchunas has indicated that Charles Schwab, a multi-trillion dollar asset management company, may soon change its neutral stance on Bitcoin spot Exchange Traded Funds (ETFs). Although clients are currently able to purchase shares of all approved Bitcoin spot ETFs through Charles Schwab, the company itself has not yet explored launching a proprietary product in this space.",
  },
];

export default function HeadLines() {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleShowMore = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="sm:w-[100%] sm:mt-1 mt-1  flex flex-col sm:flex-col items-center sm:items-center h-[100%] sm:h-[100%]">
      <div className="sm:h-[11%] text-[0.6rem] sm:text-[0.6rem] flex justify-center sm:justify-center items-center sm:items-center p-1 sm:p-1 ">
        <p className="sm:w-[98%] sm:font-poppinsRegular font-poppinsRegular text-textdull sm:text-textdull">
          Disclaimer: This platform includes third-party opinions. We do not
          endorse their accuracy. Digital asset prices can be volatile. Do your
          own research.
          <span className="sm:text-inputBg text-inputBg m-1 sm:ml-1 hover:cursor-pointer">See full terms here.</span>
        </p>
      </div>

      {headlineData.map((item) => (
        <div
          key={item.id}
          className=" border-[0.1rem] sm:mb-2 mb-2 sm:border-switchColor border-switchColor hover:bg-switchColor hover:cursor-pointer sm:w-[98%] w-[98%] sm:p-1 p-1 sm:rounded rounded flex flex-col sm:flex-col items-center sm:items-center "
        >
          <h3 className="sm:text-[0.8rem] text-[0.8rem] p-[0.5rem] sm:p-[0.5rem] sm:text-inputBg text-inputBg">
            {item.heading}
          </h3>
          <p className="sm:text-[0.6rem] text-[0.6rem] sm:p-[0.5rem] p-[0.5rem] sm:text-textdull text-textdull ">
            {expandedDescriptions[item.id]
              ? item.description
              : item.description.slice(0, 120)}
            {item.description.length > 120 && (
              <span
                className="sm:text-inputBg text-inputBg cursor-pointer"
                onClick={() => toggleShowMore(item.id)}
              >
                {expandedDescriptions[item.id] ? " Show less" : " Show more"}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
