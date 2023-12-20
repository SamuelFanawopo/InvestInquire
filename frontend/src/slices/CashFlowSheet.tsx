import { useState } from "react";

type CashFlowSheetData = {
  [key: string]: string | number;
};

const CashFlowSheet: React.FC = () => {
  const [showTable, setShowTable] = useState<boolean>(false);

  const cashFlowSheetData: CashFlowSheetData = {
    fiscalDateEnding: "2022-12-31",
    reportedCurrency: "USD",
    operatingCashflow: "10435000000",
    paymentsForOperatingActivities: "2430000000",
    proceedsFromOperatingActivities: "None",
    changeInOperatingLiabilities: "213000000",
    changeInOperatingAssets: "468000000",
    depreciationDepletionAndAmortization: "4802000000",
    capitalExpenditures: "1346000000",
    changeInReceivables: "539000000",
    changeInInventory: "-71000000",
    profitLoss: "1639000000",
    cashflowFromInvestment: "-4202000000",
    cashflowFromFinancing: "-4958000000",
    proceedsFromRepaymentsOfShortTermDebt: "217000000",
    paymentsForRepurchaseOfCommonStock: "None",
    paymentsForRepurchaseOfEquity: "None",
    paymentsForRepurchaseOfPreferredStock: "None",
    dividendPayout: "5948000000",
    dividendPayoutCommonStock: "5948000000",
    dividendPayoutPreferredStock: "None",
    proceedsFromIssuanceOfCommonStock: "None",
    proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet: "7804000000",
    proceedsFromIssuanceOfPreferredStock: "None",
    proceedsFromRepurchaseOfEquity: "-407000000",
    proceedsFromSaleOfTreasuryStock: "None",
    changeInCashAndCashEquivalents: "None",
    changeInExchangeRate: "None",
    netIncome: "1639000000",
  };

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
            {Object.entries(cashFlowSheetData).map(([key, value], index) => (
              <tr
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-blue-50"
                } border-b border-blue-200`}
              >
                <td className="px-6 py-4">{key}</td>
                <td className="px-6 py-4">{value}</td>
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
