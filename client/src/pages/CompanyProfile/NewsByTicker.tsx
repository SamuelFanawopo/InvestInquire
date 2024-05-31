import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import defaultImg from "../../assets/default-img.png";

type Article = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  publishedAt: string;
};

// GraphQL query setup
const GET_NEWS_BY_TICKER = gql`
  query GetNewsByTicker($ticker: String!, $page: Int!) {
    newsByTicker(ticker: $ticker, page: $page) {
      title
      description
      imageUrl
      url
      publishedAt
    }
  }
`;

const truncateText = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};

interface NewsByTickerProps {
  tickers: string[];
}

const NewsByTicker: React.FC<NewsByTickerProps> = ({ tickers }) => {
  const [page, setPage] = useState<number>(1);

  const tickersString = tickers.join(",");

  const { loading, error, data, refetch } = useQuery<{
    newsByTicker: Article[];
  }>(GET_NEWS_BY_TICKER, {
    variables: { ticker: tickersString, page },
  });

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
      refetch({ ticker: tickersString, page: page - 1 });
    }
  };

  const handleNext = () => {
    setPage(page + 1);
    refetch({ ticker: tickersString, page: page + 1 });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const articles = data
    ? data.newsByTicker.map((article) => ({
        ...article,
        title: truncateText(article.title, 50),
        description: truncateText(article.description, 100),
        imageUrl: article.imageUrl || defaultImg,
      }))
    : [];

  return (
    <>
      <h1 className="mb-4 mt-10 text-4xl font-extrabold flex items-center justify-center my-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Company News
      </h1>
      <p className="mb-10 text-lg flex items-center justify-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Get the latest updates and articles tailored to your selected stocks for
        informed trading decisions.
      </p>
      <div className="px-4 pb-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href={article.url}>
                <img
                  className="w-full h-56 object-cover rounded-t-lg"
                  src={article.imageUrl}
                  alt={article.title}
                />
              </a>
              <div className="p-5">
                <a href={article.url}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {article.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {article.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Published on{" "}
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
                <a
                  href={article.url}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
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
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={handlePrevious}
            className={`flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={page === 1}
          >
            <svg
              className="w-3.5 h-3.5 mr-2"
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
                d="M13 5H1m0 0l4 4M1 5l4-4"
              />
            </svg>
            Previous
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg
              className="w-3.5 h-3.5 ml-2"
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
        </div>
      </div>
    </>
  );
};

export default NewsByTicker;
