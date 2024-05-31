import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import ApexCharts from "react-apexcharts";

const GET_INTRADAY_CHART = gql`
  query IntradayChart($ticker: String!, $limit: Int) {
    intradayChart(ticker: $ticker, limit: $limit) {
      date
      close
    }
  }
`;

const GET_COMPANY_PROFILE = gql`
  query GetCompanyProfile($ticker: String!) {
    companyProfile(ticker: $ticker) {
      companyName
      symbol
      sector
      industry
      description
      country
      currency
      exchange
      isin
      mktCap
      ipoDate
    }
  }
`;

const GET_STOCK_DATA = gql`
  query GetDataQuote($ticker: String!) {
    dataQuote(ticker: $ticker) {
      price
      changesPercentage
      change
      dayLow
      dayHigh
      yearLow
      yearHigh
      priceAvgFifty
      priceAvgTwoHundred
      open
      prevClose
    }
  }
`;

// TypeScript interfaces remain the same
interface CompanyProfile {
  companyName: string;
  symbol: string;
  sector: string;
  industry: string;
  description: string;
  country: string;
  currency: string;
  exchange: string;
  isin: string;
  mktCap: number;
  ipoDate: string;
}

interface StockData {
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearLow: number;
  yearHigh: number;
  priceAvgFifty: number | null;
  priceAvgTwoHundred: number | null;
  open: number;
  prevClose: number | null;
}

const CompanyOverview: React.FC = () => {
  const { ticker } = useParams<{ ticker: string }>();

  const {
    data: intradayData,
    loading: intradayLoading,
    error: intradayError,
  } = useQuery<{ intradayChart: { date: string; close: number }[] }>(
    GET_INTRADAY_CHART,
    {
      variables: { ticker: ticker || "", limit: 6 },
    },
  );

  const {
    data: companyData,
    loading: companyLoading,
    error: companyError,
  } = useQuery<{ companyProfile: CompanyProfile[] }>(GET_COMPANY_PROFILE, {
    variables: { ticker: ticker || "" },
  });

  const {
    data: stockData,
    loading: stockLoading,
    error: stockError,
  } = useQuery<{ dataQuote: StockData[] }>(GET_STOCK_DATA, {
    variables: { ticker: ticker || "" },
  });

  if (companyLoading || stockLoading || intradayLoading)
    return <p>Loading...</p>;
  if (companyError)
    return <p>Error loading company data: {companyError.message}</p>;
  if (stockError) return <p>Error loading stock data: {stockError.message}</p>;
  if (intradayError)
    return <p>Error loading intraday data: {intradayError.message}</p>;

  const company = companyData?.companyProfile[0];
  const stockInfo = stockData?.dataQuote[0];
  const reversedData =
    intradayData?.intradayChart.map((chart) => chart.close).reverse() ?? [];
  const categories =
    intradayData?.intradayChart
      .map((chart) => new Date(chart.date).toLocaleDateString())
      .reverse() ?? [];

  const chartOptions = {
    series: [
      {
        name: "Price",
        data: reversedData,
      },
    ],
    options: {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0,
        },
      },
      xaxis: {
        categories: categories,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    },
  };

  if (!company || !stockInfo) return <p>Data is unavailable.</p>;

  // Utility function to truncate text
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <>
      <h1 className="mb-4 mt-8 text-4xl font-extrabold flex items-center justify-center my-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Company Insights
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Explore financials, market trends, and news to gauge company performance
        and make informed decisions
      </p>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
              <a className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                <svg
                  className="w-3 h-3 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Company Overview
              </a>
              <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                {company.companyName}
              </h1>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                <ul>
                  <li>
                    <strong>Symbol:</strong> {company.symbol}
                  </li>
                  <li>
                    <strong>Exchange:</strong> {company.exchange}
                  </li>
                  <li>
                    <strong>Sector:</strong> {company.sector}
                  </li>
                  <li>
                    <strong>Industry:</strong> {company.industry}
                  </li>
                  <li>
                    <strong>Description:</strong>{" "}
                    {truncate(company.description, 250)}
                  </li>
                  <li>
                    <strong>Country:</strong> {company.country}
                  </li>
                  <li>
                    <strong>Currency:</strong> {company.currency}
                  </li>
                  <li>
                    <strong>Market Cap:</strong> $
                    {parseInt(company.mktCap, 10).toLocaleString()} USD
                  </li>
                  <li>
                    <strong>ISIN:</strong> {company.isin}
                  </li>
                  <li>
                    <strong>IPO Date:</strong>{" "}
                    {new Date(company.ipoDate).toLocaleDateString()}
                  </li>
                </ul>
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                  <svg
                    className="w-3.5 h-3.5 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Stock Information
                </a>
                <h2 className="text-gray-900 mt-2 dark:text-white text-3xl font-extrabold">
                  Stock Overview
                </h2>
                <p className="text-lg mt-2 font-normal text-gray-500 dark:text-gray-400 mb-4">
                  <ul className="mt-8">
                    <li className="mt-2">
                      <strong>Price:</strong> ${stockInfo.price.toFixed(2)}
                    </li>
                    <li className="mt-2">
                      <strong>Changes Percentage:</strong>{" "}
                      {stockInfo.changesPercentage.toFixed(2)}%
                    </li>
                    <li className="mt-2">
                      <strong>Change:</strong> ${stockInfo.change.toFixed(2)}
                    </li>
                    <li className="mt-2">
                      <strong>Day Low:</strong> ${stockInfo.dayLow.toFixed(2)}
                    </li>
                    <li className="mt-2">
                      <strong>Day High:</strong> ${stockInfo.dayHigh.toFixed(2)}
                    </li>
                    <li className="mt-2">
                      <strong>Year Low:</strong> ${stockInfo.yearLow.toFixed(2)}
                    </li>
                    <li className="mt-2">
                      <strong>Year High:</strong> $
                      {stockInfo.yearHigh.toFixed(2)}
                    </li>
                    <li className="mt-2">
                      <strong>Price Avg Fifty:</strong> $
                      {stockInfo.priceAvgFifty
                        ? stockInfo.priceAvgFifty.toFixed(2)
                        : "N/A"}
                    </li>
                    <li className="mt-2">
                      <strong>Price Avg Two Hundred:</strong> $
                      {stockInfo.priceAvgTwoHundred
                        ? stockInfo.priceAvgTwoHundred.toFixed(2)
                        : "N/A"}
                    </li>
                    <li className="mt-2">
                      <strong>Open:</strong> ${stockInfo.open.toFixed(2)}
                    </li>
                    <li className="mt-2">
                      <strong>Prev Close:</strong> $
                      {stockInfo.prevClose
                        ? stockInfo.prevClose.toFixed(2)
                        : "N/A"}
                    </li>
                  </ul>
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                  <svg
                    className="w-3 h-3 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
                    />
                  </svg>
                  Stock Performance
                </a>
                <h2 className="text-gray-900 dark:text-white text-xl my-2 font-extrabold mb-2"></h2>
                <div className="max-w-lg mt-2 w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                  <div className="flex justify-between">
                    <div>
                      <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                        ${stockInfo.price.toFixed(2)}
                      </h5>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Market Price
                      </p>
                    </div>
                  </div>
                  <div id="area-chart">
                    <ApexCharts
                      options={chartOptions.options}
                      series={chartOptions.series}
                      type="area"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompanyOverview;
