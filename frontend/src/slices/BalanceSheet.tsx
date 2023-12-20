import { useState } from "react";

type BalanceSheetData = {
  [key: string]: string | number;
};

const BalanceSheet: React.FC = () => {
  const [showTable, setShowTable] = useState<boolean>(false);

  const balanceSheetData: BalanceSheetData = {
    fiscalDateEnding: "2022-12-31",
    reportedCurrency: "USD",
    totalAssets: "127243000000",
    totalCurrentAssets: "29118000000",
    cashAndCashEquivalentsAtCarryingValue: "7886000000",
    cashAndShortTermInvestments: "7886000000",
    inventory: "1552000000",
    currentNetReceivables: "14209000000",
    totalNonCurrentAssets: "96874000000",
    propertyPlantEquipment: "5334000000",
    accumulatedDepreciationAmortizationPPE: "13361000000",
    intangibleAssets: "67133000000",
    intangibleAssetsExcludingGoodwill: "11184000000",
    goodwill: "55949000000",
    investments: "None",
    longTermInvestments: "142000000",
    shortTermInvestments: "852000000",
    otherCurrentAssets: "2610000000",
    otherNonCurrentAssets: "None",
    totalLiabilities: "105222000000",
    totalCurrentLiabilities: "31505000000",
    currentAccountsPayable: "4051000000",
    deferredRevenue: "15531000000",
    currentDebt: "9511000000",
    shortTermDebt: "4760000000",
    totalNonCurrentLiabilities: "83414000000",
    capitalLeaseObligations: "164000000",
    longTermDebt: "47190000000",
    currentLongTermDebt: "4676000000",
    longTermDebtNoncurrent: "46189000000",
    shortLongTermDebtTotal: "107759000000",
    otherCurrentLiabilities: "9788000000",
    otherNonCurrentLiabilities: "12243000000",
    totalShareholderEquity: "21944000000",
    treasuryStock: "169484000000",
    retainedEarnings: "149825000000",
    commonStock: "58343000000",
    commonStockSharesOutstanding: "906091977",
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
            {Object.entries(balanceSheetData).map(([key, value], index) => (
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
          {!showTable ? "View Balance Sheet" : "Close Balance Sheet"}
        </button>
      </div>
      {showTable && renderTable()}
    </div>
  );
};

export default BalanceSheet;
