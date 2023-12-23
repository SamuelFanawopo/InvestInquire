import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MarketNews from "../components/MarketNews";
import MarketInfo from "../components/MarketInfo";
import MarketTimes from "../components/MarketTimes";
import ExchangeRate from "../components/ExchangeRate";

interface DashboardScreenProps {}

const DashboardScreen: React.FC<DashboardScreenProps> = () => {
  return (
    <div>
      <Header name="Guest" />
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column Container */}
        <div className="flex flex-col items-start col-span-1">
          {/* MarketNews with a constrained width */}
          <div className="w-full max-w-1/2">
            <MarketNews />
          </div>
          {/* MarketTimes with a constrained width */}
          <div className="w-full max-w-1/2">
            <MarketTimes />
          </div>
        </div>

        {/* Right Column Container */}
        <div className="col-span-1">
          {/* MarketInfo and ExchangeRate in the right column */}
          <ExchangeRate />
          <MarketInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardScreen;
