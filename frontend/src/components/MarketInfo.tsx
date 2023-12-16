import React from "react";

interface MarketInfoProps {
  ticker: string;
  price: string;
  change: string;
  changePercent: string;
  volume: string;
}

const MarketInfo: React.FC<MarketInfoProps> = ({
  ticker,
  price,
  change,
  changePercent,
  volume,
}) => {
  const stockInfo = () => (
    <div className="mb-4">
      <p>
        <span className="font-semibold">Ticker:</span> {ticker}
      </p>
      <p>
        <span className="font-semibold">Price:</span> {price}
      </p>
      <p>
        <span className="font-semibold">Change:</span> {change}
      </p>
      <p>
        <span className="font-semibold">Change Percent:</span> {changePercent}
      </p>
      <p>
        <span className="font-semibold">Volume:</span> {volume}
      </p>
    </div>
  );

  // Helper function to generate multiple stock info components
  const generateStockInfos = (count: number) =>
    Array.from({ length: count }, () => stockInfo());

  return (
    <div className="p-4 border border-gray-200 rounded shadow-md mr-2">
      <h1 className="text-2xl text-center font-bold mb-4">
        Top gainers, losers, and most actively traded US tickers
      </h1>

      <section>
        <h2 className="text-xl font-semibold text-center mb-4">
          Top Gainers Today
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {generateStockInfos(8)}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-center mb-4">
          Top Losers Today
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {generateStockInfos(8)}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-center mb-4">
          Most actively traded US tickers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {generateStockInfos(12)}
        </div>
      </section>
    </div>
  );
};

export default MarketInfo;
