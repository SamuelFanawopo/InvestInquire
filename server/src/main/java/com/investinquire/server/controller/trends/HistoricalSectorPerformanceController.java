package com.investinquire.server.controller.trends;

import com.investinquire.server.model.trends.HistoricalSectorPerformance;
import com.investinquire.server.service.trends.HistoricalSectorPerformanceService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class HistoricalSectorPerformanceController {

    private final HistoricalSectorPerformanceService historicalSectorPerformanceService;

    public HistoricalSectorPerformanceController(HistoricalSectorPerformanceService historicalSectorPerformanceService){
        this.historicalSectorPerformanceService = historicalSectorPerformanceService;
    }

    @QueryMapping
    public List<HistoricalSectorPerformance> historicalSectorPerformance(@Argument Integer page){
        return historicalSectorPerformanceService.getHistoricalSectorPerformance(page);
    }
}
