import Header from "../components/Header";
import Footer from "../components/Footer";

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <div>
      <Header name="John Doe" />
      <Footer />
    </div>
  );
};

export default ProfileScreen;
