import React from "react";
import "../index.css";
import TickerSearch from "./TickerSearch";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="flex items-center justify-between w-full px-4 my-5">
      <h1 className="text-3xl font-bold flex-shrink-0">InvestInquire</h1>
      <div className="flex items-center justify-end flex-grow">
        <TickerSearch
          searchBoxStyling="border border-black border-4 rounded-lg py-0.5 pl-0.5 flex-shrink-0"
          textStyling="border border-[#2A3439] ml-3 border-4 rounded-md p-0.5 flex-shrink-0"
        />
        <h2 className="text-xl font-bold ml-4 flex-shrink-0">
          Welcome, {name}
        </h2>
      </div>
    </header>
  );
};

export default Header;
