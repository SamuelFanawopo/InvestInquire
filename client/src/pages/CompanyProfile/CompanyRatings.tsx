import { useState } from "react";
import CompanyRating from "./Modals/CompanyRating";
import HistoricalRatings from "./Modals/HistoricalRatings.tsx";
import { useParams } from "react-router-dom";

const CompanyRatings: React.FC = () => {
  const { ticker } = useParams<{ ticker: string }>(); // Ensure the ticker is expected as a non-optional parameter
  const [isCompanyRatingModalOpen, setCompanyRatingModalOpen] = useState(false);
  const [isHistoricalRatingsModalOpen, setHistoricalRatingsModalOpen] =
    useState(false);

  const toggleCompanyRatingModal = () =>
    setCompanyRatingModalOpen(!isCompanyRatingModalOpen);
  const toggleHistoricalRatingsModal = () =>
    setHistoricalRatingsModalOpen(!isHistoricalRatingsModalOpen);

  return (
    <>
      <h1 className="mb-4 mt-10 text-4xl font-extrabold flex items-center justify-center my-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Company Ratings & Historical Analysis
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 flex items-center justify-center lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Explore past and present ratings to assess credibility and performance
        trends over time.
      </p>
      <div className="my-16 flex justify-center gap-14">
        {/* Company Rating */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Company Rating
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Examine the current rating of the company, based on comprehensive
            analysis from leading rating agencies.
          </p>
          <button
            onClick={toggleCompanyRatingModal}
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
          <CompanyRating
            ticker={ticker}
            isOpen={isCompanyRatingModalOpen}
            onClose={toggleCompanyRatingModal}
          />
        </div>
        {/* Historical Ratings */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Historical Ratings
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Explore the historical ratings of the company to see how its
            creditworthiness and market perception have evolved over time.
          </p>
          <button
            onClick={toggleHistoricalRatingsModal}
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
          <HistoricalRatings
            ticker={ticker}
            isOpen={isHistoricalRatingsModalOpen}
            onClose={toggleHistoricalRatingsModal}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyRatings;
