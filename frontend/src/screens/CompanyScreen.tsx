import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ProfileNews from "../components/ProfileNews";
import UserHeader from "../utils/UserHeader";
import Footer from "../components/Footer";
import FinancialGraph from "../components/FinancialGraph";
import BalanceSheet from "../slices/BalanceSheet";
import CashFlowSheet from "../slices/CashFlowSheet";
import TickerAdd from "../utils/TickerAdd";

const GET_COMPANY_OVERVIEW = gql`
  query GetCompanyOverview($symbol: String!) {
    getCompanyOverview(symbol: $symbol) {
      Symbol
      AssetType
      Name
      Description
      Currency
      Country
      Sector
      Industry
    }
  }
`;

interface CompanyScreenProps {}

const CompanyScreen: React.FC<CompanyScreenProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract symbol from the URL
  const { symbol } = useParams<{ symbol: string }>();

  const handleAddTicker = () => {
    TickerAdd(symbol);
  };

  // Fetch company overview data
  const { data, loading, error } = useQuery(GET_COMPANY_OVERVIEW, {
    variables: { symbol: symbol },
  });

  const companyData = data?.getCompanyOverview;

  // Define fullText and shortText based on the fetched description
  const fullText = companyData?.Description || "";
  const shortText = `${fullText.substring(0, 500)}...`;

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading company data: {error.message}</p>;

  return (
    <div>
      <UserHeader />
      <div className="max-w p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 space-y-4">
            <div className="relative flex items-center space-x-2">
              <h1 className="text-3xl font-bold text-gray-800">
                Ticker: {companyData?.Symbol || symbol}
              </h1>
              <div className="relative group">
                <svg
                  onClick={handleAddTicker}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer transition duration-300 ease-in-out transform group-hover:scale-110"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="absolute bottom-full mb-2 hidden group-hover:flex justify-center items-center w-auto min-w-max px-2 py-1 text-xs text-white bg-blue-500 rounded-md shadow-lg transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  Add to Wishlist
                </span>
              </div>
            </div>

            <p className="font-semibold">
              Asset Type: {companyData?.AssetType}
            </p>
            <p className="text-gray-600">Name: {companyData?.Name}</p>
            <p className="text-gray-600">Sector: {companyData?.Sector}</p>
            <p className="text-gray-600">Industry: {companyData?.Industry}</p>
            <p className="text-gray-600">Country: {companyData?.Country}</p>
            <p className="text-gray-600">Currency: {companyData?.Currency}</p>
            <div>
              <p className="text-gray-600">
                {isExpanded ? fullText : shortText}
                {!isExpanded && (
                  <span
                    className="text-blue-600 cursor-pointer"
                    onClick={() => setIsExpanded(true)}
                  >
                    [...read more]
                  </span>
                )}
                {isExpanded && (
                  <span
                    className="text-blue-600 cursor-pointer"
                    onClick={() => setIsExpanded(false)}
                  >
                    [...read less]
                  </span>
                )}
              </p>
            </div>
            {symbol && <ProfileNews ticker={symbol} />}
          </div>
          <div className="col-span-1">
            {symbol && <FinancialGraph ticker={symbol} />}
            {symbol && <BalanceSheet symbol={symbol} />}
            {symbol && <CashFlowSheet symbol={symbol} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyScreen;
