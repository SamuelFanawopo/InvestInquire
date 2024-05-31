import React, { useState, useCallback } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InvestmentOverview from "../../components/InvestmentOverview";
import StockOverview from "./StockOverview";
import NewsByTicker from "../CompanyProfile/NewsByTicker";

const DashboardPage: React.FC = () => {
  const [tickers, setTickers] = useState<string[]>([]);

  const handleTickersChange = useCallback((newTickers: string[]) => {
    setTickers(newTickers);
  }, []);

  return (
    <>
      <div>
        <Header />
        <InvestmentOverview />
        <StockOverview onTickersChange={handleTickersChange} />
        {tickers.length > 0 && <NewsByTicker tickers={tickers} />}
        <Footer />
      </div>
    </>
  );
};

export default DashboardPage;
