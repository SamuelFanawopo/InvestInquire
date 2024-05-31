import React, { useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_KEY_METRICS_TTM = gql`
  query KeyMetricsTTM($ticker: String!) {
    keyMetricsTTM(ticker: $ticker) {
      revenuePerShareTTM
      netIncomePerShareTTM
      operatingCashFlowPerShareTTM
      freeCashFlowPerShareTTM
      cashPerShareTTM
      bookValuePerShareTTM
      tangibleBookValuePerShareTTM
      shareholdersEquityPerShareTTM
      interestDebtPerShareTTM
      marketCapTTM
      enterpriseValueTTM
      peRatioTTM
      priceToSalesRatioTTM
      pocfratioTTM
      pfcfRatioTTM
      pbRatioTTM
      ptbRatioTTM
      evToSalesTTM
      enterpriseValueOverEBITDATTM
      evToOperatingCashFlowTTM
      evToFreeCashFlowTTM
      earningsYieldTTM
      freeCashFlowYieldTTM
      debtToEquityTTM
      debtToAssetsTTM
      netDebtToEBITDATTM
      currentRatioTTM
      interestCoverageTTM
      incomeQualityTTM
      dividendYieldTTM
      dividendYieldPercentageTTM
      payoutRatioTTM
      salesGeneralAndAdministrativeToRevenueTTM
      researchAndDevelopementToRevenueTTM
      intangiblesToTotalAssetsTTM
      capexToOperatingCashFlowTTM
      capexToRevenueTTM
      capexToDepreciationTTM
      stockBasedCompensationToRevenueTTM
      grahamNumberTTM
      roicTTM
      returnOnTangibleAssetsTTM
      grahamNetNetTTM
      workingCapitalTTM
      tangibleAssetValueTTM
      netCurrentAssetValueTTM
      investedCapitalTTM
      averageReceivablesTTM
      averagePayablesTTM
      averageInventoryTTM
      daysSalesOutstandingTTM
      daysPayablesOutstandingTTM
      daysOfInventoryOnHandTTM
      receivablesTurnoverTTM
      payablesTurnoverTTM
      inventoryTurnoverTTM
      roeTTM
      capexPerShareTTM
      dividendPerShareTTM
      debtToMarketCapTTM
    }
  }
`;

interface KeyMetricsTTM {
  revenuePerShareTTM: number;
  netIncomePerShareTTM: number;
  operatingCashFlowPerShareTTM: number;
  freeCashFlowPerShareTTM: number;
  cashPerShareTTM: number;
  bookValuePerShareTTM: number;
  tangibleBookValuePerShareTTM: number;
  shareholdersEquityPerShareTTM: number;
  interestDebtPerShareTTM: number;
  marketCapTTM: number;
  enterpriseValueTTM: number;
  peRatioTTM: number;
  priceToSalesRatioTTM: number;
  pocfratioTTM: number;
  pfcfRatioTTM: number;
  pbRatioTTM: number;
  ptbRatioTTM: number;
  evToSalesTTM: number;
  enterpriseValueOverEBITDATTM: number;
  evToOperatingCashFlowTTM: number;
  evToFreeCashFlowTTM: number;
  earningsYieldTTM: number;
  freeCashFlowYieldTTM: number;
  debtToEquityTTM: number;
  debtToAssetsTTM: number;
  netDebtToEBITDATTM: number;
  currentRatioTTM: number;
  interestCoverageTTM: number;
  incomeQualityTTM: number;
  dividendYieldTTM: number;
  dividendYieldPercentageTTM: number;
  payoutRatioTTM: number;
  salesGeneralAndAdministrativeToRevenueTTM: number;
  researchAndDevelopementToRevenueTTM: number;
  intangiblesToTotalAssetsTTM: number;
  capexToOperatingCashFlowTTM: number;
  capexToRevenueTTM: number;
  capexToDepreciationTTM: number;
  stockBasedCompensationToRevenueTTM: number;
  grahamNumberTTM: number;
  roicTTM: number;
  returnOnTangibleAssetsTTM: number;
  grahamNetNetTTM: number;
  workingCapitalTTM: number;
  tangibleAssetValueTTM: number;
  netCurrentAssetValueTTM: number;
  investedCapitalTTM: number;
  averageReceivablesTTM: number;
  averagePayablesTTM: number;
  averageInventoryTTM: number;
  daysSalesOutstandingTTM: number;
  daysPayablesOutstandingTTM: number;
  daysOfInventoryOnHandTTM: number;
  receivablesTurnoverTTM: number;
  payablesTurnoverTTM: number;
  inventoryTurnoverTTM: number;
  roeTTM: number;
  capexPerShareTTM: number;
  dividendPerShareTTM: number;
  debtToMarketCapTTM: number;
}

interface KeyMetricsTTMProps {
  ticker: string;
  isOpen: boolean;
  onClose: () => void;
}

const KeyMetricsTTM: React.FC<KeyMetricsTTMProps> = ({
  ticker,
  isOpen,
  onClose,
}) => {
  const [loadMetrics, { called, loading, data, error }] = useLazyQuery<{
    keyMetricsTTM: KeyMetricsTTM[];
  }>(GET_KEY_METRICS_TTM, {
    variables: { ticker },
  });

  useEffect(() => {
    if (isOpen && !called) {
      loadMetrics();
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen, called, loadMetrics]);

  if (!isOpen) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const financialData = data?.keyMetricsTTM[0];

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
              Comprehensive Financial Metrics TTM - {ticker.toUpperCase()}
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
                        {typeof value === "number" ? value.toFixed(2) : value}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-end p-5 space-x-4 border-t border-gray-200 rounded-b dark:border-gray-600 sticky bottom-0 bg-white dark:bg-gray-700">
            <button
              onClick={onClose}
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyMetricsTTM;
