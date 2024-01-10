import { useState } from "react";
import { Line } from "react-chartjs-2";
import Error from "../utils/Error";
import { useQuery, gql } from "@apollo/client";
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

const GET_STOCK_DATA = gql`
  query GetStockData($ticker: String!, $days: Int) {
    getStockData(ticker: $ticker, days: $days) {
      date
      open
      high
      low
      close
      volume
    }
  }
`;

interface FinancialGraphProps {
  ticker: string;
}

const FinancialGraph: React.FC<FinancialGraphProps> = ({ ticker }) => {
  const [graphType, setGraphType] = useState("daily");
  const { loading, error, data } = useQuery(GET_STOCK_DATA, {
    variables: { ticker, days: 30 },
  });

  const getChartData = () => {
    if (loading || error || !data) {
      return {};
    }

    const stockData = data.getStockData;

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
  };

  const chartData = getChartData();

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
    <div className="mb-2">
      <h1 className="font-bold text-2xl text-center mb-5">
        Stock Prices for {ticker}
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <Error message="Unable to load graph data." />
      ) : (
        <Line data={chartData} options={options} />
      )}
    </div>
  );
};

export default FinancialGraph;
