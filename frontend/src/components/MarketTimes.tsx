import React from "react";

interface MarketTimesProps {
  marketType: string;
  region: string;
  primaryExchanges: string;
  localOpen: string;
  localClose: string;
  currentStatus: string;
  notes?: string;
}

const MarketTimes: React.FC<MarketTimesProps> = ({
  marketType,
  region,
  primaryExchanges,
  localOpen,
  localClose,
  currentStatus,
  notes,
}) => {
  // Assuming you have multiple market times to display,
  // you might want to map through an array of market data.
  // For this example, I'll just repeat the structure for demonstration.

  // Each market time report structured as a grid item
  const marketTimeReport = (key: number) => (
    <div key={key} className="p-4 border rounded shadow-md ml-2">
      <p className="font-semibold">
        Market Type: <span className="font-normal">{marketType}</span>
      </p>
      <p className="font-semibold">
        Region: <span className="font-normal">{region}</span>
      </p>
      <p className="font-semibold">
        Primary Exchanges:{" "}
        <span className="font-normal">{primaryExchanges}</span>
      </p>
      <p className="font-semibold">
        Local Open Time: <span className="font-normal">{localOpen}</span>
      </p>
      <p className="font-semibold">
        Local Close Time: <span className="font-normal">{localClose}</span>
      </p>
      <p className="font-semibold">
        Current Status: <span className="font-normal">{currentStatus}</span>
      </p>
      {notes && (
        <p className="font-semibold">
          Notes: <span className="font-normal">{notes}</span>
        </p>
      )}
    </div>
  );

  return (
    <div className="mt-5">
      <h1 className="font-bold text-center text-2xl mb-6">
        Global Market Open & Close Status
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {marketTimeReport(1)}
        {marketTimeReport(2)}
        {marketTimeReport(3)}
        {marketTimeReport(4)}
        {marketTimeReport(5)}
        {marketTimeReport(6)}
        {marketTimeReport(7)}
        {marketTimeReport(8)}
      </div>
    </div>
  );
};

export default MarketTimes;
