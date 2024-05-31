package com.investinquire.server.service.analysis;

import com.investinquire.server.model.analysis.DEMA;
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
public class DEMAService {

    private static final Logger logger = LoggerFactory.getLogger(DEMAService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public DEMAService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "dema", key = "{#ticker, #limit}", unless = "#result == null || #result.isEmpty()")
    public List<DEMA> getDEMA(String ticker, Integer limit){
        logger.info("Fetching DEMA for ticker: {}, limit: {}", ticker, limit);
        String url = "https://financialmodelingprep.com/api/v3/technical_indicator/1day/" + ticker +
                "?type=dema&period=10&apikey=" + apiKey;
        DEMA[] response = restTemplate.getForObject(url, DEMA[].class);
        List<DEMA> result = response != null ? Arrays.stream(response).limit(limit).collect(Collectors.toList()) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched DEMA data successfully for ticker: {}", ticker);
        } else {
            logger.warn("No DEMA data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
