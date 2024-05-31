import React, { useState, useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_CASH_FLOW_GROWTH = gql`
  query CashFlowGrowth($ticker: String!, $page: Int!) {
    cashFlowGrowth(ticker: $ticker, page: $page) {
      symbol
      date
      period
      calendarYear
      growthNetIncome
      growthDepreciationAndAmortization
      growthStockBasedCompensation
      growthChangeInWorkingCapital
      growthAccountsReceivables
      growthInventory
      growthAccountsPayables
      growthOtherWorkingCapital
      growthOtherNonCashItems
      growthNetCashProvidedByOperatingActivities
      growthInvestmentsInPropertyPlantAndEquipment
      growthAcquisitionsNet
      growthPurchasesOfInvestments
      growthSalesMaturitiesOfInvestments
      growthNetCashUsedForInvestingActivities
      growthDebtRepayment
      growthCommonStockIssued
      growthCommonStockRepurchased
      growthDeferredIncomeTax
      growthDividendsPaid
      growthNetCashUsedProvidedByFinancingActivities
      growthEffectOfForexChangesOnCash
      growthNetChangeInCash
      growthCashAtEndOfPeriod
      growthCashAtBeginningOfPeriod
      growthOperatingCashFlow
      growthCapitalExpenditure
      growthFreeCashFlow
      growthOtherInvestingActivites
      growthOtherFinancingActivites
    }
  }
`;

interface CashFlowGrowthData {
  symbol: string;
  date: string;
  period: string;
  calendarYear: number;
  growthNetIncome: number;
  growthDepreciationAndAmortization: number;
  growthStockBasedCompensation: number;
  growthChangeInWorkingCapital: number;
  growthAccountsReceivables: number;
  growthInventory: number;
  growthAccountsPayables: number;
  growthOtherWorkingCapital: number;
  growthOtherNonCashItems: number;
  growthNetCashProvidedByOperatingActivities: number;
  growthInvestmentsInPropertyPlantAndEquipment: number;
  growthAcquisitionsNet: number;
  growthPurchasesOfInvestments: number;
  growthSalesMaturitiesOfInvestments: number;
  growthNetCashUsedForInvestingActivities: number;
  growthDebtRepayment: number;
  growthCommonStockIssued: number;
  growthCommonStockRepurchased: number;
  growthDeferredIncomeTax: number;
  growthDividendsPaid: number;
  growthNetCashUsedProvidedByFinancingActivities: number;
  growthEffectOfForexChangesOnCash: number;
  growthNetChangeInCash: number;
  growthCashAtEndOfPeriod: number;
  growthCashAtBeginningOfPeriod: number;
  growthOperatingCashFlow: number;
  growthCapitalExpenditure: number;
  growthFreeCashFlow: number;
  growthOtherInvestingActivites: number;
  growthOtherFinancingActivites: number;
}

interface CashFlowStatementGrowthProps {
  ticker: string;
  isOpen: boolean;
  onClose: () => void;
}

const CashFlowStatementGrowth: React.FC<CashFlowStatementGrowthProps> = ({
  ticker,
  isOpen,
  onClose,
}) => {
  const [page, setPage] = useState(0);
  const [loadCashFlowGrowth, { called, loading, data, error }] = useLazyQuery<{
    cashFlowGrowth: CashFlowGrowthData[];
  }>(GET_CASH_FLOW_GROWTH, {
    variables: { ticker, page },
  });

  const handlePrevious = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => setPage(page + 1);

  useEffect(() => {
    if (isOpen) {
      loadCashFlowGrowth();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen, loadCashFlowGrowth]);

  useEffect(() => {
    if (called) {
      loadCashFlowGrowth({ variables: { ticker, page } });
    }
  }, [page, loadCashFlowGrowth, ticker, called]);

  if (!isOpen) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  const financialData = data?.cashFlowGrowth[0];

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
              Cash Flow Growth - {ticker.toUpperCase()}{" "}
              {financialData?.calendarYear}
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
                {financialData &&
                  Object.entries(financialData).map(([key, value]) => (
                    <tr
                      key={key}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {key.split(/(?=[A-Z])/).join(" ")}
                      </th>
                      <td className="px-6 py-4">
                        {typeof value === "number"
                          ? (value * 100).toFixed(2) + "%"
                          : value}
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

export default CashFlowStatementGrowth;
