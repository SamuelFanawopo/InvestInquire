package com.investinquire.server.service.details;

import com.investinquire.server.model.details.CompanyRating;
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
public class CompanyRatingService {

    private static final Logger logger = LoggerFactory.getLogger(CompanyRatingService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public CompanyRatingService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "companyRating", key = "#ticker", unless = "#result == null || #result.isEmpty()")
    public List<CompanyRating> getCompanyRating(String ticker){
        logger.info("Fetching company rating for ticker: {}", ticker);
        String url = "https://financialmodelingprep.com/api/v3/rating/" + ticker + "?apikey=" + apiKey;
        CompanyRating[] response = restTemplate.getForObject(url, CompanyRating[].class);
        List<CompanyRating> result = response != null ? Arrays.asList(response) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched company rating successfully for ticker: {}", ticker);
        } else {
            logger.warn("No company rating data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
