package com.investinquire.server.service.details;

import com.investinquire.server.model.details.DataQuote;
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
public class DataQuoteService {
    private static final Logger logger = LoggerFactory.getLogger(DataQuoteService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public DataQuoteService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "dataQuote", key = "#ticker", unless = "#result == null || #result.isEmpty()")
    public List<DataQuote> getDataQuote(String ticker){
        logger.info("Fetching data quote for ticker: {}", ticker);
        String url = "https://financialmodelingprep.com/api/v3/quote/" + ticker + "?apikey=" + apiKey;
        DataQuote[] response = restTemplate.getForObject(url, DataQuote[].class);
        List<DataQuote> result = response != null ? Arrays.asList(response) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched data quote successfully for ticker: {}", ticker);
        } else {
            logger.warn("No data quote was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
