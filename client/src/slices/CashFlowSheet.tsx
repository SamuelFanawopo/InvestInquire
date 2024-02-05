import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

// GraphQL query for fetching cash flow data
const GET_CASH_FLOW = gql`
  query GetCashFlow($symbol: String!) {
    cashFlow(symbol: $symbol) {
      fiscalDateEnding
      reportedCurrency
      operatingCashflow
      paymentsForOperatingActivities
      proceedsFromOperatingActivities
      changeInOperatingLiabilities
      changeInOperatingAssets
      depreciationDepletionAndAmortization
      capitalExpenditures
      changeInReceivables
      changeInInventory
      profitLoss
      cashflowFromInvestment
      cashflowFromFinancing
      proceedsFromRepaymentsOfShortTermDebt
      paymentsForRepurchaseOfCommonStock
      paymentsForRepurchaseOfEquity
      paymentsForRepurchaseOfPreferredStock
      dividendPayout
      dividendPayoutCommonStock
      dividendPayoutPreferredStock
      proceedsFromIssuanceOfCommonStock
      proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet
      proceedsFromIssuanceOfPreferredStock
      proceedsFromRepurchaseOfEquity
      proceedsFromSaleOfTreasuryStock
      changeInCashAndCashEquivalents
      changeInExchangeRate
      netIncome
    }
  }
`;

const CashFlowSheet: React.FC<{ symbol: string }> = ({ symbol }) => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const { loading, error, data } = useQuery(GET_CASH_FLOW, {
    variables: { symbol },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading cash flow data.</p>;

  const cashFlowSheetData = data?.cashFlow;

  const renderTable = () => {
    return (
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full text-sm text-left text-black">
          <thead className="text-xs uppercase bg-blue-500 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {cashFlowSheetData &&
              Object.entries(cashFlowSheetData).map(([key, value], index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-blue-50"
                  } border-b border-blue-200`}
                >
                  <td className="px-6 py-4">{key}</td>
                  <td className="px-6 py-4">{value?.toString() ?? "N/A"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full flex justify-center">
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          onClick={() => setShowTable(!showTable)}
        >
          {!showTable ? "View Cash Flow Sheet" : "Close Cash Flow Sheet"}
        </button>
      </div>
      {showTable && renderTable()}
    </div>
  );
};

export default CashFlowSheet;
