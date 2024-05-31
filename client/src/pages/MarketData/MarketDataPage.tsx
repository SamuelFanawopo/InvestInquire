import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TopGainers from "./TopGainers";
import DividendsCalendar from "./DividendsCalendar";
import TopLosers from "./TopLosers";
import MostActivelyTraded from "./MostActivelyTraded";
import SectorPerformance from "./SectorPerformance";
import Commodities from "./Commodities";
import Forex from "./Forex";
import EconomicIndicators from "./EconomicIndicators";

const MarketDataPage = () => {
  return (
    <div>
      <Header />
      <section className="mb-12 bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Market Overview
          </h1>
          <p className=" text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Explore our all-encompassing market data page featuring top gainers,
            losers, the most actively traded stocks, sector performance, and
            more. Dive into commodities, forex rates, key economic indicators,
            and view our upcoming dividends calendar to stay informed on all
            fronts.
          </p>
        </div>
      </section>
      <TopGainers />
      <TopLosers />
      <MostActivelyTraded />
      <SectorPerformance />
      <Commodities />
      <Forex />
      <EconomicIndicators />
      <DividendsCalendar />
      <Footer />
    </div>
  );
};

export default MarketDataPage;
