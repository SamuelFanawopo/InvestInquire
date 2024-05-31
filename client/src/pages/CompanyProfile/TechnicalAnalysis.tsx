import React, { useState } from "react";
import ApexCharts from "react-apexcharts";
import { gql, useQuery } from "@apollo/client";

const GET_INTRADAY_CHART = gql`
  query IntradayChart($ticker: String!, $limit: Int) {
    intradayChart(ticker: $ticker, limit: $limit) {
      date
      close
    }
  }
`;

const GET_CURRENT_PRICE = gql`
  query DataQuote($ticker: String!) {
    dataQuote(ticker: $ticker) {
      price
    }
  }
`;

const GET_EMA = gql`
  query Ema($ticker: String!, $limit: Int) {
    ema(ticker: $ticker, limit: $limit) {
      ema
    }
  }
`;

const GET_DEMA = gql`
  query Dema($ticker: String!, $limit: Int) {
    dema(ticker: $ticker, limit: $limit) {
      dema
    }
  }
`;

const GET_SMA = gql`
  query Sma($ticker: String!, $limit: Int) {
    sma(ticker: $ticker, limit: $limit) {
      sma
    }
  }
`;

const GET_TEMA = gql`
  query Tema($ticker: String!, $limit: Int) {
    tema(ticker: $ticker, limit: $limit) {
      tema
    }
  }
`;

const GET_WMA = gql`
  query Wma($ticker: String!, $limit: Int) {
    wma(ticker: $ticker, limit: $limit) {
      wma
    }
  }
`;

interface IntradayChartData {
  date: string;
  close: number;
}

interface DataQuote {
  price: number;
}

interface EmaData {
  ema: number;
}

interface DemaData {
  dema: number;
}

interface SmaData {
  sma: number;
}

interface TemaData {
  tema: number;
}

interface WmaData {
  wma: number;
}

interface TechnicalAnalysisProps {
  ticker: string;
}

