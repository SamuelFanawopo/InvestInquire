package com.investinquire.server.service.news;

import com.investinquire.server.model.news.News;
import com.investinquire.server.model.news.NewsFormat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;

@Service
public class NewsByTickerService {

    private static final Logger logger = LoggerFactory.getLogger(NewsByTickerService.class);
    private final RestTemplate restTemplate;

    @Value("${marketaux.apikey}")
    private String apiKey;

    public NewsByTickerService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "newsByTicker", key = "{#ticker, #page}", unless = "#result == null || #result.isEmpty()")
    public List<News> getNewsByTicker(String ticker, Integer page){
        logger.info("Fetching news for ticker: {}, page: {}", ticker, page);
        String url = "https://api.marketaux.com/v1/news/all?group_similar=true&language=en&countries=us,gb&exclude_domains=gurufocus.com,investing.com,insidermonkey.com,seekingalpha.com,marketscreener.com,globenewswire.com&symbols=" + ticker + "&must_have_entities=true&page=" + page + "&api_token=" + apiKey;
        NewsFormat response = restTemplate.getForObject(url, NewsFormat.class);
        List<News> result = response != null ? response.getData() : Collections.emptyList();

        if (!result.isEmpty()) {
            logger.info("Fetched news successfully for ticker: {}, page: {}", ticker, page);
        } else {
            logger.warn("No news data was fetched for ticker: {}, page: {}", ticker, page);
        }
        return result;
    }
}

