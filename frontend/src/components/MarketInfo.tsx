import { useQuery, gql } from "@apollo/client";

interface Stock {
  ticker: string;
  price: number;
  change_amount: number;
  change_percentage: number;
  volume: number;
}

// GraphQL Queries
const GET_TOP_GAINERS = gql`
  query GetTopGainers {
    topGainers {
      ticker
      price
      change_amount
      change_percentage
      volume
    }
  }
`;

const GET_TOP_LOSERS = gql`
  query GetTopLosers {
    topLosers {
      ticker
      price
      change_amount
      change_percentage
      volume
    }
  }
`;

const GET_MOST_ACTIVE = gql`
  query GetMostActive {
    mostActivelyTraded {
      ticker
      price
      change_amount
      change_percentage
      volume
    }
  }
`;

// Single MarketInfo Component
const MarketInfo = () => {
  const {
    data: gainersData,
    loading: loadingGainers,
    error: errorGainers,
  } = useQuery(GET_TOP_GAINERS);
  const {
    data: losersData,
    loading: loadingLosers,
    error: errorLosers,
  } = useQuery(GET_TOP_LOSERS);
  const {
    data: activeData,
    loading: loadingActive,
    error: errorActive,
  } = useQuery(GET_MOST_ACTIVE);

  // Function to render stock information

  // Function to render stock information
  const renderStocks = (stocks: Stock[], title: string) => (
    <section className="mt-6">
      <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stocks.map((stock) => (
          <div
            key={stock.ticker}
            className="mb-4 p-4 border border-gray-200 rounded shadow-md"
          >
            <p>
              <span className="font-semibold">Ticker:</span> {stock.ticker}
            </p>
            <p>
              <span className="font-semibold">Price:</span> {stock.price}
            </p>
            <p>
              <span className="font-semibold">Change Amount:</span>{" "}
              {stock.change_amount}
            </p>
            <p>
              <span className="font-semibold">Change Percent:</span>{" "}
              {stock.change_percentage}
            </p>
            <p>
              <span className="font-semibold">Volume:</span> {stock.volume}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

  if (loadingGainers || loadingLosers || loadingActive)
    return <p>Loading...</p>;
  if (errorGainers || errorLosers || errorActive)
    return <p>Error loading data</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold mb-4">
        Stock Market Overview
      </h1>

      {renderStocks(gainersData.topGainers, "Top Gainers Today")}
      {renderStocks(losersData.topLosers, "Top Losers Today")}
      {renderStocks(
        activeData.mostActivelyTraded,
        "Most Actively Traded Today",
      )}
    </div>
  );
};

export default MarketInfo;
