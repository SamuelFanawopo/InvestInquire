import React from "react";
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

const FinancialGraph: React.FC<FinancialGraphProps> = ({ ticker }) => {
  const chartData = {
    // Ensure labels are correctly formatted
    labels: ["2023-12-15", "2023-12-14", "2023-12-13"],
    datasets: [
      {
        label: `Stock Price for ${ticker}`,
        data: [162.23, 162.91, 163.62],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

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
        Daily Prices (open, high, low, close) and Volumes for {ticker}
      </h1>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default FinancialGraph;
