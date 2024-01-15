import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

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

const TickerInput: React.FC = () => {
  const [ticker, setTicker] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

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
    executeSearch({ variables: { input } });
  };

  // Debounced version of updateSuggestions
  const debouncedUpdateSuggestions = debounce(updateSuggestions, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTicker = e.target.value;
    setTicker(newTicker);
    debouncedUpdateSuggestions(newTicker);
  };

  return (
    <div className="mb-4 flex">
      <input
        type="text"
        value={ticker}
        onChange={handleInputChange}
        placeholder="Add Ticker Symbol"
        className="border rounded-md p-2 mr-2"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg py-2 px-4 ml-2 transition duration-300">
        Add to Watchlist
      </button>

      {loading ? (
        <div>Loading...</div>
      ) : (
        suggestions.length > 0 && (
          <ul className="absolute bg-white border border-gray-300 rounded-lg z-10 shadow-md overflow-hidden mt-1">
            {suggestions.map((symbol, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-gray-200 p-2"
                onClick={() => console.log(symbol)}
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

export default TickerInput;