const TechnicalAnalysis: React.FC<TechnicalAnalysisProps> = ({ ticker }) => {
  const [selectedIndicator, setSelectedIndicator] = useState("Price");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const {
    data: intradayData,
    loading: intradayLoading,
    error: intradayError,
  } = useQuery<{ intradayChart: IntradayChartData[] }>(GET_INTRADAY_CHART, {
    variables: { ticker: ticker, limit: 26 },
  });

  const {
    data: quoteData,
    loading: quoteLoading,
    error: quoteError,
  } = useQuery<{ dataQuote: DataQuote[] }>(GET_CURRENT_PRICE, {
    variables: { ticker: ticker },
  });

  const {
    data: emaData,
    loading: emaLoading,
    error: emaError,
  } = useQuery<{ ema: EmaData[] }>(GET_EMA, {
    variables: { ticker: ticker, limit: 26 },
    skip: selectedIndicator !== "EMA",
  });

  const {
    data: demaData,
    loading: demaLoading,
    error: demaError,
  } = useQuery<{ dema: DemaData[] }>(GET_DEMA, {
    variables: { ticker: ticker, limit: 26 },
    skip: selectedIndicator !== "DEMA",
  });

  const {
    data: smaData,
    loading: smaLoading,
    error: smaError,
  } = useQuery<{ sma: SmaData[] }>(GET_SMA, {
    variables: { ticker: ticker, limit: 26 },
    skip: selectedIndicator !== "SMA",
  });

  const {
    data: temaData,
    loading: temaLoading,
    error: temaError,
  } = useQuery<{ tema: TemaData[] }>(GET_TEMA, {
    variables: { ticker: ticker, limit: 26 },
    skip: selectedIndicator !== "TEMA",
  });

  const {
    data: wmaData,
    loading: wmaLoading,
    error: wmaError,
  } = useQuery<{ wma: WmaData[] }>(GET_WMA, {
    variables: { ticker: ticker, limit: 26 },
    skip: selectedIndicator !== "WMA",
  });

  if (
    intradayLoading ||
    quoteLoading ||
    emaLoading ||
    demaLoading ||
    smaLoading ||
    temaLoading ||
    wmaLoading
  )
    return <p>Loading...</p>;
  if (intradayError) return <p>Error: {intradayError.message}</p>;
  if (quoteError) return <p>Error: {quoteError.message}</p>;
  if (emaError) return <p>Error: {emaError.message}</p>;
  if (demaError) return <p>Error: {demaError.message}</p>;
  if (smaError) return <p>Error: {smaError.message}</p>;
  if (temaError) return <p>Error: {temaError.message}</p>;
  if (wmaError) return <p>Error: {wmaError.message}</p>;

  const chartData =
    selectedIndicator === "Price"
      ? intradayData?.intradayChart.map((point) => point.close).reverse() ?? []
      : selectedIndicator === "EMA"
        ? emaData?.ema.map((point) => point.ema).reverse() ?? []
        : selectedIndicator === "DEMA"
          ? demaData?.dema.map((point) => point.dema).reverse() ?? []
          : selectedIndicator === "SMA"
            ? smaData?.sma.map((point) => point.sma).reverse() ?? []
            : selectedIndicator === "TEMA"
              ? temaData?.tema.map((point) => point.tema).reverse() ?? []
              : wmaData?.wma.map((point) => point.wma).reverse() ?? [];

  const chartCategories =
    intradayData?.intradayChart
      .map((point) => point.date.split(" ")[0])
      .reverse() ?? [];

  const currentPrice = quoteData?.dataQuote[0]?.price ?? 0;

  const chartOptions = {
    series: [
      {
        name: selectedIndicator,
        data: chartData,
        color:
          selectedIndicator === "Price"
            ? "#1A56DB"
            : selectedIndicator === "EMA"
              ? "#FF5733"
              : selectedIndicator === "DEMA"
                ? "#28B463"
                : selectedIndicator === "SMA"
                  ? "#FFC300"
                  : selectedIndicator === "TEMA"
                    ? "#FF33CC"
                    : "#33CCFF",
      },
    ],
    options: {
      chart: {
        height: "100%",
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: false,
        },
      },
      xaxis: {
        show: true,
        categories: chartCategories,
        labels: {
          show: false,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          formatter: function (value) {
            return "$" + value;
          },
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
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
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        padding: {
          left: 30,
          right: 15,
          top: 0,
          bottom: 0,
        },
      },
    },
  };

  return (
    <>
      <h1 className="mb-4 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Technical Analysis
      </h1>
      <p className="mb-6 flex justify-center items-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Utilize advanced charts and indicators to forecast market movements and
        refine your trading strategies.
      </p>
      <div className="my-16 flex justify-center space-x-6">
        <div className="max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Intraday Chart
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Explore real-time trading activity with our interactive chart. This
            tool allows you to track price movements and apply technical
            analysis to refine your trading strategies. Start with the default
            view and customize further using the dropdown menu.
          </p>
          <div className="flex justify-between">
            <div>
              <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                ${currentPrice.toFixed(2)}
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
          <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
            <div className="flex justify-between items-center pt-5">
              <div className="relative inline-block text-left">
                <button
                  id="dropdownDefaultButton"
                  className="text-md font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Select Moving Average
                  <svg
                    className={`w-2.5 m-2.5 ms-1.5 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                        onClick={() => {
                          setSelectedIndicator("Price");
                          setDropdownOpen(false);
                        }}
                      >
                        Price
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                        onClick={() => {
                          setSelectedIndicator("EMA");
                          setDropdownOpen(false);
                        }}
                      >
                        EMA
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                        onClick={() => {
                          setSelectedIndicator("DEMA");
                          setDropdownOpen(false);
                        }}
                      >
                        DEMA
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                        onClick={() => {
                          setSelectedIndicator("SMA");
                          setDropdownOpen(false);
                        }}
                      >
                        SMA
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                        onClick={() => {
                          setSelectedIndicator("TEMA");
                          setDropdownOpen(false);
                        }}
                      >
                        TEMA
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                        onClick={() => {
                          setSelectedIndicator("WMA");
                          setDropdownOpen(false);
                        }}
                      >
                        WMA
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {/* Add dropdown logic here if necessary */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalAnalysis;
