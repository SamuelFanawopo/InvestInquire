package com.investinquire.server.service.analysis;

import com.investinquire.server.model.analysis.IntradayChart;
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
public class IntradayChartService {

    private static final Logger logger = LoggerFactory.getLogger(IntradayChartService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public IntradayChartService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "intradayChart", key = "{#ticker, #limit}", unless = "#result == null || #result.isEmpty()")
    public List<IntradayChart> getIntradayChart(String ticker, Integer limit){
        logger.info("Fetching intraday chart for ticker: {}, limit: {}", ticker, limit);
        String url = "https://financialmodelingprep.com/api/v3/historical-chart/4hour/" + ticker + "?serietype=line&apikey=" + apiKey;
        IntradayChart[] response = restTemplate.getForObject(url, IntradayChart[].class);
        List<IntradayChart> result = response != null ? Arrays.stream(response).limit(limit).collect(Collectors.toList()) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched intraday chart data successfully for ticker: {}", ticker);
        } else {
            logger.warn("No intraday chart data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
