import React from "react";
import "../index.css";
import TickerSearch from "../components/TickerSearch";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between w-full py-5 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-0 w-full md:w-auto">
        InvestInquire
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-end gap-2 md:gap-4 w-full">
        <TickerSearch
          searchBoxStyling="border border-black border-4 rounded-lg py-0.5 pl-0.5 w-full md:flex-grow-0"
          textStyling="border border-[#2A3439] ml-3 border-4 rounded-md p-0.5"
        />
        <h2 className="text-lg md:text-xl font-bold whitespace-nowrap self-end md:self-auto">
          Welcome, {name}
        </h2>
      </div>
    </header>
  );
};

export default Header;
