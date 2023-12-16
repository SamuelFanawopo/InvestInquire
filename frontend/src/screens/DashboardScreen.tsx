import React from "react";
import MarketNews from "../components/MarketNews";
import MarketInfo from "../components/MarketInfo";
import MarketTimes from "../components/MarketTimes";
import ExchangeRate from "../components/ExchangeRate";

interface DashboardScreenProps {}

const DashboardScreen: React.FC<DashboardScreenProps> = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Grid container with two columns */}
      <div className="col-span-1 max-w-1/2">
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
      <div className="col-span-1">
        <MarketInfo />
        <MarketTimes
          marketOpenTime="6AM GMT"
          marketCloseTime="6PM GMT"
          MarketOpen={true}
        />
        <ExchangeRate currencyFrom="Bitcoin" currencyTo="GBP" />
      </div>
    </div>
  );
};

export default DashboardScreen;
