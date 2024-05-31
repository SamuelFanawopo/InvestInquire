package com.investinquire.server.controller.analysis;

import com.investinquire.server.model.analysis.IntradayChart;
import com.investinquire.server.service.analysis.IntradayChartService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class IntradayChartController {

    private final IntradayChartService intradayChartService;

    public IntradayChartController(IntradayChartService intradayChartService){
        this.intradayChartService = intradayChartService;
    }

    @QueryMapping
    public List<IntradayChart> intradayChart(@Argument String ticker, @Argument Integer limit){
        return intradayChartService.getIntradayChart(ticker, limit);
    }

}
