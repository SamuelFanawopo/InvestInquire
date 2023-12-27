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

  type Query {
    marketNews(limit: Int): [NewsItem]
    profileNews(limit: Int): [ProfileNewsItem]
    marketStatus: [MarketStatus]
    topGainers: [MarketInfo]
    topLosers: [MarketInfo]
    mostActivelyTraded: [MarketInfo]
  }
`;
