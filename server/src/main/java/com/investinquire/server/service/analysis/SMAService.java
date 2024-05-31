package com.investinquire.server.service.analysis;

import com.investinquire.server.model.analysis.SMA;
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
public class SMAService {

    private static final Logger logger = LoggerFactory.getLogger(SMAService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public SMAService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "sma", key = "{#ticker, #limit}", unless = "#result == null || #result.isEmpty()")
    public List<SMA> getSMA(String ticker, Integer limit){
        logger.info("Fetching SMA for ticker: {}, limit: {}", ticker, limit);
        String url = "https://financialmodelingprep.com/api/v3/technical_indicator/1day/" + ticker +
                "?type=sma&period=10&apikey=" + apiKey;
        SMA[] response = restTemplate.getForObject(url, SMA[].class);
        List<SMA> result = response != null ? Arrays.stream(response).limit(limit).collect(Collectors.toList()) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched SMA data successfully for ticker: {}", ticker);
        } else {
            logger.warn("No SMA data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
