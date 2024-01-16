// TickerData.ts
export interface TickerData {
  symbol: string;
  recentData?: StockDayData[]; // Now optional
  gain?: number; // Now optional
  loss?: number; // Now optional
}

export interface StockDayData {
  open: number;
  close: number;
  high?: number; // Optional
  low?: number; // Optional
}
