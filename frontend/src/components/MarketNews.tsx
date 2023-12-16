import React from "react";

// Define the props for the component, if any are needed
interface MarketNewsProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  title: string;
  timePublished: string;
  source: string;
}

// Define the MarketNews component
const MarketNews: React.FC<MarketNewsProps> = ({
  image1,
  image2,
  image3,
  image4,
  title,
  timePublished,
  source,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center w-full ml-1">
        <h1 className="font-bold text-3xl text-center my-6">
          Latest Financial News
        </h1>
        <div className="w-full mb-4">
          {/* First news item taking up the full width */}
          <a href={source} className="block">
            <h2 className="font-bold text-xl mb-2 text-center">{title}</h2>
            <img src={image1} alt={title} className="w-full rounded-md" />
            <p>Published: {timePublished}</p>
          </a>
        </div>
        {/* Other news items in a responsive grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <a href={source} className="block">
              <h2 className="font-bold text-lg">{title}</h2>
              <img src={image2} alt={title} className="w-full rounded-md" />
              <p>Published: {timePublished}</p>
            </a>
          </div>
          <div>
            <a href={source} className="block">
              <h2 className="font-bold text-lg">{title}</h2>
              <img src={image3} alt={title} className="w-full rounded-md" />
              <p>Published: {timePublished}</p>
            </a>
          </div>
          <div>
            <a href={source} className="block">
              <h2 className="font-bold text-lg">{title}</h2>
              <img src={image4} alt={title} className="w-full rounded-md" />
              <p>Published: {timePublished}</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-blue-800 text-white rounded-md py-1 px-2 mt-4">
          More News
        </button>
      </div>
    </div>
  );
};

export default MarketNews;
