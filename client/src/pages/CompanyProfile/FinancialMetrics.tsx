import { useState } from "react";
import KeyMetrics from "./Modals/KeyMetrics";
import KeyMetricsTTM from "./Modals/KeyMetricsTTM";
import KeyRatiosTTM from "./Modals/KeyRatiosTTM";
import { useParams } from "react-router-dom";

const FinancialMetrics = () => {
  const { ticker } = useParams<{ ticker: string }>(); // Ensure the ticker is expected as a non-optional parameter

  const [isKeyMetricsModalOpen, setKeyMetricsModalOpen] = useState(false);
  const [isKeyMetricsTTMModalOpen, setKeyMetricsTTMModalOpen] = useState(false);
  const [isKeyRatiosTTMModalOpen, setKeyRatiosTTMModalOpen] = useState(false);

  const toggleKeyMetricsModal = () =>
    setKeyMetricsModalOpen(!isKeyMetricsModalOpen);
  const toggleKeyMetricsTTMModal = () =>
    setKeyMetricsTTMModalOpen(!isKeyMetricsTTMModalOpen);
  const toggleKeyRatiosTTMModal = () =>
    setKeyRatiosTTMModalOpen(!isKeyRatiosTTMModalOpen);

  return (
    <>
      <h1 className="mb-4 mt-8 text-4xl font-extrabold flex items-center justify-center my-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Financial Metrics & Ratios
      </h1>
      <p className="mb-6 text-lg flex items-center justify-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Analyze key financial indicators to assess company health and
        performance.
      </p>
      <div className="my-16 flex justify-center space-x-6">
        {/* Key Metrics */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Key Metrics
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Explore essential metrics that capture the financial health and
            operational efficiency of companies.
          </p>
          <button
            onClick={toggleKeyMetricsModal}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Data
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <KeyMetrics
            ticker={ticker}
            isOpen={isKeyMetricsModalOpen}
            onClose={toggleKeyMetricsModal}
          />
        </div>
        {/* Key Metrics TTM */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Key Metrics TTM
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Review the most recent trailing twelve months (TTM) data for
            critical financial metrics. This updated snapshot provides insights
            into the latest company performance.
          </p>
          <button
            onClick={toggleKeyMetricsTTMModal}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Data
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <KeyMetricsTTM
            ticker={ticker}
            isOpen={isKeyMetricsTTMModalOpen}
            onClose={toggleKeyMetricsTTMModal}
          />
        </div>
        {/* Key Ratios TTM */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Key Ratios TTM
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Discover key financial ratios from the trailing twelve months (TTM)
            to evaluate company solvency, efficiency, and profitability.
          </p>
          <button
            onClick={toggleKeyRatiosTTMModal}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Data
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <KeyRatiosTTM
            ticker={ticker}
            isOpen={isKeyRatiosTTMModalOpen}
            onClose={toggleKeyRatiosTTMModal}
          />
        </div>
      </div>
    </>
  );
};

export default FinancialMetrics;
