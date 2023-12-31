import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TickerSearch: React.FC = () => {
  const [ticker, setTicker] = useState<string>("");
  const navigate = useNavigate();

  const suggestions: string[] = ticker ? ["AAPL", "MSFT", "GOOGL"] : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("Input Changed:", e.target.value); // Debug log
    setTicker(e.target.value);
  };

  const handleSuggestionClick = (symbol: string): void => {
    console.log("Suggestion Clicked:", symbol); // Debug log
    setTicker(symbol);
    navigate(`/company/${symbol}`);
  };

  const handleButtonClick = (): void => {
    console.log("Button Clicked:", ticker); // Debug log
    if (ticker) {
      navigate(`/company/${ticker}`);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex">
        <input
          className="border-gray-300 border-2 rounded-lg py-2 px-4 w-full"
          type="text"
          value={ticker}
          onChange={handleInputChange}
          placeholder="Enter ticker symbol"
        />
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg py-2 px-6 ml-2 transition duration-300"
        >
          Search
        </button>
      </div>
      {ticker && (
        <ul className="bg-white border border-gray-300 rounded-lg w-full z-10 shadow-md overflow-hidden">
          {suggestions.map((symbol, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 p-2"
              onClick={() => handleSuggestionClick(symbol)}
            >
              {symbol}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TickerSearch;
