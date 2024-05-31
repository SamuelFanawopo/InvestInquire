package com.investinquire.server.service.details;

import com.investinquire.server.model.details.OpenPositions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class OpenPositionsService {

    private final RestTemplate restTemplate;

    private static final Logger logger = LoggerFactory.getLogger(OpenPositionsService.class);

    @Value("${trading212.apikey}")
    private String apiKey;

    @Autowired
    public OpenPositionsService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "openPositions", unless = "#result == null || #result.isEmpty()")
    public List<OpenPositions> getOpenPositions(){
        logger.info("Fetching open positions from Trading212");
        String url = "https://demo.trading212.com/api/v0/equity/portfolio";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", apiKey);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<OpenPositions[]> response = restTemplate.exchange(
                url, HttpMethod.GET, entity, OpenPositions[].class);

        List<OpenPositions> result = response.getBody() != null ? Arrays.asList(response.getBody()) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched open positions successfully");
        } else {
            logger.warn("No open positions data was fetched");
        }
        return result;
    }
}
