import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type NewsItem {
    title: String
    url: String
    timePublished: String
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
    changeAmount: String
    changePercent: String
    volume: String
  }

  type Query {
    marketNews(limit: Int): [NewsItem]
    marketStatus: [MarketStatus]
    marketInfo: [MarketInfo]
  }
`;
