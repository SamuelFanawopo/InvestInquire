import React, { useState } from "react";
import { Line } from "react-chartjs-2";
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

const FinancialGraph: React.FC<FinancialGraphProps> = ({
  ticker,
  monthlyData,
}) => {
  const [graphType, setGraphType] = useState("daily"); // 'daily', 'monthly', or 'ytd'

  const getChartData = () => {
    switch (graphType) {
      case "daily":
        return {
          labels: ["2023-12-15", "2023-12-14", "2023-12-13"],
          datasets: [
            {
              label: `Daily Stock Price for ${ticker}`,
              data: [162.23, 162.91, 163.62],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        };
      case "monthly":
        return {
          labels: monthlyData.map((item) => item.date),
          datasets: [
            {
              label: `Monthly Stock Price for ${ticker}`,
              data: monthlyData.map((item) => item.value),
              fill: false,
              borderColor: "rgb(53, 162, 235)",
              tension: 0.1,
            },
          ],
        };
      // Add case for 'ytd' if needed
      default:
        return {};
    }
  };

  const chartData = getChartData();

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-5">
        Stock Prices for {ticker}
      </h1>
      <div>
        <button onClick={() => setGraphType("daily")}>Daily</button>
        <button onClick={() => setGraphType("monthly")}>Monthly</button>
        {/* Add button for 'ytd' if needed */}
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default FinancialGraph;
