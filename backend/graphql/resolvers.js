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

    getCompanyOverview: async (_, { symbol }) => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`,
        );

        // Return the response data directly, as it already matches the expected structure
        return response.data;
      } catch (error) {
        console.error("Error fetching company overview:", error);
        throw new Error("Failed to fetch company overview");
      }
    },

    searchTickers: async (_, { input }) => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=${apiKey}`,
        );

        // Extract and format the relevant data from the response
        const matches = response.data.bestMatches.map((match) => ({
          symbol: match["1. symbol"],
          name: match["2. name"],
          type: match["3. type"],
          region: match["4. region"],
          marketOpen: match["5. marketOpen"],
          marketClose: match["6. marketClose"],
          timezone: match["7. timezone"],
          currency: match["8. currency"],
          matchScore: parseFloat(match["9. matchScore"]),
        }));

        return matches;
      } catch (error) {
        console.error("Error fetching ticker search results:", error);
        throw new Error("Failed to fetch ticker search results");
      }
    },

    cashFlow: async (_, { symbol }) => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      const url = `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${symbol}&apikey=${apiKey}`;

      try {
        const response = await axios.get(url);
        const cashFlows = response.data.annualReports;
        return cashFlows.length > 0 ? cashFlows[0] : null;
      } catch (error) {
        console.error("Error fetching cash flow data:", error);
        throw new Error("Failed to fetch cash flow data");
      }
    },

    getRecentStockData: async (_, { ticker }) => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data["Time Series (Daily)"];

        // Get the last three entries
        return Object.entries(data)
          .slice(0, 3)
          .map(([date, stockInfo]) => ({
            date,
            open: parseFloat(stockInfo["1. open"]),
            high: parseFloat(stockInfo["2. high"]),
            low: parseFloat(stockInfo["3. low"]),
            close: parseFloat(stockInfo["4. close"]),
            volume: parseInt(stockInfo["5. volume"]),
          }));
      } catch (error) {
        console.error("Error fetching stock data:", error);
        throw new Error("Failed to fetch stock data");
      }
    },

    getStockData: async (_, { ticker, days }) => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${apiKey}`;
      const response = await axios.get(url);
      const data = response.data["Time Series (Daily)"];

      // Process and return the last 'days' days of data
      return Object.entries(data)
        .slice(0, days)
        .map(([date, value]) => ({
          date,
          open: parseFloat(value["1. open"]),
          high: parseFloat(value["2. high"]),
          low: parseFloat(value["3. low"]),
          close: parseFloat(value["4. close"]),
          volume: parseInt(value["5. volume"]),
        }));
    },

    balanceSheet: async (_, { symbol }) => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY; // Ensure the API key is stored in .env
      const url = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${apiKey}`;

      try {
        const response = await axios.get(url);
        const balanceSheets = response.data.annualReports;

        // Return the first entry (most recent balance sheet)
        return balanceSheets.length > 0 ? balanceSheets[0] : null;
      } catch (error) {
        console.error("Error fetching balance sheet data:", error);
        throw new Error("Failed to fetch balance sheet data");
      }
    },

    profileNews: async (_, { tickers, limit }) => {
      const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
      const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${tickers}&apikey=${apiKey}`;
      const response = await axios.get(url);
      let profileNewsItems = response.data.feed.map((item) => ({
        title: item.title,
        url: item.url,
        bannerImage: item.banner_image,
      }));
      if (limit) {
        profileNewsItems = profileNewsItems.slice(0, limit);
      }
      return profileNewsItems;
    },
  },
};
