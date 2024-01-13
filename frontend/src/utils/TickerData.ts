// TickerData.ts
export interface TickerData {
  symbol: string;
  prices: {
    openYesterday: number;
    closeYesterday: number;
    currentPrice: number;
  };
  gain: number;
  loss: number;
}

export interface StockData {
  date: string;
  open: number;
  close: number;
  high?: number; // Optional, include if needed
  low?: number; // Optional, include if needed
  volume?: number; // Optional, include if needed
}
