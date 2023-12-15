import React from "react";

interface DashboardScreenProps {
  ticker: string;
  name: string;
  newsImage: string;
  newsTitle: string;
  timePublished: string;
  topGainers: string;
  topLosers: string;
  mostActiveTickets: string;
  marketOpenTime: string;
  marketCloseTime: string;
  fromCurrency: string;
  toCurrency: string;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({
  ticker,
  name,
  newsImage,
  newsTitle,
  timePublished,
  topGainers,
  topLosers,
  mostActiveTickets,
  marketOpenTime,
  marketCloseTime,
  fromCurrency,
  toCurrency,
}) => {
  return (
    <div>
      <h1>Dashboard: {name}</h1>
      <section>
        <h2>Market Info</h2>
        <p>Market Open Time: {marketOpenTime}</p>
        <p>Market Close Time: {marketCloseTime}</p>
        <p>Top Gainers: {topGainers}</p>
        <p>Top Losers: {topLosers}</p>
        <p>Most Active Tickets: {mostActiveTickets}</p>
      </section>

      <section>
        <h2>Company Info</h2>
        <p>Ticker Symbol: {ticker}</p>
        <img src={newsImage} alt="News" />
        <p>News Title: {newsTitle}</p>
        <p>Time Published: {timePublished}</p>
      </section>

      <section>
        <h2>Currency Exchange</h2>
        <p>From: {fromCurrency}</p>
        <p>To: {toCurrency}</p>
      </section>
    </div>
  );
};

export default DashboardScreen;
