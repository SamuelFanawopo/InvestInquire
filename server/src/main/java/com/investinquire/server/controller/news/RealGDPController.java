package com.investinquire.server.controller.news;

import com.investinquire.server.model.news.RealGDPIndicators;
import com.investinquire.server.service.news.RealGDPService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class RealGDPController {

    private final RealGDPService realGDPService;

    public RealGDPController(RealGDPService realGDPService){
        this.realGDPService = realGDPService;
    }

    @QueryMapping
    public List<RealGDPIndicators> realGDP(@Argument Integer page){
        return realGDPService.getRealGDPData(page);
    }
}
