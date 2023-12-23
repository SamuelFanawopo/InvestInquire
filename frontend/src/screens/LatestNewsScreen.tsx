import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

// Define the GraphQL query
const GET_MARKET_NEWS = gql`
  query GetMarketNews {
    marketNews(limit: 12) {
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

const LatestNewsScreen: React.FC = () => {
  const { loading, error, data } = useQuery(GET_MARKET_NEWS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const newsItems: NewsItem[] = data.marketNews;

  return (
    <div>
      {" "}
      <Header name="Guest" />{" "}
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center my-6">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <a href={item.url}>
                <img
                  src={item.bannerImage}
                  alt={item.title}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">{item.title}</h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LatestNewsScreen;
