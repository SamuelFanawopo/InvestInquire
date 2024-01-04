// ProfileScreen.tsx
import React, { useState } from "react";
import TickerInput from "../utils/TickerInput";
import TickerList from "../utils/TickerList";
import UserHeader from "../utils/UserHeader";
import Logout from "../utils/Logout";
import Footer from "../components/Footer";
import { TickerData } from "../utils/TickerData";

const ProfileScreen: React.FC = () => {
  const [tickers, setTickers] = useState<TickerData[]>([
    // Example initial state
    {
      symbol: "AAPL",
      gain: 10,
      loss: 5,
      prices: { openYesterday: 148, closeYesterday: 150, currentPrice: 155 },
    },
    // Add more initial tickers if needed
  ]);
  const [newTicker, setNewTicker] = useState<string>("");

  const addTicker = () => {
    if (newTicker.trim() === "") {
      alert("Please enter a ticker symbol");
      return;
    }
    // For demonstration, using mock data for the new ticker
    // In a real application, fetch data from an API or data source
    const newTickerData = {
      symbol: newTicker,
      gain: Math.floor(Math.random() * 10), // Random gain for demonstration
      loss: Math.floor(Math.random() * 5), // Random loss for demonstration
      prices: {
        openYesterday: Math.floor(Math.random() * 100 + 100),
        closeYesterday: Math.floor(Math.random() * 100 + 100),
        currentPrice: Math.floor(Math.random() * 100 + 100),
      },
    };
    setTickers([...tickers, newTickerData]);
    setNewTicker("");
  };

  const removeTicker = (symbol: string) => {
    setTickers(tickers.filter((ticker) => ticker.symbol !== symbol));
  };

  return (
    <div>
      <UserHeader />
      <div className="p-4">
        <TickerInput
          newTicker={newTicker}
          setNewTicker={setNewTicker}
          addTicker={addTicker}
        />
        <TickerList tickers={tickers} removeTicker={removeTicker} />
      </div>
      <Logout />
      <Footer />
    </div>
  );
};

export default ProfileScreen;
