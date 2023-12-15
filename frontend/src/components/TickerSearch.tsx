import React, { useState } from "react";
import "../index.css";
// Define the props for the component, if needed
interface TickerSearchProps {
  // Props can include a callback function for when a search is performed
  onSearch?: (ticker: string) => void;
  searchBoxStyling: string;
  textStyling: string;
}

// Define the TickerSearch component
const TickerSearch: React.FC<TickerSearchProps> = ({
  onSearch,
  searchBoxStyling,
  textStyling,
}) => {
  const [ticker, setTicker] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(ticker);
    }
  };

  return (
    <div>
      <input
        className={searchBoxStyling}
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter ticker symbol"
      />
      <button onClick={handleSearch} className={textStyling}>
        Search
      </button>
    </div>
  );
};

export default TickerSearch;
