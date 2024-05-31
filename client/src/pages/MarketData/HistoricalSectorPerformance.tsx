import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const HISTORICAL_SECTOR_PERFORMANCE_QUERY = gql`
  query HistoricalSectorPerformance($page: Int!) {
    historicalSectorPerformance(page: $page) {
      date
      basicMaterialsChangesPercentage
      communicationServicesChangesPercentage
      consumerCyclicalChangesPercentage
      consumerDefensiveChangesPercentage
      energyChangesPercentage
      financialServicesChangesPercentage
      healthcareChangesPercentage
      industrialsChangesPercentage
      realEstateChangesPercentage
      technologyChangesPercentage
      utilitiesChangesPercentage
    }
  }
`;

interface HistoricalSectorPerformanceProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SectorPerformanceData {
  date: string;
  basicMaterialsChangesPercentage: number;
  communicationServicesChangesPercentage: number;
  consumerCyclicalChangesPercentage: number;
  consumerDefensiveChangesPercentage: number;
  energyChangesPercentage: number;
  financialServicesChangesPercentage: number;
  healthcareChangesPercentage: number;
  industrialsChangesPercentage: number;
  realEstateChangesPercentage: number;
  technologyChangesPercentage: number;
  utilitiesChangesPercentage: number;
}

const HistoricalSectorPerformance: React.FC<
  HistoricalSectorPerformanceProps
> = ({ isOpen, onClose }) => {
  const [page, setPage] = useState(0);
  const { loading, error, data, refetch } = useQuery<{
    historicalSectorPerformance: SectorPerformanceData[];
  }>(HISTORICAL_SECTOR_PERFORMANCE_QUERY, {
    variables: { page },
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "visible"; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = "visible"; // Cleanup on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const historicalData = data?.historicalSectorPerformance;

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
      refetch({ page: page - 1 });
    }
  };

  const handleNext = () => {
    setPage(page + 1);
    refetch({ page: page + 1 });
  };

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
              Historical Sector Performance
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
                {historicalData?.map((entry) => (
                  <React.Fragment key={entry.date}>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Date
                      </th>
                      <td className="px-6 py-4">{entry.date}</td>
                    </tr>
                    {Object.entries(entry).map(([key, value]) => {
                      if (key !== "date") {
                        return (
                          <tr
                            key={key}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                            </th>
                            <td className="px-6 py-4">
                              {typeof value === "number"
                                ? value.toFixed(2) + "%"
                                : value}
                            </td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
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
      </div>
    </>
  );
};

export default HistoricalSectorPerformance;
