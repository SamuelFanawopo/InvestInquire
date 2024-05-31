package com.investinquire.server.service.details;

import com.investinquire.server.model.details.CompanyProfile;
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
public class CompanyProfileService {

    private static final Logger logger = LoggerFactory.getLogger(CompanyProfileService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public CompanyProfileService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "companyProfile", key = "#ticker", unless = "#result == null || #result.isEmpty()")
    public List<CompanyProfile> getCompanyProfile(String ticker){
        logger.info("Fetching company profile for ticker: {}", ticker);
        String url = "https://financialmodelingprep.com/api/v3/profile/" + ticker + "?apikey=" + apiKey;
        CompanyProfile[] response = restTemplate.getForObject(url, CompanyProfile[].class);
        List<CompanyProfile> result = response != null ? Arrays.asList(response) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched company profile successfully for ticker: {}", ticker);
        } else {
            logger.warn("No company profile data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
