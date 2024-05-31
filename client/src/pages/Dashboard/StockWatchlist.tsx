import { useState, useEffect } from "react";

const StockWatchlist = ({ isOpen, onClose }) => {
  const [page, setPage] = useState(1);

  const financialData = [
    {
      symbol: "AAPL",
      date: "2022-09-24",
      calendarYear: "2022",
      period: "FY",
      revenuePerShare: 24.31727304755197,
      netIncomePerShare: 6.154614437637777,
      operatingCashFlowPerShare: 7.532762624088375,
      freeCashFlowPerShare: 6.872425646259799,
      cashPerShare: 2.9787931805221803,
      bookValuePerShare: 3.124822127430853,
      tangibleBookValuePerShare: 3.124822127430853,
      shareholdersEquityPerShare: 3.124822127430853,
      interestDebtPerShare: 7.585118441624466,
      marketCap: 2439367314090,
      enterpriseValue: 2535790314090,
      peRatio: 24.441823533260525,
      priceToSalesRatio: 6.186137718067193,
      pocfratio: 19.970096962693717,
      pfcfRatio: 21.888923611981014,
      pbRatio: 48.14034011071204,
      ptbRatio: 48.14034011071204,
      evToSales: 6.430662580618166,
      enterpriseValueOverEBITDA: 19.42524045388039,
      evToOperatingCashFlow: 20.75947240783948,
      evToFreeCashFlow: 22.754146192134094,
      earningsYield: 0.040913477615088595,
      freeCashFlowYield: 0.04568520671581333,
      debtToEquity: 2.3695334701610355,
      debtToAssets: 0.3403750478377344,
      netDebtToEBITDA: 0.738641499605488,
      currentRatio: 0.8793560286267226,
      interestCoverage: 40.74957352439441,
      incomeQuality: 1.2239211246154926,
      dividendYield: 0.006083954603424043,
      payoutRatio: 0.14870294480125848,
      salesGeneralAndAdministrativeToRevenue: 0,
      researchAndDevelopementToRevenue: 0.06657148363798665,
      intangiblesToTotalAssets: 0,
      capexToOperatingCashFlow: -0.08766199212450164,
      capexToRevenue: -0.02715505873283155,
      capexToDepreciation: -0.9643371757925072,
      stockBasedCompensationToRevenue: 0.022920005680550203,
      grahamNumber: 20.801963754945305,
      roic: 0.5861678044404918,
      returnOnTangibleAssets: 0.2829244092925685,
      grahamNetNet: -12.67929632054538,
      workingCapital: -18577000000,
      tangibleAssetValue: 50672000000,
      netCurrentAssetValue: -166678000000,
      investedCapital: 2.3695334701610355,
      averageReceivables: 56219000000,
      averagePayables: 59439000000,
      averageInventory: 5763000000,
      daysSalesOutstanding: 56.400204905560855,
      daysPayablesOutstanding: 104.6852773031054,
      daysOfInventoryOnHand: 8.07569806661716,
      receivablesTurnover: 6.471607693822622,
      payablesTurnover: 3.486641191608828,
      inventoryTurnover: 45.19733117670845,
      roe: 1.9695887275023682,
      capexPerShare: -0.6603369778285755,
    },
  ];

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

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
              Comprehensive Financial Metrics - AAPL FY 2022
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
            {" "}
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
                {Object.entries(financialData[0]).map(([key, value]) => (
                  <tr
                    key={key}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {key.split(/(?=[A-Z])/).join(" ")}{" "}
                      {/* Converts camelCase to normal text */}
                    </th>
                    <td className="px-6 py-4">
                      {typeof value === "number" ? value.toFixed(2) : value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-start p-5 space-x-4 border-t border-gray-200 rounded-b dark:border-gray-600 sticky bottom-0 bg-white dark:bg-gray-700">
            <button
              onClick={handlePrevious}
              className={`flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={page === 1}
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
              Previous Year
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next Year
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

export default StockWatchlist;
