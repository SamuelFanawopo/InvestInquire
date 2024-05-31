package com.investinquire.server.service.news;

import com.investinquire.server.model.news.EarningsCalendar;
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
public class EarningsCalendarService {

    private static final Logger logger = LoggerFactory.getLogger(EarningsCalendarService.class);
    private static final int PAGE_SIZE = 12;
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public EarningsCalendarService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "earningsCalendar", key = "{#from, #to, #page}", unless = "#result == null || #result.isEmpty()")
    public List<EarningsCalendar> getEarningsCalendar(String from, String to, Integer page) {
        logger.info("Fetching earnings calendar from {} to {}, page: {}", from, to, page);
        String url = "https://financialmodelingprep.com/api/v3/earning_calendar?from=" + from + "&to=" + to + "&apikey=" + apiKey;
        EarningsCalendar[] response = restTemplate.getForObject(url, EarningsCalendar[].class);
        int start = page * PAGE_SIZE;
        List<EarningsCalendar> result = response != null ?
                Arrays.stream(response).skip(start).limit(PAGE_SIZE).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched earnings calendar successfully from {} to {}, page: {}", from, to, page);
        } else {
            logger.warn("No earnings calendar data was fetched for the period from {} to {}.", from, to);
        }
        return result;
    }
}
