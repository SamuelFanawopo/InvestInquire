package com.investinquire.server.service.metrics;

import com.investinquire.server.model.metrics.RatiosTTM;
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
public class RatiosTTMService {

    private static final Logger logger = LoggerFactory.getLogger(RatiosTTMService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public RatiosTTMService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "ratiosTTM", key = "#ticker", unless = "#result == null || #result.isEmpty()")
    public List<RatiosTTM> getRatiosTTM(String ticker){
        logger.info("Fetching TTM ratios for ticker: {}", ticker);
        String url = "https://financialmodelingprep.com/api/v3/ratios-ttm/" + ticker + "?apikey=" + apiKey;
        RatiosTTM[] response = restTemplate.getForObject(url, RatiosTTM[].class);
        List<RatiosTTM> result = response != null ? Arrays.asList(response) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched TTM ratios successfully for ticker: {}", ticker);
        } else {
            logger.warn("No TTM ratios data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
