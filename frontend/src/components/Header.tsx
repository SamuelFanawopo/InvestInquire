import React from "react";
import "../index.css";
import TickerSearch from "./TickerSearch";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="flex my-6 mx-10">
      <h1 className="text-3xl font-bold">InvestInquire</h1>
      <div className="ml-auto mr-4">
        <TickerSearch
          searchBoxStyling="border border-black border-4 rounded-lg py-0.5 pl-0.5"
          textStyling="border border-[#2A3439] ml-3 mr-10 border-4 rounded-md px-1"
        />
      </div>
      <h2 className="text-xl font-bold">Welcome, {name}</h2>
    </header>
  );
};

export default Header;
