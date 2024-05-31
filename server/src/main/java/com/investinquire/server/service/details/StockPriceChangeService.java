package com.investinquire.server.service.details;

import com.investinquire.server.model.details.StockPriceChange;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class StockPriceChangeService {

    private static final Logger logger = LoggerFactory.getLogger(StockPriceChangeService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public StockPriceChangeService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "stockPriceChanges", key = "#ticker", unless = "#result == null || #result.isEmpty()")
    public List<StockPriceChange> getStockPriceChanges(String ticker){
        logger.info("Fetching stock price changes for ticker: {}", ticker);
        String url = "https://financialmodelingprep.com/api/v3/stock-price-change/" + ticker + "?apikey=" + apiKey;
        StockPriceChange[] response = restTemplate.getForObject(url, StockPriceChange[].class);
        List<StockPriceChange> result = response != null ? Arrays.asList(response) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched stock price changes successfully for ticker: {}", ticker);
        } else {
            logger.warn("No stock price change data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
