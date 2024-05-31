package com.investinquire.server.service.growth;

import com.investinquire.server.model.growth.CashFlowStatement;
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
public class CashFlowStatementService {

    private static final Logger logger = LoggerFactory.getLogger(CashFlowStatementService.class);
    private static final int PAGE_SIZE = 1; // Set page size to 1
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public CashFlowStatementService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "cashFlowStatement", key = "{#ticker, #page}", unless = "#result == null || #result.isEmpty()")
    public List<CashFlowStatement> getCashFlowStatement(String ticker, Integer page) {
        logger.info("Fetching cash flow statements for ticker: {}, page: {}", ticker, page);
        String url = "https://financialmodelingprep.com/api/v3/cash-flow-statement/" + ticker + "?period=annual&apikey=" + apiKey;
        CashFlowStatement[] response = restTemplate.getForObject(url, CashFlowStatement[].class);
        int start = page * PAGE_SIZE;
        List<CashFlowStatement> result = response != null ?
                Arrays.stream(response).skip(start).limit(PAGE_SIZE).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched cash flow statements successfully for ticker: {}, page: {}", ticker, page);
        } else {
            logger.warn("No cash flow statement data was fetched for ticker: {}, page: {}", ticker, page);
        }
        return result;
    }
}
