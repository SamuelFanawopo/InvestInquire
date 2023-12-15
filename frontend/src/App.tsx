import Header from "./components/Header";
import Footer from "./components/Footer";
import DashboardScreen from "./screens/DashboardScreen";

const App = () => {
  return (
    <>
      <Header name="John Doe" />
      <DashboardScreen />
      <Footer />
    </>
  );
};

export default App;
