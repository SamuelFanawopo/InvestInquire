import React, { useState } from "react";
import ForexDataQuote from "./ForexDataQuote";

const Forex: React.FC = () => {
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [ticker, setTicker] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currencyFrom && currencyTo) {
      setTicker(`${currencyFrom}${currencyTo}`);
    }
  };

  const handleClose = () => {
    setTicker(null);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-12">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pb-16">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Forex Exchange Rates
          </h1>
          <p className="mt-5 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Utilize our forex exchange tool to compare currency values. Enter a
            'Currency From' and a 'Currency To', then click 'View Full Forex
            Data Quote' to access detailed exchange information.
          </p>
        </div>
      </section>
      <div className="mb-8 flex items-center justify-center w-full">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="currencyFrom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Currency From
              </label>
              <input
                type="text"
                name="currencyFrom"
                id="currencyFrom"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="e.g., USD"
                value={currencyFrom}
                onChange={(e) => setCurrencyFrom(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="currencyTo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Currency To
              </label>
              <input
                type="text"
                name="currencyTo"
                id="currencyTo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="e.g., EUR"
                value={currencyTo}
                onChange={(e) => setCurrencyTo(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Full Forex Data Quote
            </button>
          </form>
        </div>
      </div>
      {ticker && (
        <ForexDataQuote
          ticker={ticker}
          isOpen={!!ticker}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default Forex;
