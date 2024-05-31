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
public class GeneralNewsService {

    private static final Logger logger = LoggerFactory.getLogger(GeneralNewsService.class);
    private final RestTemplate restTemplate;

    @Value("${marketaux.apikey}")
    private String apiKey;

    public GeneralNewsService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "generalNews", key = "#page", unless = "#result == null || #result.isEmpty()")
    public List<News> getGeneralNews(Integer page){
        logger.info("Fetching general news for page: {}", page);
        String url = "https://api.marketaux.com/v1/news/all?group_similar=true&language=en&countries=us,gb&exclude_domains=gurufocus.com,investing.com,seekingalpha.com,marketscreener.com,globenewswire.com&page=" + page + "&api_token=" + apiKey;
        NewsFormat response = restTemplate.getForObject(url, NewsFormat.class);
        List<News> result = response != null ? response.getData() : Collections.emptyList();
        if (!result.isEmpty()) {
            logger.info("Fetched general news successfully for page: {}", page);
        } else {
            logger.warn("No general news data was fetched for page: {}", page);
        }
        return result;
    }
}
