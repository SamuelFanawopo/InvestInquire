package com.investinquire.server.service.metrics;

import com.investinquire.server.model.metrics.KeyMetricsTTM;
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
public class KeyMetricsTTMService {

    private static final Logger logger = LoggerFactory.getLogger(KeyMetricsTTMService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public KeyMetricsTTMService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "keyMetricsTTM", key = "#ticker", unless = "#result == null || #result.isEmpty()")
    public List<KeyMetricsTTM> getKeyMetricsTTM(String ticker){
        logger.info("Fetching TTM key metrics for ticker: {}", ticker);
        String url = "https://financialmodelingprep.com/api/v3/key-metrics-ttm/" + ticker + "?apikey=" + apiKey;
        KeyMetricsTTM[] response = restTemplate.getForObject(url, KeyMetricsTTM[].class);
        List<KeyMetricsTTM> result = response != null ? Arrays.asList(response) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched TTM key metrics successfully for ticker: {}", ticker);
        } else {
            logger.warn("No TTM key metrics data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
