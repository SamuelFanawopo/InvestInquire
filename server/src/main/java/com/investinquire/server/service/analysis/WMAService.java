package com.investinquire.server.service.analysis;

import com.investinquire.server.model.analysis.WMA;
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
public class WMAService {

    private static final Logger logger = LoggerFactory.getLogger(WMAService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public WMAService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "wma", key = "{#ticker, #limit}", unless = "#result == null || #result.isEmpty()")
    public List<WMA> getWMA(String ticker, Integer limit){
        logger.info("Fetching WMA for ticker: {}, limit: {}", ticker, limit);
        String url = "https://financialmodelingprep.com/api/v3/technical_indicator/1day/" + ticker +
                "?type=wma&period=10&apikey=" + apiKey;
        WMA[] response = restTemplate.getForObject(url, WMA[].class);
        List<WMA> result = response != null ? Arrays.stream(response).limit(limit).collect(Collectors.toList()) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched WMA data successfully for ticker: {}", ticker);
        } else {
            logger.warn("No WMA data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
