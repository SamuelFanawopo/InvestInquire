import React from "react";

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="bg-white rounded-lg ">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
          © {year} InvestInquire™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
