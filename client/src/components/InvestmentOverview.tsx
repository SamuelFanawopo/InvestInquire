import { useQuery, gql } from "@apollo/client";

const INVESTMENT_OVERVIEW_QUERY = gql`
  query GetInvestmentOverview {
    investmentOverview {
      total
      free
      invested
      ppl
    }
  }
`;

const InvestmentOverview: React.FC = () => {
  const { loading, error, data } = useQuery(INVESTMENT_OVERVIEW_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { total, free, invested, ppl } = data.investmentOverview;
  const profit = total - invested;

  return (
    <>
      <div className="px-4 my-4 pb-6 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Investment Dashboard
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Monitor your investments with key insights on your dashboard. Track
          profits, cash balances, and stock performance—including price changes
          and news updates tailored to your watchlist.
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
          <div className="flex justify-between items-center border-gray-200 border-b dark:border-gray-700 pb-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Profit Overview
            </h2>
            <div className="text-green-500">
              <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                <svg
                  className="w-2.5 h-2.5 mr-1.5"
                  fill="none"
                  viewBox="0 0 10 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13V1m0 0L1 5m4-4 4 4"
                  />
                </svg>
                {((profit / invested) * 100).toFixed(2)}%
              </span>
            </div>
          </div>
          <dl className="text-center mt-3">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Profit
            </dt>
            <dd className="text-3xl font-bold text-gray-900 dark:text-white">
              £{profit.toFixed(2)}
            </dd>
          </dl>
        </div>

        <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
          <div className="grid grid-cols-2 gap-4 py-3">
            <dl>
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Invested Cash
              </dt>
              <dd className="text-xl font-bold text-gray-900 dark:text-white">
                £{invested.toLocaleString()}
              </dd>
            </dl>
            <dl>
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Free Cash
              </dt>
              <dd className="text-xl font-bold text-gray-900 dark:text-white">
                £{free.toLocaleString()}
              </dd>
            </dl>
            <dl>
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Total
              </dt>
              <dd className="text-xl font-bold text-gray-900 dark:text-white">
                £{total.toLocaleString()}
              </dd>
            </dl>
            <dl>
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Profit Per Loss
              </dt>
              <dd className="text-xl font-bold text-gray-900 dark:text-white">
                £{ppl.toFixed(2)}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentOverview;
