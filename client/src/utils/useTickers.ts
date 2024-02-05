// useTickers.ts
import { useMemo } from "react";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { TickerData } from "./TickerData";

const useTickers = (userId: string) => {
  const [tickers, setTickers] = useState<TickerData[]>([]);
  const db = useMemo(() => getFirestore(), []);

  useEffect(() => {
    if (userId) {
      const q = query(collection(db, "tickers"), where("userId", "==", userId));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const tickersData: TickerData[] = snapshot.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
            }) as TickerData,
        );
        setTickers(tickersData);
      });

      return () => unsubscribe(); // Detach listener on unmount
    }
  }, [userId, db]);

  const addTicker = async (tickerData: TickerData) => {
    await addDoc(collection(db, "tickers"), { ...tickerData, userId });
  };

  const removeTicker = async (tickerId: string) => {
    await deleteDoc(doc(db, "tickers", tickerId));
  };

  return {
    tickers,
    addTicker,
    removeTicker,
  };
};

export default useTickers;
