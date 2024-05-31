package com.investinquire.server.controller.metrics;

import com.investinquire.server.model.metrics.RatiosTTM;
import com.investinquire.server.service.metrics.RatiosTTMService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class RatiosTTMController {

    private final RatiosTTMService ratiosTTMService;

    public RatiosTTMController(RatiosTTMService ratiosTTMService){
        this.ratiosTTMService = ratiosTTMService;
    }

    @QueryMapping
    public List<RatiosTTM> ratiosTTM(@Argument String ticker){
        return ratiosTTMService.getRatiosTTM(ticker);
    }

}
