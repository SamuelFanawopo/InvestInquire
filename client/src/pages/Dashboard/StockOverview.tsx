import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import InvestStocksQuote from "./InvestedStocksQuote";

const OPEN_POSITIONS_QUERY = gql`
  query GetOpenPositions {
    openPositions {
      ticker
      quantity
      currentPrice
      ppl
    }
  }
`;

interface StockOverviewProps {
  onTickersChange: (tickers: string[]) => void;
}

const StockOverview: React.FC<StockOverviewProps> = ({ onTickersChange }) => {
  const { loading, error, data } = useQuery(OPEN_POSITIONS_QUERY);
  const [openTicker, setOpenTicker] = useState<string | null>(null);

  useEffect(() => {
    if (data && data.openPositions && data.openPositions.length > 0) {
      const tickers = data.openPositions.map(
        (stock: { ticker: string }) => stock.ticker.split("_")[0], // Transform the ticker here
      );
      onTickersChange(Array.from(new Set(tickers))); // Remove duplicates
    }
  }, [data, onTickersChange]);

  const toggleIsQuoteOpen = (ticker: string) => {
    setOpenTicker((prev) => (prev === ticker ? null : ticker));
  };

  const formatCurrency = (value: number) => {
    const isNegative = value < 0;
    const absoluteValue = Math.abs(value).toFixed(2);
    return `${isNegative ? "-" : ""}£${absoluteValue}`;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-12">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pb-16">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            My Stocks Overview
          </h1>
          <p className="text-lg font-normal mt-4 text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Review all stocks you've invested in or added to your watchlist.
            This section displays each stock's name, current price, and
            profit/loss. Click on a stock for a detailed quote and comprehensive
            data.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-4 gap-8 mx-4">
        {data.openPositions.map((stock: any) => (
          <div
            key={stock.ticker}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-l font-bold tracking-tight text-blue-800 dark:text-white">
              {stock.ticker}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              USD {stock.currentPrice.toFixed(2)}
              <span className="ml-2">Qty: {stock.quantity.toFixed(2)}</span>
            </p>
            <p
              className={`mb-3 flex items-center font-normal ${
                stock.ppl >= 0 ? "text-green-700" : "text-red-700"
              } dark:text-gray-400`}
            >
              <span className="mr-2">
                {stock.ppl >= 0 ? (
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
              {formatCurrency(stock.ppl)}
            </p>
            <button
              onClick={() => toggleIsQuoteOpen(stock.ticker)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Full Data Quote
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
            {openTicker === stock.ticker && (
              <InvestStocksQuote
                ticker={stock.ticker}
                isOpen={openTicker === stock.ticker}
                onClose={() => toggleIsQuoteOpen(stock.ticker)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default StockOverview;
