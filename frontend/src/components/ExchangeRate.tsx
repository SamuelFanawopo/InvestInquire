import { useState } from "react";

const ExchangeRate = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [conversionResult, setConversionResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    try {
      setLoading(true);
      const apiKey = import.meta.env.VITE_REACT_APP_ALPHA_VANTAGE_API_KEY;
      const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data["Realtime Currency Exchange Rate"]) {
        const rate =
          data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        setConversionResult(`1 ${fromCurrency} = ${rate} ${toCurrency}`);
      } else {
        setConversionResult("Unable to find exchange rate.");
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      setConversionResult("Error fetching exchange rate.");
    } finally {
      setLoading(false);
    }
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
          onChange={(e) => setFromCurrency(e.target.value.toUpperCase())}
          placeholder="From Currency (e.g., USD)"
          className="border-gray-300 border-2 rounded-lg py-2 px-4 mb-3 w-3/4"
        />
        <input
          type="text"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value.toUpperCase())}
          placeholder="To Currency (e.g., JPY)"
          className="border-gray-300 border-2 rounded-lg py-2 px-4 mb-4 w-3/4"
        />
        <button
          onClick={handleConvert}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-6 transition duration-300"
        >
          {loading ? "Converting..." : "Convert"}
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
