import TickerInput from "../utils/TickerInput";
import UserHeader from "../utils/UserHeader";
import Logout from "../utils/Logout";
import Footer from "../components/Footer";
import TickerList from "../utils/TickerList";

const ProfileScreen: React.FC = () => {
  return (
    <div>
      <UserHeader />
      <div className="p-4">
        <h1 className="text-2xl font-bold pt-4 mb-5">My Watchlist:</h1>
        <TickerInput />
        {/* function to fetch and display tickers from db, which are processed from another function */}
        <TickerList />{" "}
      </div>
      <Logout />
      <Footer />
    </div>
  );
};

export default ProfileScreen;
