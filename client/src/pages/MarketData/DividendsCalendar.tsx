import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import dayjs from "dayjs";

type Dividend = {
  date: string;
  label: string;
  adjDividend: number;
  symbol: string;
  dividend: number;
  recordDate: string;
  paymentDate: string;
  declarationDate: string | null;
};

const GET_DIVIDENDS_CALENDAR = gql`
  query GetDividendsCalendar($from: String!, $to: String!, $page: Int!) {
    dividendsCalendar(from: $from, to: $to, page: $page) {
      date
      label
      adjDividend
      symbol
      dividend
      recordDate
      paymentDate
      declarationDate
    }
  }
`;

const DividendsCalendar: React.FC = () => {
  const today = dayjs().format("YYYY-MM-DD");
  const tomorrow = dayjs().add(2, "day").format("YYYY-MM-DD");

  const [page, setPage] = useState<number>(0);

  const { data, loading, error } = useQuery<{ dividendsCalendar: Dividend[] }>(
    GET_DIVIDENDS_CALENDAR,
    {
      variables: { from: today, to: tomorrow, page },
    },
  );

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="px-4 py-8 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Dividends Calendar
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          View scheduled dividend payments with our comprehensive Dividends
          Calendar. Track upcoming distributions to optimize your investment
          planning.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mx-auto max-w-screen-xl">
        {data?.dividendsCalendar.map((dividend, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {dividend.symbol} - {dividend.date}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Dividend: ${dividend.dividend.toFixed(2)} (Adj: $
              {dividend.adjDividend.toFixed(2)})
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Record Date: {dividend.recordDate}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Payment Date: {dividend.paymentDate}
            </p>
            {dividend.declarationDate && (
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Declaration Date: {dividend.declarationDate}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-4">
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
    </>
  );
};

export default DividendsCalendar;
