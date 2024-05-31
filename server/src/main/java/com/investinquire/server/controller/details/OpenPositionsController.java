package com.investinquire.server.controller.details;

import com.investinquire.server.model.details.OpenPositions;
import com.investinquire.server.service.details.OpenPositionsService;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class OpenPositionsController {

    private final OpenPositionsService openPositionsService;

    public OpenPositionsController(OpenPositionsService openPositionsService){
        this.openPositionsService = openPositionsService;
    }

    @QueryMapping
    public List<OpenPositions> openPositions(){
        return openPositionsService.getOpenPositions();
    }
}
