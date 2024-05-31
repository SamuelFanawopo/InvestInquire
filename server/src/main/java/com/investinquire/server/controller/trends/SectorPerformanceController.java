package com.investinquire.server.controller.trends;

import com.investinquire.server.model.trends.SectorPerformance;
import com.investinquire.server.service.trends.SectorPerformanceService;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class SectorPerformanceController {

    private final SectorPerformanceService sectorPerformanceService;

    public SectorPerformanceController(SectorPerformanceService sectorPerformanceService){
        this.sectorPerformanceService = sectorPerformanceService;
    }

    @QueryMapping
    public List<SectorPerformance> sectorPerformance(){
        return sectorPerformanceService.getSectorPerformance();
    }
}
