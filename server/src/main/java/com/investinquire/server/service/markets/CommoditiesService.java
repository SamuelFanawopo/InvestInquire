package com.investinquire.server.service.markets;

import com.investinquire.server.model.markets.DataType;
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
public class CommoditiesService {

    private static final Logger logger = LoggerFactory.getLogger(CommoditiesService.class);
    private static final int PAGE_SIZE = 12;
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public CommoditiesService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "commodities", key = "#page", unless = "#result == null || #result.isEmpty()")
    public List<DataType> getCommodities(Integer page) {
        logger.info("Fetching available commodities for page {}", page);
        String url = "https://financialmodelingprep.com/api/v3/symbol/available-commodities?apikey=" + apiKey;
        DataType[] response = restTemplate.getForObject(url, DataType[].class);
        int start = page * PAGE_SIZE;
        List<DataType> result = response != null ?
                Arrays.stream(response).skip(start).limit(PAGE_SIZE).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched available commodities successfully for page {}", page);
        } else {
            logger.warn("No commodities data was fetched for page {}", page);
        }
        return result;
    }
}
