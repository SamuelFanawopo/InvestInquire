import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type NewsItem {
    title: String
    url: String
    bannerImage: String
  }

  type ProfileNewsItem {
    title: String
    url: String
    bannerImage: String
  }

  type MarketStatus {
    marketType: String
    region: String
    primaryExchanges: String
    localOpen: String
    localClose: String
    currentStatus: String
    notes: String
  }

  type MarketInfo {
    ticker: String
    price: String
    change_amount: String
    change_percentage: String
    volume: String
  }

  type TickerMatch {
    symbol: String
    name: String
    type: String
    region: String
    marketOpen: String
    marketClose: String
    timezone: String
    currency: String
    matchScore: Float
  }

  type CompanyOverview {
    Symbol: String
    AssetType: String
    Name: String
    Description: String
    CIK: String
    Exchange: String
    Currency: String
    Country: String
    Sector: String
    Industry: String
    Address: String
    FiscalYearEnd: String
    LatestQuarter: String
    MarketCapitalization: Float
    EBITDA: Float
    PERatio: Float
    PEGRatio: Float
    BookValue: Float
    DividendPerShare: Float
    DividendYield: Float
    EPS: Float
    RevenuePerShareTTM: Float
    ProfitMargin: Float
    OperatingMarginTTM: Float
    ReturnOnAssetsTTM: Float
    ReturnOnEquityTTM: Float
    RevenueTTM: Float
    GrossProfitTTM: Float
    DilutedEPSTTM: Float
    QuarterlyEarningsGrowthYOY: Float
    QuarterlyRevenueGrowthYOY: Float
    AnalystTargetPrice: Float
    TrailingPE: Float
    ForwardPE: Float
    PriceToSalesRatioTTM: Float
    PriceToBookRatio: Float
    EVToRevenue: Float
    EVToEBITDA: Float
    Beta: Float
    WeekHigh52: Float
    WeekLow52: Float
    DayMovingAverage50: Float
    DayMovingAverage200: Float
    SharesOutstanding: Float
    DividendDate: String
    ExDividendDate: String
  }

  type Query {
    marketNews(limit: Int): [NewsItem]
    profileNews(limit: Int): [ProfileNewsItem]
    marketStatus: [MarketStatus]
    topGainers: [MarketInfo]
    topLosers: [MarketInfo]
    mostActivelyTraded: [MarketInfo]
    searchTickers(input: String!): [TickerMatch]
    getCompanyOverview(symbol: String!): CompanyOverview
  }
`;
