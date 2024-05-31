import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./services/apollo-client";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import CompanyProfilePage from "./pages/CompanyProfile/CompanyProfilePage";
import MarketDataPage from "./pages/MarketData/MarketDataPage";
import NewsInsightsPage from "./pages/NewsInsights/NewsInsightsPage";
import NotFoundPage from "./pages/ErrorPages/404";
import UnauthorizedPage from "./pages/ErrorPages/UnauthorizedPage";
import ServerErrorPage from "./pages/ErrorPages/ServerErrorPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import RequireAuth from "./services/RequireAuth";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <DashboardPage />
              </RequireAuth>
            }
          />
          <Route
            path="/company/:ticker"
            element={
              <RequireAuth>
                <CompanyProfilePage />
              </RequireAuth>
            }
          />
          <Route
            path="/market"
            element={
              <RequireAuth>
                <MarketDataPage />
              </RequireAuth>
            }
          />
          <Route
            path="/news"
            element={
              <RequireAuth>
                <NewsInsightsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/settings"
            element={
              <RequireAuth>
                <SettingsPage />
              </RequireAuth>
            }
          />
          <Route path="/401" element={<UnauthorizedPage />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
