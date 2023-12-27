import axios from "axios";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const resolvers = {
  Query: {
    marketNews: async (_, { limit }) => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${apiKey}`,
      );
      let newsItems = response.data.feed.map((item) => ({
        title: item.title,
        url: item.url,
        timePublished: item.published,
        bannerImage: item.banner_image,
      }));
      if (limit) {
        newsItems = newsItems.slice(0, limit);
      }
      return newsItems;
    },
    marketStatus: async () => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=${apiKey}`,
      );

      // Map over the 'markets' array in the response
      return response.data.markets.map((item) => ({
        marketType: item.market_type,
        region: item.region,
        primaryExchanges: item.primary_exchanges,
        localOpen: item.local_open,
        localClose: item.local_close,
        currentStatus: item.current_status,
        notes: item.notes || "",
      }));
    },
    topGainers: async () => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`,
      );
      return response.data.top_gainers.slice(0, 12);
    },
    topLosers: async () => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`,
      );
      return response.data.top_losers.slice(0, 12);
    },
    mostActivelyTraded: async () => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`,
      );
      return response.data.most_actively_traded.slice(0, 12);
    },
    profileNews: async (_, { limit }) => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=IBM&apikey=${apiKey}`,
      );
      let profileNewsItems = response.data.feed.map((item) => ({
        title: item.title,
        url: item.url,
        timePublished: item.published,
        bannerImage: item.banner_image,
      }));
      if (limit) {
        profileNewsItems = profileNewsItems.slice(0, limit);
      }
      return profileNewsItems;
    },
  },
};
