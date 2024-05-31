package com.investinquire.server.service.dividends;

import com.investinquire.server.model.dividends.DividendsHistorical;
import com.investinquire.server.model.dividends.DividendRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DividendsHistoricalService {

    private static final Logger logger = LoggerFactory.getLogger(DividendsHistoricalService.class);
    private static final int PAGE_SIZE = 1; // Set page size to 1
    private final RestTemplate restTemplate;

    @Value("${financialmodelingprep.apikey}")
    private String apiKey;

    public DividendsHistoricalService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable(value = "dividendsHistorical", key = "{#ticker, #page}", unless = "#result == null || #result.getHistorical().isEmpty()")
    public DividendsHistorical getDividendsHistorical(String ticker, Integer page) {
        logger.info("Fetching historical dividends data for ticker: {}, page: {}", ticker, page);
        String url = "https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/" + ticker + "?apikey=" + apiKey;
        DividendsHistorical response = restTemplate.getForObject(url, DividendsHistorical.class);

        if (response != null && response.getHistorical() != null) {
            int start = page * PAGE_SIZE;
            List<DividendRecord> pagedHistorical = response.getHistorical().stream()
                    .skip(start)
                    .limit(PAGE_SIZE)
                    .collect(Collectors.toList());
            return new DividendsHistorical(response.getSymbol(), pagedHistorical);
        } else {
            logger.warn("No historical dividends data was fetched for ticker: {}, page: {}", ticker, page);
            return new DividendsHistorical(response != null ? response.getSymbol() : ticker, Collections.emptyList());
        }
    }
}
