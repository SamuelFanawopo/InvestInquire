import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import CommoditiesDataQuote from "./CommoditiesDataQuote";

const GET_COMMODITIES = gql`
  query GetCommodities($page: Int!) {
    commodities(page: $page) {
      stockExchange
      symbol
      name
      currency
      exchangeShortName
    }
  }
`;

type Commodity = {
  stockExchange: string;
  symbol: string;
  name: string;
  currency: string;
  exchangeShortName: string;
};

const Commodities: React.FC = () => {
  const [page, setPage] = useState(0);
  const [openTicker, setOpenTicker] = useState<string | null>(null);

  const { data, loading, error, refetch } = useQuery<{
    commodities: Commodity[];
  }>(GET_COMMODITIES, {
    variables: { page },
  });

  useEffect(() => {
    refetch({ page });
  }, [page, refetch]);

  const handlePrevious = () => {
    setPage(Math.max(0, page - 1));
  };

  const handleNext = () => {
    setPage(page + 1);
  };

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
            Commodities List
          </h1>
          <p className="mt-5 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Browse our commodities list, showcasing key details such as exchange
            and name. Use the 'Full Data Quote' button for in-depth analysis,
            and navigate through the list with 'Next' and 'Previous' buttons.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-4 gap-8 mx-4 mb-12">
        {data?.commodities.map((commodity) => (
          <div
            key={commodity.symbol}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5 className="mb-2 text-l font-bold tracking-tight text-blue-800 dark:text-white">
                {commodity.stockExchange}{" "}
                <span className="ml-4 text-gray-900">
                  {commodity.symbol} - {commodity.name}
                </span>
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {commodity.currency} - {commodity.exchangeShortName}
            </p>
            <div className="mb-3">
              <button
                onClick={() => toggleIsQuoteOpen(commodity.symbol)}
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
            {openTicker === commodity.symbol && (
              <CommoditiesDataQuote
                key={commodity.symbol}
                ticker={commodity.symbol}
                isOpen={openTicker === commodity.symbol}
                onClose={() => setOpenTicker(null)}
              />
            )}
          </div>
        ))}

        <div className="col-span-4 flex justify-center space-x-4 mt-4">
          <button
            onClick={handlePrevious}
            className={`flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              page === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={page === 0}
          >
            <svg
              className="w-3.5 h-3.5 mr-2"
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
                d="M13 5H1m0 0l4 4M1 5l4-4"
              />
            </svg>
            Previous
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg
              className="w-3.5 h-3.5 ml-2"
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
      </div>
    </>
  );
};

export default Commodities;
