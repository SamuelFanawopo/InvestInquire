import Header from "../../components/Header";
import ProfileDetails from "./ProfileDetails";
import LogoutSection from "./LogoutSection";
import Footer from "../../components/Footer";

const SettingsPage = () => {
  return (
    <div>
      <Header />
      <ProfileDetails />
      <LogoutSection />
      <Footer />
    </div>
  );
};

export default SettingsPage;
