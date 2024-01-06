import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TickerSearch: React.FC = () => {
  const [ticker, setTicker] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  // Custom debounce function with TypeScript typings
  const debounce = <F extends (...args: any[]) => any>(
    func: F,
    delay: number,
  ) => {
    let debounceTimer: NodeJS.Timeout;
    return function (...args: Parameters<F>) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func(...args), delay);
    } as F;
  };

  const updateSuggestions = (input: string) => {
    if (input.length >= 2) {
      // Replace this logic with your actual GraphQL query or API call
      setSuggestions(["AAPL", "MSFT", "GOOGL"]);
    } else {
      setSuggestions([]);
    }
  };

  // Debounced version of updateSuggestions
  const debouncedUpdateSuggestions = debounce(updateSuggestions, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTicker = e.target.value;
    console.log("Input Changed:", newTicker); // Debug log
    setTicker(newTicker);
    debouncedUpdateSuggestions(newTicker);
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
    <div className="w-full max-w-md mx-auto relative">
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
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded-lg w-full z-10 shadow-md overflow-hidden mt-1">
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
