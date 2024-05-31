package com.investinquire.server.service.details;

import com.investinquire.server.model.details.QuoteOrder;
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
public class QuoteOrderService {

    private static final Logger logger = LoggerFactory.getLogger(QuoteOrderService.class);
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public QuoteOrderService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "quoteOrder", key = "#ticker", unless = "#result == null || #result.isEmpty()")
    public List<QuoteOrder> getQuoteOrder(String ticker){
        logger.info("Fetching quote order data for ticker: {}", ticker);
        String url = "https://financialmodelingprep.com/api/v3/quote-order/" + ticker + "?apikey=" + apiKey;
        QuoteOrder[] response = restTemplate.getForObject(url, QuoteOrder[].class);
        List<QuoteOrder> result = response != null ? Arrays.asList(response) : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched quote order data successfully for ticker: {}", ticker);
        } else {
            logger.warn("No quote order data was fetched for ticker: {}", ticker);
        }
        return result;
    }
}
