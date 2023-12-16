import React from "react";
import TickerSearch from "./TickerSearch";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="flex items-center my-4 mx-10">
      <h1 className="text-4xl font-bold">InvestInquire</h1>
      <div className="flex-grow"></div>{" "}
      {/* This div pushes the following elements to the right */}
      <div className="flex items-center mr-14">
        <TickerSearch />
      </div>
      <h2 className="text-xl font-bold">Welcome, {name}</h2>
    </header>
  );
};

export default Header;
