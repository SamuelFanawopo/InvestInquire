import { useState } from "react";

const ExchangeRate = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [conversionResult, setConversionResult] = useState<string | null>(null);

  const handleConvert = () => {
    // Logic to convert currency
    // For demonstration, I'm just setting a dummy value
    // In a real application, you would likely call an API here
    const result = `1 ${fromCurrency} = 1.23 ${toCurrency}`;
    setConversionResult(result);
  };

  return (
    <div className="p-4 mt-4 bg-white rounded-lg">
      <h1 className="text-center font-bold text-2xl mb-6">
        Exchange Rate for Digital and Physical Currencies
      </h1>
      <div className="flex flex-col items-center mb-6">
        <input
          type="text"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          placeholder="From Currency (e.g., USD)"
          className="border-gray-300 border-2 rounded-lg py-2 px-4 mb-3 w-3/4"
        />
        <input
          type="text"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          placeholder="To Currency (e.g., BTC)"
          className="border-gray-300 border-2 rounded-lg py-2 px-4 mb-4 w-3/4"
        />
        <button
          onClick={handleConvert}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-6 transition duration-300"
        >
          Convert
        </button>
      </div>
      {conversionResult && (
        <div className="text-center mt-4 font-semibold">
          <p>{conversionResult}</p>
        </div>
      )}
    </div>
  );
};

export default ExchangeRate;
