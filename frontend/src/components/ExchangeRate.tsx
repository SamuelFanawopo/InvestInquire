import React from "react";

interface ExchangeRateProps {
  currencyFrom: string;
  currencyTo: string;
}

// Define the ExchangeRate component
const ExchangeRate: React.FC<ExchangeRateProps> = ({
  currencyFrom,
  currencyTo,
}) => {
  // Component logic goes here

  return (
    <div>
      <h1>Exchange Rate Component</h1>
      <input type="text" value={currencyFrom} />
      <input type="text" value={currencyTo} />
    </div>
  );
};

export default ExchangeRate;
