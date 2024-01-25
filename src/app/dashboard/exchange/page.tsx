import OrderHistory from "@/app/components/OrderHistory/OrderHistory";
import OrderSection from "@/app/components/OrderSection/OrderSection";
import ChartSection from "@/app/components/chartSection/ChartSection";
import CurrencySection from "@/app/components/currencySection/CurrencySection";
import OrderBook from "@/app/components/orderBook/OrderBook";
import React from "react";

export default function page() {
  return (
    <div className="w-[100%]   text-white sm:h-auto sm:max-h-auto  sm:overflow-x-hidden">
      <div className="sm:h-auto  flex sm:flex-row  sm:m-2">
        {/* currency section */}
        <div className="sm:h-[130vh]">
          <CurrencySection />
        </div>
        <div className="flex  sm:h-[130vh] sm:ml-4 sm:rounded-lg sm:flex-col">
          <div className="sm:h-[64%] flex   sm:rounded-lg sm:flex-row">
            <ChartSection />
            <OrderSection />
          </div>
          <div className="sm:h-[64%] flex   sm:mt-3 sm:rounded-lg sm:flex-row">
            <OrderBook />
            <OrderHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
