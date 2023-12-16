import React from "react";
import MarketNews from "../components/MarketNews";
import MarketInfo from "../components/MarketInfo";
import MarketTimes from "../components/MarketTimes";
import ExchangeRate from "../components/ExchangeRate";

interface DashboardScreenProps {}

const DashboardScreen: React.FC<DashboardScreenProps> = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Left Column Container */}
      <div className="flex flex-col items-start col-span-1">
        {/* MarketNews with a constrained width */}
        <div className="w-full max-w-1/2">
          <MarketNews
            image1="https://g.foolcdn.com/editorial/images/758207/person-holding-phone-with-paypal-app-1_paypal.jpg"
            image2="https://g.foolcdn.com/editorial/images/758207/person-holding-phone-with-paypal-app-1_paypal.jpg"
            image3="https://g.foolcdn.com/editorial/images/758207/person-holding-phone-with-paypal-app-1_paypal.jpg"
            image4="https://g.foolcdn.com/editorial/images/758207/person-holding-phone-with-paypal-app-1_paypal.jpg"
            title="PayPal Is a Smart Stock …, but There's 1 Warning"
            timePublished="1 hour ago"
            source="https://www.fool.com/investing/2023/12/16/paypal-smart-stock-to-buy-on-the-dip-but-1-warning/"
          />
        </div>
        {/* MarketTimes with a constrained width */}
        <div className="w-full max-w-1/2">
          <MarketTimes
            marketType="Equity"
            region="United States"
            primaryExchanges="NASDAQ, NYSE, AMEX, BATS"
            localOpen="09:30"
            localClose="16:15"
            currentStatus="closed"
            notes=""
          />
        </div>
      </div>

      {/* Right Column Container */}
      <div className="col-span-1">
        {/* MarketInfo and ExchangeRate in the right column */}
        <ExchangeRate />
        <MarketInfo />
      </div>
    </div>
  );
};

export default DashboardScreen;
