import React from "react";
import MarketNews from "../components/MarketNews";
import MarketInfo from "../components/MarketInfo";
import MarketTimes from "../components/MarketTimes";
import ExchangeRate from "../components/ExchangeRate";

interface DashboardScreenProps {}

const DashboardScreen: React.FC<DashboardScreenProps> = () => {
  return (
    <>
      <MarketNews />
      <MarketInfo />
      <MarketTimes
        marketOpenTime="6AM GMT"
        marketCloseTime="6PM GMT"
        MarketOpen={true}
      />
      <ExchangeRate currencyFrom="Bitcoin" currencyTo="GBP" />
    </>
  );
};

export default DashboardScreen;
