import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Line } from "react-chartjs-2";
import { TickerData } from "./TickerData";

const GET_STOCK_DATA = gql`
  query GetStockData($ticker: String!) {
    getRecentStockData(ticker: $ticker) {
      open
      close
      high
      low
    }
  }
`;

interface TickerItemProps {
  ticker: TickerData;
  removeTicker: (symbol: string) => void;
}

const TickerItem: React.FC<TickerItemProps> = ({ ticker, removeTicker }) => {
  const { data, loading, error } = useQuery(GET_STOCK_DATA, {
    variables: { ticker: ticker.symbol },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading stock data</p>;

  const recentData = data.getRecentStockData;
  const hasSufficientData = recentData && recentData.length >= 3;

  // Calculate change for the most recent day
  const todayChange = hasSufficientData
    ? recentData[0].close - recentData[0].open
    : 0;

  const chartData = {
    labels: hasSufficientData
      ? [
          "Open 3d ago",
          "Close 3d ago",
          "Open 2d ago",
          "Close 2d ago",
          "Open 1d ago",
          "Close 1d ago",
        ]
      : [],
    datasets: [
      {
        label: ticker.symbol,
        data: hasSufficientData
          ? [
              recentData[2].open,
              recentData[2].close,
              recentData[1].open,
              recentData[1].close,
              recentData[0].open,
              recentData[0].close,
            ]
          : [],
        fill: false,
        borderColor: todayChange > 0 ? "green" : "red",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: { display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div key={ticker.symbol} className="flex mb-6 mr-6 items-center">
      <div className="flex flex-col mr-4">
        <h2 className="text-lg font-bold">{ticker.symbol}</h2>
        <p>Today's Change: {todayChange.toFixed(2)}%</p>
        <button
          onClick={() => removeTicker(ticker.symbol)}
          className="text-red-500 text-sm mt-2 pt-1"
        >
          Remove
        </button>
      </div>
      {hasSufficientData && (
        <div style={{ width: "125px", height: "100px" }}>
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
      {!hasSufficientData && <p>No sufficient data for chart</p>}
    </div>
  );
};

export default TickerItem;
