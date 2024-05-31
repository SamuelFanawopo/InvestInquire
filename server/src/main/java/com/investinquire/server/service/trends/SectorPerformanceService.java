package com.investinquire.server.service.trends;

import com.investinquire.server.model.trends.SectorPerformance;
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
public class SectorPerformanceService {

    private static final Logger logger = LoggerFactory.getLogger(SectorPerformanceService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public SectorPerformanceService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "sectorPerformance", key = "'SectorPerformanceCache'", unless = "#result == null || #result.isEmpty()")
    public List<SectorPerformance> getSectorPerformance(){
        logger.info("Fetching sector performance from external API");
        String url = "https://financialmodelingprep.com/api/v3/sectors-performance?apikey=" + apiKey;
        SectorPerformance[] response = restTemplate.getForObject(url, SectorPerformance[].class);
        List<SectorPerformance> result = response != null ? Arrays.asList(response) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched sector performance data successfully from the API.");
        } else {
            logger.warn("No sector performance data was fetched from the API.");
        }
        return result;
    }
}
