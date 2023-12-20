import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LatestNewsScreen: React.FC = () => {
  // Fixed data for demonstration
  const newsItems = [
    {
      title: "Market Update",
      imageUrl:
        "https://cdn.benzinga.com/files/images/story/2023/Apple-Shutterstock_8.jpeg?width=1200&height=800&fit=crop",
      summary: "The market showed mixed results today with...",
      publishedDate: "2023-04-01",
    },
    {
      title: "Tech Stocks Rally",
      imageUrl:
        "https://cdn.benzinga.com/files/images/story/2023/Apple-Shutterstock_8.jpeg?width=1200&height=800&fit=crop",
      summary: "Tech stocks saw a significant uptick...",
      publishedDate: "2023-04-02",
    },
    {
      title: "Commodities on the Rise",

      imageUrl:
        "https://cdn.benzinga.com/files/images/story/2023/Apple-Shutterstock_8.jpeg?width=1200&height=800&fit=crop",
      summary: "Commodity prices have increased...",
      publishedDate: "2023-04-03",
    },
    {
      title: "Commodities on the Rise",

      imageUrl:
        "https://cdn.benzinga.com/files/images/story/2023/Apple-Shutterstock_8.jpeg?width=1200&height=800&fit=crop",
      summary: "Commodity prices have increased...",
      publishedDate: "2023-04-03",
    },
    {
      title: "Commodities on the Rise",

      imageUrl:
        "https://cdn.benzinga.com/files/images/story/2023/Apple-Shutterstock_8.jpeg?width=1200&height=800&fit=crop",
      summary: "Commodity prices have increased...",
      publishedDate: "2023-04-03",
    },
    {
      title: "Commodities on the Rise",

      imageUrl:
        "https://cdn.benzinga.com/files/images/story/2023/Apple-Shutterstock_8.jpeg?width=1200&height=800&fit=crop",
      summary: "Commodity prices have increased...",
      publishedDate: "2023-04-03",
    },
    {
      title: "Commodities on the Rise",

      imageUrl:
        "https://cdn.benzinga.com/files/images/story/2023/Apple-Shutterstock_8.jpeg?width=1200&height=800&fit=crop",
      summary: "Commodity prices have increased...",
      publishedDate: "2023-04-03",
    },
    // Add more items as needed
  ];

  return (
    <div>
      {" "}
      <Header name="Guest" />{" "}
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center my-6">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{item.title}</h2>
                <p className="text-gray-700 mb-4">{item.summary}</p>
                <p className="text-gray-600 text-sm">
                  Published on: {item.publishedDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LatestNewsScreen;
