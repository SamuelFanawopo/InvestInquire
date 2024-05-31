import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import EconomicIndicatorModal from "./EconomicIndicatorModal";

const REAL_GDP_QUERY = gql`
  query RealGDP($page: Int!) {
    realGDP(page: $page) {
      date
      value
    }
  }
`;

const REAL_GDP_PER_CAPITA_QUERY = gql`
  query RealGDPPerCapita($page: Int!) {
    realGDPPerCapita(page: $page) {
      date
      value
    }
  }
`;

const INTEREST_RATE_QUERY = gql`
  query InterestRate($page: Int!) {
    interestRate(page: $page) {
      date
      value
    }
  }
`;

const INFLATION_QUERY = gql`
  query Inflation($page: Int!) {
    inflation(page: $page) {
      date
      value
    }
  }
`;

const indicators = [
  {
    name: "Real Gross Domestic Product",
    interval: "annual",
    unit: "billions of dollars",
    query: REAL_GDP_QUERY,
  },
  {
    name: "Real Gross Domestic Product per Capita",
    interval: "quarterly",
    unit: "chained 2012 dollars",
    query: REAL_GDP_PER_CAPITA_QUERY,
  },
  {
    name: "Effective Federal Funds Rate (Interest Rate)",
    interval: "monthly",
    unit: "percent",
    query: INTEREST_RATE_QUERY,
  },
  {
    name: "Inflation - US Consumer Prices",
    interval: "annual",
    unit: "percent",
    query: INFLATION_QUERY,
  },
];

const EconomicIndicators: React.FC = () => {
  const [openIndicator, setOpenIndicator] = useState<string | null>(null);

  const toggleIsOpen = (name: string) => {
    setOpenIndicator(openIndicator === name ? null : name);
  };

  const IndicatorCard: React.FC<{
    name: string;
    interval: string;
    unit: string;
    query: any;
    onViewHistoricalData: () => void;
  }> = ({ name, interval, unit, query, onViewHistoricalData }) => {
    const { data, loading, error } = useQuery(query, {
      variables: { page: 0 },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const firstDataPoint = data && data[Object.keys(data)[0]]?.[0];

    return (
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-l font-bold tracking-tight text-blue-800 dark:text-white">
          {name}
        </h5>
        <p className="font-normal dark:text-gray-400">
          <span className="font-semibold">Interval:</span> {interval}
        </p>
        <p className="font-normal dark:text-gray-400">
          <span className="font-semibold">Unit:</span> {unit}
        </p>
        {firstDataPoint && (
          <div className="mb-3">
            <p className="font-normal dark:text-gray-400">
              <span className="font-semibold">Date:</span> {firstDataPoint.date}
            </p>
            <p className="font-normal dark:text-gray-400">
              <span className="font-semibold">Value:</span>{" "}
              {firstDataPoint.value}
            </p>
          </div>
        )}
        <button
          onClick={onViewHistoricalData}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Historical Data
        </button>
      </div>
    );
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-12">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pb-16">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Economic Indicators
          </h1>
          <p className="mt-5 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Explore critical economic indicators including Real GDP, Real GDP
            per Capita, the Effective Federal Funds Rate, and Inflation. Each
            entry provides the date, measurement metric, and value. Click 'View
            Full Historical Data' to delve into detailed historical trends.
          </p>
        </div>
      </section>
      <div className="grid mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
        {indicators.map((indicator, index) => (
          <IndicatorCard
            key={index}
            name={indicator.name}
            interval={indicator.interval}
            unit={indicator.unit}
            query={indicator.query}
            onViewHistoricalData={() => toggleIsOpen(indicator.name)}
          />
        ))}
      </div>
      {openIndicator && (
        <EconomicIndicatorModal
          key={openIndicator}
          name={openIndicator}
          isOpen={!!openIndicator}
          onClose={() => setOpenIndicator(null)}
        />
      )}
    </>
  );
};

export default EconomicIndicators;
