package com.investinquire.server.controller.trends;

import com.investinquire.server.model.trends.DailyChanges;
import com.investinquire.server.service.trends.TopLosersService;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class TopLosersController {

    private final TopLosersService topLosersService;

    public TopLosersController(TopLosersService topLosersService){
        this.topLosersService = topLosersService;
    }

    @QueryMapping
    public List<DailyChanges> topLosers(){
        return topLosersService.getTopLosers();
    }
}
