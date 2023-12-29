// TickerItem.tsx
import { TickerData } from "./TickerData";
import { Line } from "react-chartjs-2";

interface TickerItemProps {
  ticker: TickerData;
  removeTicker: (symbol: string) => void;
}

const TickerItem: React.FC<TickerItemProps> = ({ ticker, removeTicker }) => {
  const chartData = {
    labels: ["Open Yesterday", "Close Yesterday", "Current Price"],
    datasets: [
      {
        label: ticker.symbol,
        data: [
          ticker.prices.openYesterday,
          ticker.prices.closeYesterday,
          ticker.prices.currentPrice,
        ],
        fill: false,
        borderColor: ticker.gain > ticker.loss ? "green" : "red",
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
        <p>
          Gain: {ticker.gain} | Loss: {ticker.loss}
        </p>
        <button
          onClick={() => removeTicker(ticker.symbol)}
          className="text-red-500 text-sm"
        >
          Remove
        </button>
      </div>
      <div style={{ width: "100px", height: "50px" }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default TickerItem;
