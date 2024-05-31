import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import CompanyOverview from "./CompanyOverview";
import CompanyRatings from "./CompanyRatings";
import NewsByTicker from "./NewsByTicker";
import FinancialMetrics from "./FinancialMetrics";
import FinancialStatements from "./FinancialStatements";
import TechnicalAnalysis from "./TechnicalAnalysis";
import Footer from "../../components/Footer";

interface CompanyProfilePageParams {
  ticker: string;
}

const CompanyProfilePage: React.FC = () => {
  const { ticker } = useParams<
    keyof CompanyProfilePageParams
  >() as CompanyProfilePageParams;

  return (
    <>
      <div>
        <Header />
        <CompanyOverview />
        <FinancialMetrics />
        <TechnicalAnalysis ticker={ticker} />
        <FinancialStatements />
        <CompanyRatings />
        <NewsByTicker tickers={[ticker]} />
        <Footer />
      </div>
    </>
  );
};

export default CompanyProfilePage;
