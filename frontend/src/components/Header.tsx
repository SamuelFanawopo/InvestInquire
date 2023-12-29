import React from "react";
import TickerSearch from "./TickerSearch";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="flex items-center my-4 mx-10">
      <a href="/" className="flex-grow-0">
        <h1 className="text-4xl font-bold">InvestInquire</h1>
      </a>
      <div className="flex-grow"></div>
      <div className="flex items-center mr-14">
        <TickerSearch /> {/* Ensure this doesn't expand too much */}
      </div>
      <a href="/login" className="flex-grow-0">
        <h2 className="text-xl font-bold">Welcome, {name}</h2>
      </a>
    </header>
  );
};

export default Header;
