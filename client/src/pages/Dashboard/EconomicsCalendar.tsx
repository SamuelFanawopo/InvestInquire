import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

type EconomicEvent = {
  date: string;
  country: string;
  event: string;
  currency: string;
  actual: number | null;
  previous: number | null;
  change: number | null;
  changePercentage: number | null;
  estimate: number | null;
  impact: string;
};

const GET_ECONOMIC_EVENTS = gql`
  query GetEconomicEvents($from: String!, $to: String!, $page: Int!) {
    globalEvents(from: $from, to: $to, page: $page) {
      date
      country
      event
      currency
      actual
      previous
      change
      changePercentage
      estimate
      impact
    }
  }
`;

const EconomicsCalendar: React.FC = () => {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextDay = tomorrow.toISOString().split("T")[0];

  const [page, setPage] = useState<number>(0);

  const { loading, error, data } = useQuery<{ globalEvents: EconomicEvent[] }>(
    GET_ECONOMIC_EVENTS,
    {
      variables: { from: today, to: nextDay, page },
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
      <div className="px-4 my-4 py-8 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Economic Calendar
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Stay informed on key dates and impacts from global economic events.
        </p>
      </div>
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data?.globalEvents.map((event, index) => (
            <div
              key={index}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {event.event}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {`${new Date(event.date).toLocaleString()} | ${event.country} | ${event.currency}`}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Actual: {event.actual ?? "N/A"} | Previous:{" "}
                {event.previous ?? "N/A"} | Change: {event.change ?? "N/A"} (
                {event.changePercentage ?? 0}%)
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Estimate: {event.estimate ?? "N/A"} | Impact: {event.impact}
              </p>
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
      </div>
    </>
  );
};

export default EconomicsCalendar;
