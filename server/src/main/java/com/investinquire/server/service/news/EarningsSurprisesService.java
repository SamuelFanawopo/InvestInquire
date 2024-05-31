package com.investinquire.server.service.news;

import com.investinquire.server.model.news.EarningsSurprises;
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
public class EarningsSurprisesService {

    private static final Logger logger = LoggerFactory.getLogger(EarningsSurprisesService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public EarningsSurprisesService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "earningsSurprises", key = "{#ticker, #limit}", unless = "#result == null || #result.isEmpty()")
    public List<EarningsSurprises> getEarningsSurprises(String ticker, Integer limit){
        logger.info("Fetching earnings surprises for ticker: {}, limit: {}", ticker, limit);
        String url = "https://financialmodelingprep.com/api/v3/earnings-surprises/" + ticker + "?apikey=" + apiKey;
        EarningsSurprises[] response = restTemplate.getForObject(url, EarningsSurprises[].class);
        List<EarningsSurprises> result = response != null ? Arrays.stream(response).limit(limit).collect(Collectors.toList()) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched earnings surprises successfully for ticker: {}", ticker);
        } else {
            logger.warn("No earnings surprises data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
