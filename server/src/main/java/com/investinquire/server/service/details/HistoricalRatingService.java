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
import java.util.stream.Collectors;

@Service
public class HistoricalRatingService {

    private final RestTemplate restTemplate;
    private static final Logger logger = LoggerFactory.getLogger(HistoricalRatingService.class);
    private static final int PAGE_SIZE = 1; // Set page size to 1

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public HistoricalRatingService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "historicalRating", key = "{#ticker, #page}", unless = "#result == null || #result.isEmpty()")
    public List<CompanyRating> getHistoricalRating(String ticker, Integer page) {
        logger.info("Fetching historical ratings for ticker: {}, page: {}", ticker, page);
        String url = "https://financialmodelingprep.com/api/v3/historical-rating/" + ticker + "?apikey=" + apiKey;
        CompanyRating[] response = restTemplate.getForObject(url, CompanyRating[].class);
        int start = page * PAGE_SIZE;
        List<CompanyRating> result = response != null ?
                Arrays.stream(response).skip(start).limit(PAGE_SIZE).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched historical ratings successfully for ticker: {}, page: {}", ticker, page);
        } else {
            logger.warn("No historical ratings data was fetched for ticker: {}, page: {}", ticker, page);
        }
        return result;
    }
}
