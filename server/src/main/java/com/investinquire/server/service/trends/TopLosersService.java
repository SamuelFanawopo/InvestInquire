package com.investinquire.server.service.trends;

import com.investinquire.server.model.trends.DailyChanges;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Arrays;
import java.util.List;
import java.util.Collections;
import java.util.stream.Collectors;

@Service
public class TopLosersService {

    private static final Logger logger = LoggerFactory.getLogger(TopLosersService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public TopLosersService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "topLosers", key = "'TopLosersCache'", unless = "#result == null || #result.isEmpty()")
    public List<DailyChanges> getTopLosers() {
        logger.info("Fetching top losers from external API");
        String url = "https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=" + apiKey;
        DailyChanges[] response = restTemplate.getForObject(url, DailyChanges[].class);
        List<DailyChanges> result = response != null ?
                Arrays.stream(response).limit(12).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched {} top losers successfully from the API.", result.size());
        } else {
            logger.warn("No top losers data was fetched from the API.");
        }
        return result;
    }
}
