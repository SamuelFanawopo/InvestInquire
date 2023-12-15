import React from "react";

interface MarketTimesProps {
  marketOpenTime: string;
  marketCloseTime: string;
  MarketOpen: boolean;
}

const MarketTimes: React.FC<MarketTimesProps> = ({
  marketOpenTime,
  marketCloseTime,
  MarketOpen,
}) => {
  return (
    <div>
      <h3>Market Times</h3>
      <p>Market Open: {marketOpenTime}</p>
      <p>Market Close: {marketCloseTime}</p>
      <p>Market Open: {MarketOpen ? "Open" : "Closed"}</p>
    </div>
  );
};

export default MarketTimes;
