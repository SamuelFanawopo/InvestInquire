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

  type BalanceSheetItem {
    fiscalDateEnding: String
    reportedCurrency: String
    totalAssets: String
    totalCurrentAssets: String
    cashAndCashEquivalentsAtCarryingValue: String
    cashAndShortTermInvestments: String
    inventory: String
    currentNetReceivables: String
    totalNonCurrentAssets: String
    propertyPlantEquipment: String
    accumulatedDepreciationAmortizationPPE: String
    intangibleAssets: String
    intangibleAssetsExcludingGoodwill: String
    goodwill: String
    investments: String
    longTermInvestments: String
    shortTermInvestments: String
    otherCurrentAssets: String
    otherNonCurrentAssets: String
    totalLiabilities: String
    totalCurrentLiabilities: String
    currentAccountsPayable: String
    deferredRevenue: String
    currentDebt: String
    shortTermDebt: String
    totalNonCurrentLiabilities: String
    capitalLeaseObligations: String
    longTermDebt: String
    currentLongTermDebt: String
    longTermDebtNoncurrent: String
    shortLongTermDebtTotal: String
    otherCurrentLiabilities: String
    otherNonCurrentLiabilities: String
    totalShareholderEquity: String
    treasuryStock: String
    retainedEarnings: String
    commonStock: String
    commonStockSharesOutstanding: String
  }

  type CashFlowItem {
    fiscalDateEnding: String
    reportedCurrency: String
    operatingCashflow: String
    paymentsForOperatingActivities: String
    proceedsFromOperatingActivities: String
    changeInOperatingLiabilities: String
    changeInOperatingAssets: String
    depreciationDepletionAndAmortization: String
    capitalExpenditures: String
    changeInReceivables: String
    changeInInventory: String
    profitLoss: String
    cashflowFromInvestment: String
    cashflowFromFinancing: String
    proceedsFromRepaymentsOfShortTermDebt: String
    paymentsForRepurchaseOfCommonStock: String
    paymentsForRepurchaseOfEquity: String
    paymentsForRepurchaseOfPreferredStock: String
    dividendPayout: String
    dividendPayoutCommonStock: String
    dividendPayoutPreferredStock: String
    proceedsFromIssuanceOfCommonStock: String
    proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet: String
    proceedsFromIssuanceOfPreferredStock: String
    proceedsFromRepurchaseOfEquity: String
    proceedsFromSaleOfTreasuryStock: String
    changeInCashAndCashEquivalents: String
    changeInExchangeRate: String
    netIncome: String
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

  type StockData {
    date: String
    open: Float
    high: Float
    low: Float
    close: Float
    volume: Int
  }

  type Query {
    marketNews(limit: Int): [NewsItem]
    profileNews(tickers: String, limit: Int): [ProfileNewsItem]
    marketStatus: [MarketStatus]
    topGainers: [MarketInfo]
    topLosers: [MarketInfo]
    mostActivelyTraded: [MarketInfo]
    searchTickers(input: String!): [TickerMatch]
    getCompanyOverview(symbol: String!): CompanyOverview
    balanceSheet(symbol: String!): BalanceSheetItem
    cashFlow(symbol: String!): CashFlowItem
    getStockData(ticker: String!, days: Int): [StockData]
  }
`;
