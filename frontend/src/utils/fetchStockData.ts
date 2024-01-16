import { gql, useQuery } from "@apollo/client";

// Define the GraphQL query
const GET_RECENT_STOCK_DATA = gql`
  query GetRecentStockData($symbol: String!) {
    getRecentStockData(symbol: $symbol) {
      date
      open
      close
    }
  }
`;

// Function to fetch stock data
export const fetchStockData = async (symbol) => {
  try {
    // Execute the GraphQL query
    const { data, error } = useQuery(GET_RECENT_STOCK_DATA, {
      variables: { symbol },
    });

    if (error) {
      console.error("Error fetching stock data:", error);
      throw new Error("Failed to fetch stock data");
    }

    // Return the fetched stock data
    return data.getRecentStockData;
  } catch (error) {
    console.error("Error in fetchStockData function:", error);
    throw error;
  }
};
