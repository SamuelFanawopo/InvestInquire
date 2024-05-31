package com.investinquire.server.service.dividends;

import com.investinquire.server.model.dividends.DividendsCalendar;
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
public class DividendsCalendarService {

    private static final Logger logger = LoggerFactory.getLogger(DividendsCalendarService.class);
    private static final int PAGE_SIZE = 12;
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public DividendsCalendarService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "dividendsCalendar", key = "{#from, #to, #page}", unless = "#result == null || #result.isEmpty()")
    public List<DividendsCalendar> getDividendsCalendar(String from, String to, Integer page) {
        logger.info("Fetching dividends calendar data from: {}, to: {}, page: {}", from, to, page);
        String url = "https://financialmodelingprep.com/api/v3/stock_dividend_calendar?from=" + from + "&to=" + to + "&apikey=" + apiKey;
        DividendsCalendar[] response = restTemplate.getForObject(url, DividendsCalendar[].class);
        int start = page * PAGE_SIZE;
        List<DividendsCalendar> result = response != null ?
                Arrays.stream(response).skip(start).limit(PAGE_SIZE).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched dividends calendar successfully from: {}, to: {}, page: {}", from, to, page);
        } else {
            logger.warn("No dividends calendar data was fetched for the period from: {}, to: {}", from, to);
        }
        return result;
    }
}
