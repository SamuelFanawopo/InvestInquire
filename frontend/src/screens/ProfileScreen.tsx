import { gql, useQuery } from "@apollo/client";
import TickerInput from "../utils/TickerInput";
import UserHeader from "../utils/UserHeader";
import Logout from "../utils/Logout";
import Footer from "../components/Footer";

// Define the GraphQL query
const GET_RECENT_STOCK_DATA = gql`
  query GetRecentStockData($ticker: String!) {
    getRecentStockData(ticker: $ticker) {
      open
      close
    }
  }
`;

const ProfileScreen: React.FC = () => {
  return (
    <div>
      <UserHeader />
      <div className="p-4">
        <h1 className="text-2xl font-bold pt-4 mb-5">My Watchlist:</h1>
        <TickerInput />
      </div>
      <Logout />
      <Footer />
    </div>
  );
};

export default ProfileScreen;
