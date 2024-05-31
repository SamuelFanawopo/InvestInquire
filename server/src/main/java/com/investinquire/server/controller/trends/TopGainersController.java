package com.investinquire.server.controller.trends;

import com.investinquire.server.model.trends.DailyChanges;
import com.investinquire.server.service.trends.TopGainersService;

import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class TopGainersController {

    private final TopGainersService topGainersService;

    public TopGainersController(TopGainersService topGainersService){
        this.topGainersService = topGainersService;
    }

    @QueryMapping
    public List<DailyChanges> topGainers(){
        return topGainersService.getTopGainers();
    }
}
