import {
  BarElement,
  CategoryScale,
  ChartOptions,
  LinearScale,
  Tooltip,
  Chart as ChartJS,
  Chart,
  Point,
  BubbleDataPoint,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { chartData } from "../data";
import { useEffect, useRef, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        title: () => "",
        label: (context: { parsed: { y: number } }) =>
          `activity : ${context.parsed.y}`,
      },
      backgroundColor: "rgb(55, 65, 81)",
      titleFont: {
        size: 0,
      },
      bodyFont: {
        size: 14,
      },
      padding: 10,
      cornerRadius: 4,
    },
  },
};

const BarGraph = () => {
  const chartRef = useRef<Chart<
    "bar",
    (number | Point | [number, number] | BubbleDataPoint | null)[],
    unknown
  > | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (chartRef.current) {
        if (chartRef.current) {
          const chartInstance = chartRef.current as ChartJS<"bar">;
          chartInstance.resize();
        }
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Bar ref={chartRef} data={chartData} options={options} key={windowWidth} />
  );
};

export default BarGraph;
