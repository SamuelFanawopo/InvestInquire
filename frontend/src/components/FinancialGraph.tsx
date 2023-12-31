import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Error from "../utils/Error";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface FinancialGraphProps {
  ticker: string;
}

interface StockData {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

const FinancialGraph: React.FC<FinancialGraphProps> = ({ ticker }) => {
  const [graphType, setGraphType] = useState("daily"); // 'daily', 'monthly', or 'ytd'
  const [hasError, setHasError] = useState<boolean>(false);
  const stockData: StockData[] = [
    {
      date: "2023-12-19",
      open: "161.8000",
      high: "162.2800",
      low: "161.3200",
      close: "161.5600",
      volume: "3717429",
    },
    {
      date: "2023-12-18",
      open: "162.2300",
      high: "163.3300",
      low: "161.5766",
      close: "162.7400",
      volume: "3677533",
    },
    {
      date: "2023-12-15",
      open: "162.3000",
      high: "164.0900",
      low: "162.0400",
      close: "162.2300",
      volume: "11016108",
    },
    {
      date: "2023-12-14",
      open: "162.9300",
      high: "163.4990",
      low: "160.1490",
      close: "162.9100",
      volume: "6129804",
    },
    {
      date: "2023-12-13",
      open: "164.3700",
      high: "164.9653",
      low: "162.7350",
      close: "163.6200",
      volume: "4989141",
    },
  ];

  const getChartData = () => {
    switch (graphType) {
      case "daily":
        return {
          labels: stockData.map((item) => item.date),
          datasets: [
            {
              label: "Open",
              data: stockData.map((item) => parseFloat(item.open)),
              borderColor: "rgba(255, 99, 132, 0.6)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "High",
              data: stockData.map((item) => parseFloat(item.high)),
              borderColor: "rgba(54, 162, 235, 0.6)",
              backgroundColor: "rgba(54, 162, 235, 0.5)",
            },
            {
              label: "Low",
              data: stockData.map((item) => parseFloat(item.low)),
              borderColor: "rgba(255, 206, 86, 0.6)",
              backgroundColor: "rgba(255, 206, 86, 0.5)",
            },
            {
              label: "Close",
              data: stockData.map((item) => parseFloat(item.close)),
              borderColor: "rgba(75, 192, 192, 0.6)",
              backgroundColor: "rgba(75, 192, 192, 0.5)",
            },
          ],
        };
      case "weekly":
        return {};
      case "monthly":
        return {};
      case "ytd":
        return {};

      // Add case for 'ytd' if needed
      default:
        return {};
    }
  };

  const chartData = getChartData();

  useEffect(() => {
    if (Object.keys(chartData).length === 0 && graphType !== "daily") {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [chartData, graphType]); // Dependency array to avoid unnecessary updates

  const options = {
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(200, 200, 200, 0.8)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-5">
        Stock Prices for {ticker}
      </h1>
      <div className="flex justify-between mx-8 mb-8 mt-8">
        <button
          onClick={() => setGraphType("daily")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Daily
        </button>
        <button
          onClick={() => setGraphType("weekly")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Weekly
        </button>{" "}
        <button
          onClick={() => setGraphType("monthly")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Monthly
        </button>{" "}
        <button
          onClick={() => setGraphType("ytd")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          YTD
        </button>
      </div>

      {hasError ? (
        <Error message="Unable to load graph data." /> // Display error component
      ) : (
        <Line data={chartData} options={options} />
      )}
    </div>
  );
};

export default FinancialGraph;
