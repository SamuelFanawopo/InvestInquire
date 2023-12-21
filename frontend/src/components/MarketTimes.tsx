import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_MARKET_STATUS = gql`
  query GetMarketStatus {
    marketStatus {
      marketType
      region
      primaryExchanges
      localOpen
      localClose
      currentStatus
      notes
    }
  }
`;

interface MarketStatus {
  marketType: string;
  region: string;
  primaryExchanges: string;
  localOpen: string;
  localClose: string;
  currentStatus: string;
  notes?: string;
}

const MarketTimes: React.FC = () => {
  const { loading, error, data } = useQuery(GET_MARKET_STATUS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const marketStatuses: MarketStatus[] = data?.marketStatus;

  const marketTimeReport = (status: MarketStatus, key: number) => (
    <div key={key} className="p-4 border rounded shadow-md ml-2">
      <p className="font-semibold">
        Market Type: <span className="font-normal">{status.marketType}</span>
      </p>
      <p className="font-semibold">
        Region: <span className="font-normal">{status.region}</span>
      </p>
      <p className="font-semibold">
        Primary Exchanges:{" "}
        <span className="font-normal">{status.primaryExchanges}</span>
      </p>
      <p className="font-semibold">
        Local Open Time: <span className="font-normal">{status.localOpen}</span>
      </p>
      <p className="font-semibold">
        Local Close Time:{" "}
        <span className="font-normal">{status.localClose}</span>
      </p>
      <p className="font-semibold">
        Current Status:{" "}
        <span className="font-normal">{status.currentStatus}</span>
      </p>
      {status.notes && (
        <p className="font-semibold">
          Notes: <span className="font-normal">{status.notes}</span>
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
        {marketStatuses?.map((status, index) =>
          marketTimeReport(status, index),
        )}
      </div>
    </div>
  );
};

export default MarketTimes;
