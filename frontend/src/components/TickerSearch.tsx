import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TickerSearch = () => {
  const [ticker, setTicker] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();

  // Fixed data for demonstration purposes
  const suggestions = ticker ? ["AAPL", "MSFT", "GOOGL"] : [];

  useEffect(() => {
    if (!ticker) {
      setIsTyping(false);
      return;
    }

    setIsLoading(true);
    setIsTyping(true);

    // Simulate an API call with a delay
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [ticker]);

  const handleSearch = (symbol: string) => {
    if (symbol) {
      navigate(`/company/${symbol}`);
    }
  };

  const handleButtonClick = () => {
    if (isTyping) {
      setTicker("");
      setIsTyping(false);
    } else {
      if (ticker) {
        handleSearch(ticker);
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex">
        <input
          className="border-gray-300 border-2 rounded-lg py-2 px-4 w-full"
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="Enter ticker symbol"
        />
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg py-2 px-6 ml-2 transition duration-300"
        >
          {isTyping ? "Cancel" : "Search"}
        </button>
      </div>
      {isLoading && (
        <div className="text-sm text-gray-600 w-full mt-2">Loading...</div>
      )}
      {!isLoading && isTyping && (
        <ul className="bg-white border border-gray-300 rounded-lg w-full z-10 shadow-md overflow-hidden">
          {suggestions.map((symbol, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 p-2"
              onClick={() => {
                setTicker(symbol);
                setIsTyping(false);
                handleSearch(symbol);
              }}
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
