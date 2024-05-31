package com.investinquire.server.service.news;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.investinquire.server.model.news.RealGDPPerCapitaIndicators;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class RealGDPPerCapitaService {

    private static final Logger logger = LoggerFactory.getLogger(RealGDPPerCapitaService.class);
    private final RestTemplate restTemplate;
    private static final int PAGE_SIZE = 1;
    private final ObjectMapper objectMapper;

    @Value("${alphavantage.apikey}")
    private String apiKey;

    public RealGDPPerCapitaService(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    @Cacheable(value = "realGDPPerCapita", key = "#page", unless = "#result == null || #result.isEmpty()")
    public List<RealGDPPerCapitaIndicators> getRealGDPPerCapitaData(Integer page) {
        int start = page * PAGE_SIZE;
        String url = "https://www.alphavantage.co/query?function=REAL_GDP_PER_CAPITA&apikey=" + apiKey;
        try {
            ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
            if (responseEntity.getStatusCode().is2xxSuccessful() && responseEntity.getBody() != null) {
                JsonNode root = objectMapper.readTree(responseEntity.getBody());
                JsonNode dataArray = root.path("data");
                if (!dataArray.isMissingNode()) {
                    return StreamSupport.stream(dataArray.spliterator(), false)
                            .map(node -> {
                                RealGDPPerCapitaIndicators indicator = new RealGDPPerCapitaIndicators();
                                indicator.setDate(node.path("date").asText(null));
                                indicator.setValue(node.path("value").asText(null));
                                return indicator;
                            })
                            .skip(start).limit(PAGE_SIZE)
                            .collect(Collectors.toList());
                } else {
                    logger.error("Data node is missing in the response");
                }
            } else {
                logger.error("Failed to fetch data: HTTP {}", responseEntity.getStatusCode());
            }
        } catch (Exception e) {
            logger.error("Exception when parsing JSON response", e);
        }
        return Collections.emptyList();
    }
}
