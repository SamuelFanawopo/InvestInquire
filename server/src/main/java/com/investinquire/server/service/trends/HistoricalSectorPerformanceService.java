package com.investinquire.server.service.trends;

import com.investinquire.server.model.trends.HistoricalSectorPerformance;
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
public class HistoricalSectorPerformanceService {

    private static final Logger logger = LoggerFactory.getLogger(HistoricalSectorPerformanceService.class);
    private static final int PAGE_SIZE = 1;
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public HistoricalSectorPerformanceService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "historicalSectorPerformance", key = "#page", unless = "#result == null || #result.isEmpty()")
    public List<HistoricalSectorPerformance> getHistoricalSectorPerformance(Integer page) {
        logger.info("Fetching historical sector performance for page {}", page);
        String url = "https://financialmodelingprep.com/api/v3/historical-sectors-performance?apikey=" + apiKey;
        HistoricalSectorPerformance[] response = restTemplate.getForObject(url, HistoricalSectorPerformance[].class);
        int start = page * PAGE_SIZE;
        List<HistoricalSectorPerformance> result = response != null ?
                Arrays.stream(response).skip(start).limit(PAGE_SIZE).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched historical sector performance successfully for page {}", page);
        } else {
            logger.warn("No historical sector performance data was fetched for page {}", page);
        }
        return result;
    }
}
