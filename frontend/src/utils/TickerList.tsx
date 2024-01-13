import React, { useState, useEffect, useCallback } from "react";
import TickerItem from "./TickerItem";
import { TickerData, StockData } from "./TickerData";
import { fetchUserWatchlist } from "./fetchUserWatchlist";
import { fetchStockData } from "./fetchStockData";
import { getFirestore, doc, updateDoc, arrayRemove } from "firebase/firestore";
import useAuth from "../utils/useAuth";

const TickerList: React.FC = () => {
  const [tickers, setTickers] = useState<TickerData[]>([]);
  const authUser = useAuth();
  const db = getFirestore();

  const loadTickers = useCallback(async () => {
    if (authUser && authUser.uid) {
      const watchlistSymbols = await fetchUserWatchlist(authUser.uid);
      const tickersWithStockData = await Promise.all(
        watchlistSymbols.map(async (symbol) => {
          const stockData = await fetchStockData(symbol);
          const gain = calculateGain(stockData);
          const loss = calculateLoss(stockData);
          return {
            symbol,
            prices: {
              openYesterday: stockData[1]?.open ?? 0,
              closeYesterday: stockData[1]?.close ?? 0,
              currentPrice: stockData[0]?.close ?? 0,
            },
            gain,
            loss,
          };
        }),
      );
      setTickers(tickersWithStockData);
    }
  }, [authUser]);

  useEffect(() => {
    loadTickers();
  }, [loadTickers]);

  const removeTicker = async (symbol: string) => {
    if (!authUser || !authUser.uid) return;

    const userDocRef = doc(db, "users", authUser.uid);
    await updateDoc(userDocRef, {
      watchlist: arrayRemove(symbol),
    });

    setTickers((prevTickers) =>
      prevTickers.filter((ticker) => ticker.symbol !== symbol),
    );
  };

  return (
    <div className="flex flex-wrap justify-start">
      {tickers.map((ticker) => (
        <TickerItem
          key={ticker.symbol}
          ticker={ticker}
          removeTicker={removeTicker}
        />
      ))}
    </div>
  );
};

const calculateGain = (stockData: StockData[]): number => {
  if (stockData.length >= 2 && stockData[0].close && stockData[1].close) {
    const gain =
      ((stockData[0].close - stockData[1].close) / stockData[1].close) * 100;
    return parseFloat(gain.toFixed(1)); // Formats to 1 decimal place
  }
  return 0;
};

const calculateLoss = (stockData: StockData[]): number => {
  // Assuming loss is calculated the same as gain for simplicity
  return calculateGain(stockData);
};

export default TickerList;
