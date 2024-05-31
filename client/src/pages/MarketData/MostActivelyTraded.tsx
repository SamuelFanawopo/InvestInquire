import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import DataQuote from "./DataQuote";

const GET_MOST_ACTIVELY_TRADED = gql`
  query GetMostActivelyTraded {
    mostActivelyTraded {
      symbol
      name
      price
      changesPercentage
    }
  }
`;

type MostActivelyTradedStock = {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
};

const MostActivelyTraded: React.FC = () => {
  const [openTicker, setOpenTicker] = useState<string | null>(null);
  const { loading, error, data } = useQuery<{
    mostActivelyTraded: MostActivelyTradedStock[];
  }>(GET_MOST_ACTIVELY_TRADED);

  const toggleIsQuoteOpen = (ticker: string) => {
    setOpenTicker(openTicker === ticker ? null : ticker);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-12">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pb-16">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Most Actively Traded Overview
          </h1>
          <p className="mt-5 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            View the most actively traded stocks, featuring updates on
            exchanges, names, symbols, and price changes.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-4 gap-8 mx-4">
        {data?.mostActivelyTraded.map((stock) => (
          <div
            key={stock.symbol}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5 className="mb-2 text-l font-bold tracking-tight text-blue-800 dark:text-white">
                {stock.symbol}
                <span className="ml-4 text-gray-900">{stock.name}</span>
              </h5>
            </a>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              USD {stock.price.toFixed(2)}
            </p>
            <p
              className={`mb-3 inline-flex font-normal ${stock.changesPercentage < 0 ? "text-red-700" : "text-green-700"} dark:text-gray-400`}
            >
              <span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {stock.changesPercentage < 0 ? (
                    <path
                      fillRule="evenodd"
                      d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </span>
              {stock.changesPercentage.toFixed(2)}%
            </p>
            <div className="mb-3">
              <button
                onClick={() => toggleIsQuoteOpen(stock.symbol)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Full Data Quote
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
            </div>
            {openTicker === stock.symbol && (
              <DataQuote
                key={stock.symbol}
                ticker={stock.symbol}
                isOpen={openTicker === stock.symbol}
                onClose={() => setOpenTicker(null)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MostActivelyTraded;
