package com.investinquire.server.service.details;

import com.investinquire.server.model.details.GlobalQuote;
import com.investinquire.server.model.details.GlobalQuoteResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.Collections;
import java.util.List;

@Service
public class GlobalQuoteService {

    private static final Logger logger = LoggerFactory.getLogger(GlobalQuoteService.class);
    private final RestTemplate restTemplate;

    @Value("${alphavantage.apikey}")
    private String apiKey;

    public GlobalQuoteService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "globalQuote", key = "#ticker", unless = "#result == null || #result.isEmpty()")
    public List<GlobalQuote> getGlobalQuote(String ticker){
        logger.info("Fetching data quote for ticker: {}", ticker);
        String url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + ticker + "&apikey=" + apiKey;
        GlobalQuoteResponse response = restTemplate.getForObject(url, GlobalQuoteResponse.class);
        GlobalQuote quote = response != null ? response.getGlobalQuote() : null;
        List<GlobalQuote> result = quote != null ? Collections.singletonList(quote) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched data quote successfully for ticker: {}", ticker);
        } else {
            logger.warn("No data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
