package com.investinquire.server.service.growth;

import com.investinquire.server.model.growth.IncomeStatementGrowth;
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
public class IncomeStatementGrowthService {

    private static final Logger logger = LoggerFactory.getLogger(IncomeStatementGrowthService.class);
    private static final int PAGE_SIZE = 1; // Set page size to 1
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public IncomeStatementGrowthService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "incomeStatementGrowth", key = "{#ticker, #page}", unless = "#result == null || #result.isEmpty()")
    public List<IncomeStatementGrowth> getIncomeStatementGrowth(String ticker, Integer page) {
        logger.info("Fetching income statement growth data for ticker: {}, page: {}", ticker, page);
        String url = "https://financialmodelingprep.com/api/v3/income-statement-growth/" + ticker + "?period=annual&apikey=" + apiKey;
        IncomeStatementGrowth[] response = restTemplate.getForObject(url, IncomeStatementGrowth[].class);
        int start = page * PAGE_SIZE;
        List<IncomeStatementGrowth> result = response != null ?
                Arrays.stream(response).skip(start).limit(PAGE_SIZE).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched income statement growth data successfully for ticker: {}, page: {}", ticker, page);
        } else {
            logger.warn("No income statement growth data was fetched for ticker: {}, page: {}", ticker, page);
        }
        return result;
    }
}
