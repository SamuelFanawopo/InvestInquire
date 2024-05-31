package com.investinquire.server.controller.analysis;

import com.investinquire.server.service.analysis.SMAService;
import com.investinquire.server.model.analysis.SMA;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class SMAController {

    private final SMAService smaService;

    public SMAController(SMAService smaService){
        this.smaService = smaService;
    }

    @QueryMapping
    public List<SMA> sma(@Argument String ticker, @Argument Integer limit){
        return smaService.getSMA(ticker, limit);
    }

}
