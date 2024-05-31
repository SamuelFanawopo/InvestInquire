package com.investinquire.server.service.analysis;

import com.investinquire.server.model.analysis.TEMA;
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
public class TEMAService {

    private static final Logger logger = LoggerFactory.getLogger(TEMAService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public TEMAService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "tema", key = "{#ticker, #limit}", unless = "#result == null || #result.isEmpty()")
    public List<TEMA> getTEMA(String ticker, Integer limit){
        logger.info("Fetching TEMA for ticker: {}, limit: {}", ticker, limit);
        String url = "https://financialmodelingprep.com/api/v3/technical_indicator/1day/" + ticker +
                "?type=tema&period=10&apikey=" + apiKey;
        TEMA[] response = restTemplate.getForObject(url, TEMA[].class);
        List<TEMA> result = response != null ? Arrays.stream(response).limit(limit).collect(Collectors.toList()) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched TEMA data successfully for ticker: {}", ticker);
        } else {
            logger.warn("No TEMA data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
