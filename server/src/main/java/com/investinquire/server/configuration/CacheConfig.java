package com.investinquire.server.configuration;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import java.time.Duration;

@EnableCaching
@Configuration
public class CacheConfig {

    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration defaultCacheConfig = RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofHours(1)); // Set TTL to 1 hour for all caches

        RedisCacheConfiguration demaConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration intradayChartConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(2));
        RedisCacheConfiguration temaConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration emaConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration smaConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration wmaConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration companyProfileConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofMinutes(30));
        RedisCacheConfiguration companyRatingConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration openPositionsConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofMinutes(5));
        RedisCacheConfiguration dataQuoteConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofSeconds(30));
        RedisCacheConfiguration globalQuoteConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofSeconds(30));
        RedisCacheConfiguration quoteOrderConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofSeconds(30));
        RedisCacheConfiguration historicalRatingConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration stockPriceChangeConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration dividendsCalendarConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(3));
        RedisCacheConfiguration dividendsHistoricalConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration balanceSheetGrowthConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration discountedCashFlowConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofMinutes(1));
        RedisCacheConfiguration balanceSheetConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration financialGrowthConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration cashFlowGrowthConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration incomeStatementGrowthConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration cashFlowStatementConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration investmentOverviewConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofMinutes(1));
        RedisCacheConfiguration incomeStatementConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration commoditiesQuoteConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofSeconds(30));
        RedisCacheConfiguration forexQuoteConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofSeconds(30));
        RedisCacheConfiguration commoditiesConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofSeconds(30));
        RedisCacheConfiguration realGDPPerCapitaConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration realGDPConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration interestRateConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration historicalSectorPerformanceConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration inflationConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(12));
        RedisCacheConfiguration keyMetricsConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration keyMetricsTTMConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration ratiosTTMConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration earningsCalendarConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration globalEventsConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration investedStocksConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofMinutes(1));
        RedisCacheConfiguration earningsSurprisesConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration newsByTickerConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofMinutes(5));
        RedisCacheConfiguration generalNewsConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofMinutes(5));
        RedisCacheConfiguration mostActivelyTradedConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofSeconds(30));
        RedisCacheConfiguration topGainersConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofSeconds(30));
        RedisCacheConfiguration sectorPerformanceConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofHours(1));
        RedisCacheConfiguration topLosersConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofSeconds(30));
        RedisCacheConfiguration tickerSearchConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofDays(30));

        // Build the cache manager with each specific configuration
        return RedisCacheManager.builder(connectionFactory)
                .cacheDefaults(defaultCacheConfig) // Default configuration applied where no specific config is set
                .withCacheConfiguration("dema", demaConfig)
                .withCacheConfiguration("intradayChart", intradayChartConfig)
                .withCacheConfiguration("tema", temaConfig)
                .withCacheConfiguration("ema", emaConfig)
                .withCacheConfiguration("sma", smaConfig)
                .withCacheConfiguration("wma", wmaConfig)
                .withCacheConfiguration("historicalSectorPerformance", historicalSectorPerformanceConfig)
                .withCacheConfiguration("companyProfile", companyProfileConfig)
                .withCacheConfiguration("investmentOverview", investmentOverviewConfig)
                .withCacheConfiguration("investedStocks", investedStocksConfig)
                .withCacheConfiguration("companyRating", companyRatingConfig)
                .withCacheConfiguration("openPositions", openPositionsConfig)
                .withCacheConfiguration("dataQuote", dataQuoteConfig)
                .withCacheConfiguration("globalQuote", globalQuoteConfig)
                .withCacheConfiguration("quoteOrder", quoteOrderConfig)
                .withCacheConfiguration("historicalRating", historicalRatingConfig)
                .withCacheConfiguration("stockPriceChange", stockPriceChangeConfig)
                .withCacheConfiguration("dividendsCalendar", dividendsCalendarConfig)
                .withCacheConfiguration("dividendsHistorical", dividendsHistoricalConfig)
                .withCacheConfiguration("balanceSheetGrowth", balanceSheetGrowthConfig)
                .withCacheConfiguration("discountedCashFlow", discountedCashFlowConfig)
                .withCacheConfiguration("balanceSheet", balanceSheetConfig)
                .withCacheConfiguration("financialGrowth", financialGrowthConfig)
                .withCacheConfiguration("cashFlowGrowth", cashFlowGrowthConfig)
                .withCacheConfiguration("incomeStatementGrowth", incomeStatementGrowthConfig)
                .withCacheConfiguration("cashFlowStatement", cashFlowStatementConfig)
                .withCacheConfiguration("incomeStatement", incomeStatementConfig)
                .withCacheConfiguration("commoditiesQuote", commoditiesQuoteConfig)
                .withCacheConfiguration("realGDPPerCapita", realGDPPerCapitaConfig)
                .withCacheConfiguration("realGDP", realGDPConfig)
                .withCacheConfiguration("interestRate", interestRateConfig)
                .withCacheConfiguration("inflation", inflationConfig)
                .withCacheConfiguration("forexQuote", forexQuoteConfig)
                .withCacheConfiguration("commodities", commoditiesConfig)
                .withCacheConfiguration("keyMetrics", keyMetricsConfig)
                .withCacheConfiguration("keyMetricsTTM", keyMetricsTTMConfig)
                .withCacheConfiguration("ratiosTTM", ratiosTTMConfig)
                .withCacheConfiguration("earningsCalendar", earningsCalendarConfig)
                .withCacheConfiguration("globalEvents", globalEventsConfig)
                .withCacheConfiguration("earningsSurprises", earningsSurprisesConfig)
                .withCacheConfiguration("newsByTicker", newsByTickerConfig)
                .withCacheConfiguration("generalNews", generalNewsConfig)
                .withCacheConfiguration("mostActivelyTraded", mostActivelyTradedConfig)
                .withCacheConfiguration("topGainers", topGainersConfig)
                .withCacheConfiguration("sectorPerformance", sectorPerformanceConfig)
                .withCacheConfiguration("topLosers", topLosersConfig)
                .withCacheConfiguration("tickerSearch", tickerSearchConfig)
                .build();
    }
}
