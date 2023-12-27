# InvestInquire

InvestInquire is a comprehensive financial data aggregator, designed to provide an insightful and interactive experience for tracking and analyzing financial data. Developed using React, TypeScript, GraphQL, Firebase, and TailwindCSS, this project leverages the power of modern web technologies to deliver a seamless and dynamic user experience.

![Dashboard Screen](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/b47750aa-8fbe-4a97-9e46-7e4b06425633)
![dashboard2](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/8643ffb5-fff1-4308-a9b8-7e9161066601)
![Company Screen](link-to-company-image)
![Latest News Screen](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/347eefc6-8a29-4584-945b-06c1ef352093)
![Login Screen](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/a45bb4d8-773f-4b66-bc20-f8a9dd4742c0)
![Profile Screen](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/b249ffda-6788-4ea3-8806-0db73febe9b4)
![Registration Screen](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/cc71fad6-c45d-407d-994c-fad8527a15b5)

## Features

- **Dashboard**: An overview of the financial market with real-time data.
- **Ticker Search**: Efficient search functionality for finding company tickers.
- **Company Information**: Detailed information about companies.
- **Financial Graphs**: Visual representation of financial data using Chart.js.
- **User Authentication**: Login and registration features with Firebase Auth and Google Login.
- **Latest Financial News**: Updates on the latest happenings in the financial world.
- **Currency Exchange Rates**: Real-time currency conversion and exchange rate information.
- **Financial Statements**: Access to balance sheets and cash flow statements.
- **Stock Watchlist**: Personalized watchlist for tracking favorite stocks.
- **Market Timings**: Information on market opening and closing times.
- **Top Stock Performers**: Lists of top gainers, losers, and most actively traded stocks.

## Structure

- `/frontend`: Contains the Vite setup and React components.
  - Key Screens: `CompanyScreen.tsx`, `DashboardScreen.tsx`, `LatestNewsScreen.tsx`, `LoginScreen.tsx`, `ProfileScreen.tsx`, `RegistrationScreen.tsx`
  - Components: `ExchangeRate.tsx`, `Footer.tsx`, `Loading.tsx`, `MarketNews.tsx`, `TickerSearch.tsx`, `FinancialGraph.tsx`, `Header.tsx`, `MarketInfo.tsx`, `MarketTimes.tsx`, `WatchList.tsx`
- `/backend`: Houses the GraphQL and Firebase backend configuration.

## Getting Started

### Prerequisites

- Node.js
- A Firebase account
- API keys from Alpha Vantage

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SamuelFanawopo/InvestInquire/
   cd InvestInquire
   
  - You will need to obtain API keys from Alpha Vantage.
  - Create a .env file in the root of the project and fill in your API keys and Firebase configuration.

2. **Install Dependencies**
   #### In the project root directory
   ```bash
   npm install
   
3. **Running the Application**
   #### Start the frontend
   ```bash
    cd frontend
    npm run dev
    ```
   #### Start the backend
   ```bash
   cd backend
   node server.js
   ```

## Usage Limitations

InvestInquire utilizes the Alpha Vantage API. The free tier is limited to 25 requests per day. For more extensive usage, consider upgrading the API tier.

## License
InvestInquire is open-sourced under the MIT License. Feel free to contribute, fork, and adapt it for your personal or professional projects.

## Acknowledgements

- [Alpha Vantage API](https://www.alphavantage.co/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [Firebase](https://firebase.google.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Chart.js](https://www.chartjs.org/)


© 2023 InvestInquire. All Rights Reserved.
