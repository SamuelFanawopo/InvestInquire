package com.investinquire.server.service.details;

import com.investinquire.server.model.details.InvestmentOverview;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Objects;

@Service
public class InvestmentOverviewService {

    private final RestTemplate restTemplate;
    private static final Logger logger = LoggerFactory.getLogger(InvestmentOverviewService.class);

    @Value("${trading212.apikey}")
    private String apiKey;

    @Autowired
    public InvestmentOverviewService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "investmentOverview", unless = "#result == null")
    public InvestmentOverview getInvestmentOverview(){
        logger.info("Fetching investment overview from Trading212");
        String url = "https://demo.trading212.com/api/v0/equity/account/cash";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", apiKey);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        try {
            ResponseEntity<InvestmentOverview> response = restTemplate.exchange(
                    url, HttpMethod.GET, entity, InvestmentOverview.class);
            logger.info("Response status code: {}", response.getStatusCode().value());
            return Objects.requireNonNull(response.getBody());
        } catch (HttpClientErrorException e) {
            logger.error("HTTP Error: {}", e.getStatusCode());
            logger.error("Response Body: {}", e.getResponseBodyAsString());
            throw e;
        } catch (RestClientException e) {
            logger.error("General Error: {}", e.getMessage());
            throw e;
        }
    }
}
