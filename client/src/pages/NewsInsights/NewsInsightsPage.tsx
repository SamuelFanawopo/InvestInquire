import Header from "../../components/Header";
import NewsHeading from "../Dashboard/NewsHeading";
import NewsContent from "../Dashboard/NewsContent";
import EconomicsCalendar from "../Dashboard/EconomicsCalendar";
import EarningsCalendar from "../Dashboard/EarningsCalendar";
import Footer from "../../components/Footer";

const NewsInsightsPage = () => {
  return (
    <div>
      <Header />
      <NewsHeading />
      <NewsContent />
      <EconomicsCalendar />
      <EarningsCalendar />
      <Footer />
    </div>
  );
};

export default NewsInsightsPage;
