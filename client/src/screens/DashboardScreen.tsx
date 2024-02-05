import UserHeader from "../utils/UserHeader";
import Footer from "../components/Footer";
import MarketNews from "../components/MarketNews";
import MarketInfo from "../components/MarketInfo";
import MarketTimes from "../components/MarketTimes";
import ExchangeRate from "../components/ExchangeRate";

interface DashboardScreenProps {}

const DashboardScreen: React.FC<DashboardScreenProps> = () => {
  return (
    <div>
      {/* Use the user information to display the name or handle guest users */}
      <UserHeader />
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column Container */}
        <div className="flex flex-col items-start col-span-1">
          <div className="w-full max-w-1/2">
            <MarketNews />
          </div>
          <div className="w-full max-w-1/2">
            <MarketTimes />
          </div>
        </div>

        {/* Right Column Container */}
        <div className="col-span-1">
          <ExchangeRate />
          <MarketInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardScreen;
