import React, { useState, useEffect, useCallback } from "react";
import TickerItem from "./TickerItem";
import { fetchUserWatchlist } from "./fetchUserWatchlist";
import { getFirestore, doc, updateDoc, arrayRemove } from "firebase/firestore";
import useAuth from "../utils/useAuth";

const TickerList: React.FC = () => {
  const [tickers, setTickers] = useState<string[]>([]); // Now storing just the symbols
  const authUser = useAuth();
  const db = getFirestore();

  const loadTickers = useCallback(async () => {
    if (authUser && authUser.uid) {
      const watchlistSymbols = await fetchUserWatchlist(authUser.uid);
      setTickers(watchlistSymbols);
    }
  }, [authUser]);

  useEffect(() => {
    loadTickers();
  }, [loadTickers]);

  const removeTicker = async (symbol: string) => {
    if (!authUser || !authUser.uid) return; // Return early if authUser is not available

    const userDocRef = doc(db, "users", authUser.uid);
    await updateDoc(userDocRef, {
      watchlist: arrayRemove(symbol),
    });

    setTickers((prevTickers) =>
      prevTickers.filter((tickerSymbol) => tickerSymbol !== symbol),
    );
  };

  return (
    <div className="flex flex-wrap justify-start">
      {tickers.map((symbol) => (
        <TickerItem
          key={symbol}
          ticker={{ symbol }} // Passing only the symbol to TickerItem
          removeTicker={removeTicker}
        />
      ))}
    </div>
  );
};

export default TickerList;
