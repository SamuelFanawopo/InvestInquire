export interface TickerData {
  id?: string; // Include an id if you're using Firestore documents
  symbol: string;
  gain: number;
  loss: number;
  prices: {
    openYesterday: number;
    closeYesterday: number;
    currentPrice: number;
  };
}
