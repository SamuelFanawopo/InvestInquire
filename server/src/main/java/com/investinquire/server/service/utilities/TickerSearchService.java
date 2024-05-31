package com.investinquire.server.service.utilities;

import com.investinquire.server.model.utilities.SymbolList;
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
public class TickerSearchService {

    private static final Logger logger = LoggerFactory.getLogger(TickerSearchService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public TickerSearchService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "symbolList", key = "{#ticker, #limit}", unless = "#result == null || #result.isEmpty()")
    public List<SymbolList> getSymbolList(String ticker, Integer limit){
        logger.info("Fetching symbols for query: {}, with limit: {}", ticker, limit);
        String url = "https://financialmodelingprep.com/api/v3/search-ticker?query=" + ticker + "&limit=" + limit + "&apikey=" + apiKey;
        SymbolList[] response = restTemplate.getForObject(url, SymbolList[].class);
        List<SymbolList> result = response != null ? Arrays.asList(response) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched symbol list successfully for query: {}, with limit: {}", ticker, limit);
        } else {
            logger.warn("No symbols found for query: {}, with limit: {}", ticker, limit);
        }
        return result;
    }
}
