import React from "react";

interface CashFlowSheetProps {
  ticker: string;
}

const CashFlowSheet: React.FC<CashFlowSheetProps> = ({ ticker }) => {
  // Add additional logic or computations if necessary

  return (
    <div>
      <h1>Cash Flow Statement</h1>
      <p>Ticker: {ticker}</p>
    </div>
  );
};

export default CashFlowSheet;
