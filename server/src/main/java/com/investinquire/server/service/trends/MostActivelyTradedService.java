package com.investinquire.server.service.trends;

import com.investinquire.server.model.trends.DailyChanges;
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
public class MostActivelyTradedService {

    private static final Logger logger = LoggerFactory.getLogger(MostActivelyTradedService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public MostActivelyTradedService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "mostActivelyTraded", key = "'MostActivelyTradedCache'", unless = "#result == null || #result.isEmpty()")
    public List<DailyChanges> getMostActivelyTraded() {
        logger.info("Fetching most actively traded stocks from external API");
        String url = "https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=" + apiKey;
        DailyChanges[] response = restTemplate.getForObject(url, DailyChanges[].class);
        List<DailyChanges> result = response != null ?
                Arrays.stream(response).limit(12).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched {} most actively traded stocks successfully from the API.", result.size());
        } else {
            logger.warn("No data was fetched for the most actively traded stocks.");
        }
        return result;
    }
}
