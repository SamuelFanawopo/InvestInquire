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
import UserHeader from "../utils/UserHeader";
import Footer from "../components/Footer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface TickerData {
  symbol: string;
  gain: number;
  loss: number;
  prices: {
    openYesterday: number;
    closeYesterday: number;
    currentPrice: number;
  };
}

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const [tickers, setTickers] = useState<TickerData[]>([
    {
      symbol: "AAPL",
      gain: 10,
      loss: 5,
      prices: { openYesterday: 148, closeYesterday: 150, currentPrice: 155 },
    },
    // Mock data - add more ticker data here
  ]);
  const [newTicker, setNewTicker] = useState("");

  const addTicker = () => {
    // Here you'd normally fetch data for the new ticker and update state
    // For demonstration, I'm adding a mock ticker data
    if (newTicker.trim() === "") {
      // Prevent adding if input is empty
      alert("Please enter a ticker symbol");
      return;
    }
    const newTickerData = {
      symbol: newTicker,
      gain: 5,
      loss: 3,
      prices: { openYesterday: 100, closeYesterday: 105, currentPrice: 110 },
    };
    setTickers([...tickers, newTickerData]);
    setNewTicker("");
  };

  const removeTicker = (symbol: string) => {
    setTickers(tickers.filter((ticker) => ticker.symbol !== symbol));
  };

  const getChartData = (data: TickerData) => {
    return {
      labels: ["Open Yesterday", "Close Yesterday", "Current Price"],
      datasets: [
        {
          label: "",
          data: [
            data.prices.openYesterday,
            data.prices.closeYesterday,
            data.prices.currentPrice,
          ],
          fill: false,
          borderColor: data.gain > data.loss ? "green" : "red",
          tension: 0.1,
          pointRadius: 0,
        },
      ],
    };
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
    <div>
      <UserHeader />
      <div className="p-4">
        <div className="mb-4 flex">
          <input
            type="text"
            value={newTicker}
            onChange={(e) => setNewTicker(e.target.value.toUpperCase())}
            placeholder="Add Ticker Symbol"
            className="border rounded-md p-2 mr-2"
          />
          <button
            onClick={addTicker}
            className="bg-blue-500 text-white rounded-md p-2"
          >
            Add to Watchlist
          </button>
        </div>
        <div className="flex flex-wrap justify-start">
          {tickers.map((ticker, index) => (
            <div key={index} className="flex mb-6 mr-6 items-center">
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
              <div
                className="flex-none"
                style={{ width: "100px", height: "50px" }}
              >
                <Line data={getChartData(ticker)} options={chartOptions} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileScreen;
