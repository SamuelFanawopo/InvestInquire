package com.investinquire.server.service.metrics;

import com.investinquire.server.model.metrics.KeyMetrics;
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
public class KeyMetricsService {

    private static final Logger logger = LoggerFactory.getLogger(KeyMetricsService.class);
    private static final int PAGE_SIZE = 1; // Set page size to 1
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public KeyMetricsService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "keyMetrics", key = "{#ticker, #page}", unless = "#result == null || #result.isEmpty()")
    public List<KeyMetrics> getKeyMetrics(String ticker, Integer page) {
        logger.info("Fetching key metrics for ticker: {}, page: {}", ticker, page);
        String url = "https://financialmodelingprep.com/api/v3/key-metrics/" + ticker + "?period=annual&apikey=" + apiKey;
        KeyMetrics[] response = restTemplate.getForObject(url, KeyMetrics[].class);
        int start = page * PAGE_SIZE;
        List<KeyMetrics> result = response != null ?
                Arrays.stream(response).skip(start).limit(PAGE_SIZE).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched key metrics successfully for ticker: {}, page: {}", ticker, page);
        } else {
            logger.warn("No key metrics data was fetched for ticker: {}, page: {}", ticker, page);
        }
        return result;
    }
}
