import React from "react";

// Assuming each news item might have these properties
interface NewsItem {
  title: string;
  imageUrl: string;
  summary: string;
  publishedDate: string;
  // Add more properties as necessary
}

interface LatestNewsScreenProps {
  newsItems: NewsItem[]; // Array of news items
}

const LatestNewsScreen: React.FC<LatestNewsScreenProps> = ({ newsItems }) => {
  return (
    <div>
      <h1>Latest News</h1>
      <div>
        {newsItems.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.summary}</p>
            <p>Published on: {item.publishedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsScreen;
