"use client";
import { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import useWindowResize from "@/app/Hooks/useWindowResize";

interface ChartData {
  areaData: { time: string; value: number }[];
  candlestickData: {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
}

const LiveChart = () => {
  const isMobile = useWindowResize();
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState("1D");


  


  const handleTimeframeChange = async (timeframe: string) => {
    setSelectedTimeframe(timeframe);

    // Simulated data fetching based on the selected timeframe
    const newData = fetchDataBasedOnTimeframe(timeframe);

    // Update the chart data
    if (chartRef.current) {
      chartRef.current.remove();
    }
    const chartOptions = {
      layout: {
        textColor: "white",
        background: { type: "solid", color: "rgba(4, 30, 39, 1)" },
        grid: {
          vertLines: {
            color: "green", // Set the vertical grid lines color to your desired color
          },
          horzLines: {
            color: "green", // Set the horizontal grid lines color to your desired color
          },
        },
      },
      drawings: {
        trendlines: { visible: true, lock: false },
        // Add more drawing tools as needed
      },
    } as any;

    const newChart = createChart(chartContainerRef.current!, chartOptions); // Use non-null assertion here

    // Add Area Series
    const areaSeries = newChart.addAreaSeries({
      lineColor: "#2962FF",
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });
    areaSeries.setData(newData.areaData);

    // Add Candlestick Series
    const candlestickSeries = newChart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });
    candlestickSeries.setData(newData?.candlestickData || []);

    newChart.timeScale().fitContent();

    // Save the new chart reference
    chartRef.current = newChart;
  };

  // Simulated data fetching based on the selected timeframe
  const fetchDataBasedOnTimeframe = (timeframe: any) => {
    // ... (Same as your existing fetchDataBasedOnTimeframe function)
    const areaData = [
      { time: "2018-12-22", value: 32.51 },
      { time: "2018-12-23", value: 31.11 },
      // Add more data points as needed
    ];

    const candlestickData = [
      {
        time: "2018-12-22",
        open: 75.16,
        high: 82.84,
        low: 36.16,
        close: 45.72,
      },
      {
        time: "2018-12-23",
        open: 45.12,
        high: 53.9,
        low: 45.12,
        close: 48.09,
      },
      {
        time: "2018-12-24",
        open: 60.71,
        high: 60.71,
        low: 53.39,
        close: 59.29,
      },
      {
        time: "2018-12-25",
        open: 68.26,
        high: 68.26,
        low: 59.04,
        close: 60.5,
      },
      {
        time: "2018-12-26",
        open: 67.71,
        high: 105.85,
        low: 66.67,
        close: 91.04,
      },
      {
        time: "2018-12-27",
        open: 91.04,
        high: 121.4,
        low: 82.7,
        close: 111.4,
      },
      {
        time: "2018-12-28",
        open: 111.51,
        high: 142.83,
        low: 103.34,
        close: 131.25,
      },
      {
        time: "2018-12-29",
        open: 131.33,
        high: 151.17,
        low: 77.68,
        close: 96.43,
      },
      {
        time: "2018-12-30",
        open: 106.33,
        high: 110.2,
        low: 90.39,
        close: 98.1,
      },
      {
        time: "2018-12-31",
        open: 109.87,
        high: 114.69,
        low: 85.66,
        close: 111.26,
      },
      // Add more candlestick data points as needed
    ];
    return { areaData, candlestickData };
  };

  useEffect(() => {
    const createTradingViewChart = () => {
      if (!chartContainerRef.current) {
        return;
      } // Initial chart creation
      handleTimeframeChange(selectedTimeframe);
    };

    // Load Lightweight Charts library dynamically
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = createTradingViewChart;

    return () => {
      document.body.removeChild(script);
    };
  }, [selectedTimeframe]);

  return (
    <div
      className=""
      ref={chartContainerRef}
      style={{
        height: isMobile ? "60vh" : "40vh",
        width: isMobile ? "100vw" : "50vw",
      }}
    ></div>
  );
};

export default LiveChart;
