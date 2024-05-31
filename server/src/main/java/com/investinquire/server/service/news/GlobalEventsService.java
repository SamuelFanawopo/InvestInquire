package com.investinquire.server.service.news;

import com.investinquire.server.model.news.GlobalEvents;
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
public class GlobalEventsService {

    private static final Logger logger = LoggerFactory.getLogger(GlobalEventsService.class);
    private static final int PAGE_SIZE = 12;
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public GlobalEventsService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "globalEvents", key = "{#from, #to, #page}", unless = "#result == null || #result.isEmpty()")
    public List<GlobalEvents> getGlobalEvents(String from, String to, Integer page){
        logger.info("Fetching global events from {} to {} with page {}", from, to, page);
        String url = "https://financialmodelingprep.com/api/v3/economic_calendar?from=" + from + "&to=" + to + "&apikey=" + apiKey;
        GlobalEvents[] response = restTemplate.getForObject(url, GlobalEvents[].class);
        int start = page * PAGE_SIZE;
        List<GlobalEvents> result = response != null ?
                Arrays.stream(response).skip(start).limit(PAGE_SIZE).collect(Collectors.toList()) :
                Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched {} global events successfully.", result.size());
        } else {
            logger.warn("No global events data was fetched for the period from {} to {}.", from, to);
        }
        return result;
    }
}
