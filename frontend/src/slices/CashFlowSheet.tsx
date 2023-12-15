import React from "react";

// Define the structure for the cash flow data
interface CashFlowData {
  operatingActivities: number;
  investingActivities: number;
  financingActivities: number;
  netIncreaseInCash: number;
  // You can add additional fields as per your data model
}

interface CashFlowSheetProps {
  data: CashFlowData;
}

const CashFlowSheet: React.FC<CashFlowSheetProps> = ({ data }) => {
  // Add additional logic or computations if necessary

  return (
    <div>
      <h1>Cash Flow Statement</h1>
      <section>
        <h2>Operating Activities</h2>
        <p>${data.operatingActivities}</p>
      </section>

      <section>
        <h2>Investing Activities</h2>
        <p>${data.investingActivities}</p>
      </section>

      <section>
        <h2>Financing Activities</h2>
        <p>${data.financingActivities}</p>
      </section>

      <section>
        <h2>Net Increase in Cash</h2>
        <p>${data.netIncreaseInCash}</p>
      </section>
    </div>
  );
};

export default CashFlowSheet;
