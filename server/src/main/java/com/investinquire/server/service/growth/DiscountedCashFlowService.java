package com.investinquire.server.service.growth;

import com.investinquire.server.model.growth.DiscountedCashFlow;
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
public class DiscountedCashFlowService {

    private static final Logger logger = LoggerFactory.getLogger(DiscountedCashFlowService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public DiscountedCashFlowService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "discountedCashFlow", key = "#ticker", unless = "#result == null || #result.isEmpty()")
    public List<DiscountedCashFlow> getDiscountedCashFlow(String ticker){
        logger.info("Fetching discounted cash flow data for ticker: {}", ticker);
        String url = "https://financialmodelingprep.com/api/v3/discounted-cash-flow/" + ticker + "?apikey=" + apiKey;
        DiscountedCashFlow[] response = restTemplate.getForObject(url, DiscountedCashFlow[].class);
        List<DiscountedCashFlow> result = response != null ? Arrays.asList(response) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched discounted cash flow data successfully for ticker: {}", ticker);
        } else {
            logger.warn("No discounted cash flow data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
