package com.investinquire.server.service.markets;

import com.investinquire.server.model.markets.DataTypeQuote;
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
public class CommoditiesQuoteService {

    private static final Logger logger = LoggerFactory.getLogger(CommoditiesQuoteService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public CommoditiesQuoteService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "commoditiesQuote", key = "#ticker", unless = "#result == null || #result.isEmpty()")
    public List<DataTypeQuote> getCommoditiesQuote(String ticker){
        logger.info("Fetching commodity quote for ticker: {}", ticker);
        String url = "https://financialmodelingprep.com/api/v3/quote/" + ticker + "?apikey=" + apiKey;
        DataTypeQuote[] response = restTemplate.getForObject(url, DataTypeQuote[].class);
        List<DataTypeQuote> result = response != null ? Arrays.asList(response) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched commodity quote successfully for ticker: {}", ticker);
        } else {
            logger.warn("No commodity quote data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
