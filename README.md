# InvestInquire

InvestInquire is a comprehensive financial data aggregator, designed to provide an insightful and interactive experience for tracking and analyzing financial data. Developed using React, TypeScript, GraphQL, Firebase, and TailwindCSS, ChartJS. this project leverages the power of modern web technologies to deliver a seamless and dynamic user experience.

![Dashboard Screen](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/252b242c-1e94-416c-9d61-7bdf11f2874e)
![Screenshot from 2024-02-05 09-37-20](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/0823e339-ba84-4d95-91c8-903a6a6ade1c)
![Screenshot from 2024-02-05 09-37-36](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/01b08fbf-c99e-4d9d-b9e9-10ad3e00a6ab)
![Company Screen](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/9427a143-d4d5-41dc-af1e-79230c27dab2)
![Latest News Screen](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/347eefc6-8a29-4584-945b-06c1ef352093)
![Login Screen](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/fca1b0e8-cb47-4644-87db-2a2f147f643a)
![Registration Screen](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/1e091134-ba06-49c4-81d4-d4192a51c5bc)
![Profile Screen](https://github.com/SamuelFanawopo/InvestInquire/assets/92785438/f83b1df1-7d6c-4b16-9a05-b9ae1ea49f84)



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


© 2024 InvestInquire. All Rights Reserved.
