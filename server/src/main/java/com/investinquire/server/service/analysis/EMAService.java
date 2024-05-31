package com.investinquire.server.service.analysis;

import com.investinquire.server.model.analysis.EMA;
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
public class EMAService {

    private static final Logger logger = LoggerFactory.getLogger(EMAService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public EMAService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "ema", key = "{#ticker, #limit}", unless = "#result == null || #result.isEmpty()")
    public List<EMA> getEMA(String ticker, Integer limit){
        logger.info("Fetching EMA for ticker: {}, limit: {}", ticker, limit);
        String url = "https://financialmodelingprep.com/api/v3/technical_indicator/1day/" + ticker +
                "?type=ema&period=10&apikey=" + apiKey;
        EMA[] response = restTemplate.getForObject(url, EMA[].class);
        List<EMA> result = response != null ? Arrays.stream(response).limit(limit).collect(Collectors.toList()) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched EMA data successfully for ticker: {}", ticker);
        } else {
            logger.warn("No EMA data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
