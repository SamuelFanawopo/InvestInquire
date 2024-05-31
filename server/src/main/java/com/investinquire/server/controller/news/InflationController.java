package com.investinquire.server.controller.news;

import com.investinquire.server.model.news.InflationIndicators;
import com.investinquire.server.service.news.InflationService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class InflationController {

    private final InflationService inflationService;

    public InflationController(InflationService inflationService){
        this.inflationService = inflationService;
    }

    @QueryMapping
    public List<InflationIndicators> inflation(@Argument Integer page){
        return inflationService.getInflationData(page);
    }
}
