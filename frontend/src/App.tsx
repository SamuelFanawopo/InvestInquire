import DashboardScreen from "./screens/DashboardScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileScreen from "./screens/ProfileScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import LatestNewsScreen from "./screens/LatestNewsScreen";
import CompanyScreen from "./screens/CompanyScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/register" element={<RegistrationScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/news" element={<LatestNewsScreen />} />
          <Route
            path="/company/:symbol"
            element={<CompanyScreen companyId="IBM" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
