package com.investinquire.server.service.growth;

import com.investinquire.server.model.growth.BalanceSheet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BalanceSheetService {

    private static final Logger logger = LoggerFactory.getLogger(BalanceSheetService.class);
    private static final int PAGE_SIZE = 1; // Set page size to 1
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public BalanceSheetService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "balanceSheet", key = "{#ticker, #page}", unless = "#result == null || #result.isEmpty()")
    public List<BalanceSheet> getBalanceSheet(String ticker, Integer page) {
        logger.info("Fetching balance sheet data for ticker: {}, page: {}", ticker, page);
        String url = "https://financialmodelingprep.com/api/v3/balance-sheet-statement/" + ticker + "?period=annual&apikey=" + apiKey;
        BalanceSheet[] response = restTemplate.getForObject(url, BalanceSheet[].class);
        int start = page * PAGE_SIZE;
        List<BalanceSheet> result = response != null ?
                Arrays.stream(response).skip(start).limit(PAGE_SIZE).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched balance sheet data successfully for ticker: {}, page: {}", ticker, page);
        } else {
            logger.warn("No balance sheet data was fetched for ticker: {}, page: {}", ticker, page);
        }
        return result;
    }
}
