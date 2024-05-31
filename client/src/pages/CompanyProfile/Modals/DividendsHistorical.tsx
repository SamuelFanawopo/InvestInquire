import { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";

interface DividendData {
  date: string;
  label: string;
  adjDividend: number;
  dividend: number;
  recordDate: string;
  paymentDate: string;
  declarationDate: string;
}

interface DividendsHistoricalData {
  symbol: string;
  historical: DividendData[];
}

const GET_DIVIDENDS_HISTORICAL = gql`
  query DividendsHistorical($ticker: String!, $page: Int!) {
    dividendsHistorical(ticker: $ticker, page: $page) {
      symbol
      historical {
        date
        label
        adjDividend
        dividend
        recordDate
        paymentDate
        declarationDate
      }
    }
  }
`;

const DividendsHistorical = ({
  isOpen,
  onClose,
  ticker,
}: {
  isOpen: boolean;
  onClose: () => void;
  ticker: string;
}) => {
  const [page, setPage] = useState(0);
  const [loadDividendsHistorical, { called, loading, data, error }] =
    useLazyQuery<{ dividendsHistorical: DividendsHistoricalData[] }>(
      GET_DIVIDENDS_HISTORICAL,
      {
        variables: { ticker, page },
      },
    );

  useEffect(() => {
    if (isOpen) {
      loadDividendsHistorical();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen, loadDividendsHistorical]);

  useEffect(() => {
    if (called) {
      loadDividendsHistorical({ variables: { ticker, page } });
    }
  }, [page, loadDividendsHistorical, ticker, called]);

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  if (!isOpen) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const dividendData = data?.dividendsHistorical[0]?.historical;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
        <div className="relative w-full max-w-2xl h-full max-h-[90vh] bg-white rounded-lg shadow dark:bg-gray-700 overflow-hidden">
          <div className="flex justify-between items-center p-5 border-b rounded-t bg-white dark:bg-gray-700 dark:border-gray-600 sticky top-0 z-10">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Dividends Historical - {ticker.toUpperCase()}
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div
            className="overflow-auto pb-20"
            style={{ maxHeight: "calc(90vh - 130px)" }}
          >
            {dividendData ? (
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Metric
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dividendData.map((dividend, index) => (
                    <>
                      {Object.entries(dividend).map(([key, value]) =>
                        key !== "__typename" ? (
                          <tr
                            key={`${index}-${key}`}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {key.split(/(?=[A-Z])/).join(" ")}
                            </th>
                            <td className="px-6 py-4">
                              {key.includes("Date")
                                ? new Date(value).toLocaleDateString()
                                : typeof value === "number"
                                  ? value.toFixed(2)
                                  : value}
                            </td>
                          </tr>
                        ) : null,
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-6 text-gray-700 dark:text-gray-400">
                No dividend data available.
              </div>
            )}
          </div>
          <div className="flex items-center justify-start p-5 space-x-4 border-t border-gray-200 rounded-b dark:border-gray-600 sticky bottom-0 bg-white dark:bg-gray-700">
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
              Previous Page
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next Page
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
      </div>
    </>
  );
};

export default DividendsHistorical;
