// TickerSearch component
import React, { useState } from "react";

const TickerSearch = () => {
  const [ticker, setTicker] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
  };

  return (
    <div className="flex">
      <input
        className="border-gray-300 border-2 rounded-lg py-2 px-4 w-full max-w-xs"
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter ticker symbol"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-6 transition duration-300 ml-2"
      >
        Search
      </button>
    </div>
  );
};

export default TickerSearch;
