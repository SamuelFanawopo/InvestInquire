import React from "react";

interface WatchListProps {
  items: string[]; // Assuming the watchlist items are strings (e.g., ticker symbols)
  // You can expand this with more detailed item types if necessary
}

const WatchList: React.FC<WatchListProps> = ({ items }) => {
  return (
    <div>
      <h1>WatchList</h1>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Your watchlist is empty.</p>
      )}
    </div>
  );
};

export default WatchList;
