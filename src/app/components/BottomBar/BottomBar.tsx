import React from "react";

interface BottomBarProps {
  onChangeLayout: (layout: string) => void;
}

const bottomBarData = [
  { id: 1, icon: "/dashboard/exchange/markets.svg", label: "MARKETS" },
  {
    id: 2,
    icon: "/dashboard/exchange/charts.svg",
    label: "CHARTS",
    color: "#5AD776",
  },
  { id: 3, icon: "/dashboard/exchange/orderBook.svg", label: "ORDERBOOK" },
  { id: 4, icon: "/dashboard/exchange/myOrder.svg", label: "MYORDER" },
];

export default function BottomBar({ onChangeLayout }: BottomBarProps) {
  const handleClick = (label: String) => {
    switch (label) {
      case "MARKETS":
        // Task for MARKETS
        onChangeLayout("MARKETS");
        break;
      case "CHARTS":
        // Task for CHARTS
        onChangeLayout("CHARTS");
        

        break;
      case "ORDERBOOK":
        // Task for ORDER BOOK
        onChangeLayout("ORDERBOOK");
        break;
      case "MYORDER":
        // Task for MY ORDER
        onChangeLayout("MYORDER");
        break;
      default:
        // Default case
       
    }
  };

  return (
    <div className="w-full flex flex-row justify-evenly items-center bg-switchColor h-[4.5rem] rounded-t-3xl">
      {bottomBarData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center"
          onClick={() => handleClick(item.label)}
        >
          <img
            style={{ fill: item.color || "#000" }}
            src={item.icon}
            alt={item.label}
          />
          <span className="text-[0.65rem] mt-2 font-poppinsRegular">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
