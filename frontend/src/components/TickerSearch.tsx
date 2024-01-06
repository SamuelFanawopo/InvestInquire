import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery, gql } from "@apollo/client";

// GraphQL query
const SEARCH_TICKERS_QUERY = gql`
  query SearchTickers($input: String!) {
    searchTickers(input: $input) {
      symbol
    }
  }
`;

// Type for the ticker data
interface TickerData {
  searchTickers: {
    symbol: string;
  }[];
}

// Type for the query variables
interface TickerVars {
  input: string;
}

const TickerSearch: React.FC = () => {
  const [ticker, setTicker] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  // Apollo Client useLazyQuery hook
  const [executeSearch, { loading }] = useLazyQuery<TickerData, TickerVars>(
    SEARCH_TICKERS_QUERY,
    {
      onCompleted: (data) => {
        setSuggestions(data.searchTickers.map((ticker) => ticker.symbol));
      },
    },
  );

  // Custom debounce function
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
      executeSearch({ variables: { input } });
    } else {
      setSuggestions([]);
    }
  };

  // Debounced version of updateSuggestions
  const debouncedUpdateSuggestions = debounce(updateSuggestions, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTicker = e.target.value;
    setTicker(newTicker);
    debouncedUpdateSuggestions(newTicker);
  };

  const handleSuggestionClick = (symbol: string): void => {
    setTicker(symbol);
    navigate(`/company/${symbol}`);
  };

  const handleButtonClick = (): void => {
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
      {loading ? (
        <div>Loading...</div>
      ) : (
        suggestions.length > 0 && (
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
        )
      )}
    </div>
  );
};

export default TickerSearch;
