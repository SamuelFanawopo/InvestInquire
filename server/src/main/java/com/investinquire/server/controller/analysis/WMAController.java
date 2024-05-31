package com.investinquire.server.controller.analysis;

import com.investinquire.server.model.analysis.WMA;
import com.investinquire.server.service.analysis.WMAService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class WMAController {

    private final WMAService wmaService;

    public WMAController(WMAService wmaService){
        this.wmaService = wmaService;
    }

    @QueryMapping
    public List<WMA> wma(@Argument String ticker, @Argument Integer limit){
        return wmaService.getWMA(ticker, limit);
    }

}
