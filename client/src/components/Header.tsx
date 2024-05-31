import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { gql, useLazyQuery } from "@apollo/client";
import Logo from "../assets/logo.png";

const TICKER_SEARCH = gql`
  query TickerSearch($ticker: String!, $limit: Int) {
    tickerSearch(ticker: $ticker, limit: $limit) {
      symbol
      name
    }
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [getTickerSearch, { loading, data }] = useLazyQuery(TICKER_SEARCH);
  const navigate = useNavigate();

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      getTickerSearch({ variables: { ticker: debouncedSearchTerm, limit: 8 } });
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [debouncedSearchTerm, getTickerSearch]);

  const handleResultClick = (symbol: string) => {
    navigate(`/company/${symbol}`);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  const activeStyle = "text-blue-700 dark:text-blue-500";
  const inactiveStyle =
    "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500";

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} alt="InvestInquire" className="h-20 md:h-24" />
        </NavLink>
        <div className="flex md:order-2">
          <button
            type="button"
            aria-label="Toggle search"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          <div
            className={`relative ${isMenuOpen ? "block" : "hidden"} md:block`}
          >
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for a ticker"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {isDropdownOpen && (
              <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {loading ? (
                  <div className="p-2 text-gray-700">Loading...</div>
                ) : (
                  data?.tickerSearch.map(
                    (result: { symbol: string; name: string }) => (
                      <button
                        key={result.symbol}
                        className="w-full text-left p-2 hover:bg-gray-100"
                        onClick={() => handleResultClick(result.symbol)}
                      >
                        {result.symbol}
                      </button>
                    ),
                  )
                )}
              </div>
            )}
          </div>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "flex" : "hidden"}`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : inactiveStyle +
                      " block py-2 px-3 md:bg-transparent md:p-0"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/market"
                className={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : inactiveStyle +
                      " block py-2 px-3 md:hover:bg-transparent md:p-0"
                }
              >
                Market Data
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : inactiveStyle +
                      " block py-2 px-3 md:hover:bg-transparent md:p-0"
                }
              >
                News & Insights
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : inactiveStyle +
                      " block py-2 px-3 md:hover:bg-transparent md:p-0"
                }
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
