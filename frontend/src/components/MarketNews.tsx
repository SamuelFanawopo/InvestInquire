import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

// Define the GraphQL query
const GET_MARKET_NEWS = gql`
  query GetMarketNews {
    marketNews(limit: 4) {
      title
      url
      bannerImage
    }
  }
`;

// Define the props for the NewsItem
interface NewsItem {
  bannerImage: string;
  title: string;
  url: string;
}

// Define the MarketNews component
const MarketNews: React.FC = () => {
  const { loading, error, data } = useQuery(GET_MARKET_NEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // Extract newsItems from data
  const newsItems: NewsItem[] = data.marketNews;

  return (
    <div className="flex flex-col items-center w-full ml-2">
      <h1 className="font-bold text-3xl text-center my-6">
        Latest Financial News
      </h1>
      {/* First news item taking up the full width */}
      {newsItems.length > 0 && (
        <div className="w-full mb-3">
          <a href={newsItems[0].url} className="block">
            <h2 className="font-bold text-xl mb-5 text-center">
              {newsItems[0].title}
            </h2>
            <img
              src={newsItems[0].bannerImage}
              alt={newsItems[0].title}
              className="w-full rounded-md mb-5"
            />
          </a>
        </div>
      )}
      {/* Other news items in a responsive grid */}
      {newsItems.length > 1 && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {newsItems.slice(1).map((item, index) => (
            <div key={index}>
              <a href={item.url} className="block">
                <h2 className="font-bold text-lg">{item.title}</h2>
                <img
                  src={item.bannerImage}
                  alt={item.title}
                  className="w-full rounded-md"
                />
              </a>
            </div>
          ))}
        </div>
      )}
      <div className="w-full flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-6 transition duration-300 mt-6">
          More News
        </button>
      </div>
    </div>
  );
};

export default MarketNews;
