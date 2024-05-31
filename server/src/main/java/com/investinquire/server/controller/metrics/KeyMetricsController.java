package com.investinquire.server.controller.metrics;

import com.investinquire.server.model.metrics.KeyMetrics;
import com.investinquire.server.service.metrics.KeyMetricsService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class KeyMetricsController {

    private final KeyMetricsService keyMetricsService;

    public KeyMetricsController(KeyMetricsService keyMetricsService){
        this.keyMetricsService = keyMetricsService;
    }

    @QueryMapping
    public List<KeyMetrics> keyMetrics(@Argument String ticker, @Argument Integer page){
        return keyMetricsService.getKeyMetrics(ticker, page);
    }

}
