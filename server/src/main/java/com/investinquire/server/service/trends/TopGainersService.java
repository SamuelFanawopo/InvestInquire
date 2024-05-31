package com.investinquire.server.service.trends;

import com.investinquire.server.model.trends.DailyChanges;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Arrays;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TopGainersService {

    private static final Logger logger = LoggerFactory.getLogger(TopGainersService.class);

    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public TopGainersService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "topGainers", key = "'TopGainersCache'", unless = "#result == null || #result.size() == 0")
    public List<DailyChanges> getTopGainers(){
        logger.info("Fetching top gainers from external API");
        String url = "https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=" + apiKey;
        DailyChanges[] response = restTemplate.getForObject(url, DailyChanges[].class);
        List<DailyChanges> result = response != null ?
                Arrays.stream(response).limit(12).collect(Collectors.toList())
                : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched {} top gainers successfully from the API.", result.size());
        } else {
            logger.warn("No top gainers data was fetched from the API.");
        }
        return result;
    }
}
