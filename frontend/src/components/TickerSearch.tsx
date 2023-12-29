import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TickerSearch = () => {
  const [ticker, setTicker] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]); // Specify the type of suggestions
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (ticker) {
        setIsLoading(true);
        fetchSuggestions(ticker).then((data) => {
          setSuggestions(data);
          setIsLoading(false);
        });
      } else {
        setSuggestions([]);
      }
    }, 500); // 500 ms delay for debouncing

    return () => clearTimeout(delayDebounce);
  }, [ticker]);

  const handleSearch = (symbol: string) => {
    navigate(`/company/${symbol}`);
  };

  const fetchSuggestions = async (query: string) => {
    // Implement the logic to fetch suggestions
    return ["AAPL", "MSFT", "GOOGL"]; // Dummy response for now
  };

  return (
    <div className="relative w-full max-w-md">
      {" "}
      {/* Parent div with relative positioning */}
      <div className="flex w-full">
        <input
          className="border-transparent rounded-t-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" // Updated classes
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="Enter ticker symbol"
        />
        <button
          onClick={() => handleSearch(ticker)}
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-r-lg py-2 px-6 transition duration-300" // Updated classes
        >
          Search
        </button>
      </div>
      {isLoading && (
        <div className="absolute text-sm text-gray-600 w-full mt-2">
          Loading...
        </div>
      )}
      {!isLoading && suggestions.length > 0 && (
        <ul className="absolute bg-white border border-transparent rounded-b-lg mt-1 w-full z-10 shadow-md">
          {" "}
          {/* Updated classes */}
          {suggestions.map((symbol, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-100 p-2 text-gray-800" // Updated classes
              onClick={() => handleSearch(symbol)}
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
