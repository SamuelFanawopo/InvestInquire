import React, { useState } from "react";
import BalanceSheet from "./Modals/BalanceSheet";
import BalanceSheetGrowth from "./Modals/BalanceSheetGrowth";
import CashFlowStatement from "./Modals/CashFlowStatement";
import CashFlowStatementGrowth from "./Modals/CashFlowStatementGrowth";
import DiscountedCashFlow from "./Modals/DiscountedCashFlow";
import IncomeStatement from "./Modals/IncomeStatement";
import IncomeStatementGrowth from "./Modals/IncomeStatementGrowth";
import FinancialGrowth from "./Modals/FinancialGrowth";
import DividendsHistorical from "./Modals/DividendsHistorical";
import { useParams } from "react-router-dom";

const FinancialStatements: React.FC = () => {
  const { ticker } = useParams<{ ticker: string }>();

  const [isOpen, setIsOpen] = useState({
    balanceSheet: false,
    balanceSheetGrowth: false,
    cashFlowStatement: false,
    cashFlowStatementGrowth: false,
    discountedCashFlow: false,
    incomeStatement: false,
    incomeStatementGrowth: false,
    financialGrowth: false,
    dividendsHistorical: false,
  });

  const toggleModal = (modal: string) => {
    setIsOpen((prev) => ({ ...prev, [modal]: !prev[modal] }));
  };

  const components = [
    {
      title: "Balance Sheet",
      modal: "balanceSheet",
      component: BalanceSheet,
      description:
        "Access detailed Balance Sheet data, outlining the company's assets, liabilities, and shareholders' equity.",
    },
    {
      title: "Balance Sheet Growth",
      modal: "balanceSheetGrowth",
      component: BalanceSheetGrowth,
      description:
        "Explore the growth trends in the Balance Sheet figures over time, highlighting changes in assets, liabilities, and equity.",
    },
    {
      title: "Cash Flow Statement",
      modal: "cashFlowStatement",
      component: CashFlowStatement,
      description:
        "Review the Cash Flow Statement to understand the inflows and outflows of cash, crucial for assessing liquidity and financial flexibility.",
    },
    {
      title: "Cash Flow Statement Growth",
      modal: "cashFlowStatementGrowth",
      component: CashFlowStatementGrowth,
      description:
        "Examine the growth patterns in cash flow metrics to gauge the company's cash management efficiency over time.",
    },
    {
      title: "Discounted Cash Flow (DCF)",
      modal: "discountedCashFlow",
      component: DiscountedCashFlow,
      description:
        "Delve into the Discounted Cash Flow (DCF) analysis, a valuation method used to estimate the value of an investment based on its expected future cash flows.",
    },
    {
      title: "Income Statement",
      modal: "incomeStatement",
      component: IncomeStatement,
      description:
        "Access the Income Statement to analyze revenue, expenses, and profitability over a specific accounting period.",
    },
    {
      title: "Income Statement Growth",
      modal: "incomeStatementGrowth",
      component: IncomeStatementGrowth,
      description:
        "Explore the trends and growth in Income Statement figures such as revenue, expenses, and net income over time.",
    },
    {
      title: "Financial Growth",
      modal: "financialGrowth",
      component: FinancialGrowth,
      description:
        "Review comprehensive metrics on financial growth, analyzing key figures like revenue, net income, and EPS growth.",
    },
    {
      title: "Dividends Historical",
      modal: "dividendsHistorical",
      component: DividendsHistorical,
      description:
        "Access detailed historical data on the company's dividend payments, including the frequency, amounts, and growth of dividends over time.",
    },
  ];

  return (
    <>
      <h1 className="mb-4 mt-10 text-4xl font-extrabold flex items-center justify-center my-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Financial Statements & Growth
      </h1>
      <p className="mb-6 text-lg flex items-center justify-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Examine detailed statements and growth metrics to track financial
        progress and trends.
      </p>
      <div className="my-16 flex justify-center flex-wrap gap-9">
        {components.map((item, index) => {
          const Component = item.component;
          return (
            <div
              key={index}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <button
                onClick={() => toggleModal(item.modal)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Data
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
              <Component
                isOpen={isOpen[item.modal]}
                ticker={ticker}
                onClose={() => toggleModal(item.modal)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FinancialStatements;
