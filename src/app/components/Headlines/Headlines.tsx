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
    <div className="sm:w-[100%]   flex sm:flex-col sm:items-center sm:h-[100%]">
      <div className="sm:h-[11%] sm:text-[0.6rem] flex sm:justify-center sm:items-center sm:p-1 ">
        <p className="sm:w-[98%] sm:font-poppinsRegular sm:text-textdull">
          Disclaimer: This platform includes third-party opinions. We do not
          endorse their accuracy. Digital asset prices can be volatile. Do your
          own research.
          <span className="sm:text-inputBg sm:ml-1 hover:cursor-pointer">See full terms here.</span>
        </p>
      </div>

      {headlineData.map((item) => (
        <div
          key={item.id} 
          className=" border-[0.1rem] sm:mb-2 sm:border-switchColor hover:bg-switchColor hover:cursor-pointer sm:w-[98%] sm:p-1 sm:rounded flex sm:flex-col sm:items-center "
        >
          <h3 className="sm:text-[0.8rem] sm:p-[0.5rem] sm:text-inputBg ">
            {item.heading}
          </h3>
          <p className="sm:text-[0.6rem] sm:p-[0.5rem] sm:text-textdull ">
            {expandedDescriptions[item.id]
              ? item.description
              : item.description.slice(0, 120)}
            {item.description.length > 120 && (
              <span
                className="sm:text-inputBg cursor-pointer"
                onClick={() => toggleShowMore(item.id)}>
                {expandedDescriptions[item.id] ? " Show less" : " Show more"}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
