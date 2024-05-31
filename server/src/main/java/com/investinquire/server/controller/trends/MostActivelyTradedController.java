package com.investinquire.server.controller.trends;

import com.investinquire.server.model.trends.DailyChanges;
import com.investinquire.server.service.trends.MostActivelyTradedService;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class MostActivelyTradedController {

    private final MostActivelyTradedService mostActivelyTradedService;

    public MostActivelyTradedController(MostActivelyTradedService mostActivelyTradedService){
        this.mostActivelyTradedService = mostActivelyTradedService;
    }

    @QueryMapping
    public List<DailyChanges> mostActivelyTraded(){
        return mostActivelyTradedService.getMostActivelyTraded();
    }

}
