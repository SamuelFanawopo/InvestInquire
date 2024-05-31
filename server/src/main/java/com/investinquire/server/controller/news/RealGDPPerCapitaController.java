package com.investinquire.server.controller.news;

import com.investinquire.server.model.news.RealGDPPerCapitaIndicators;
import com.investinquire.server.service.news.RealGDPPerCapitaService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class RealGDPPerCapitaController {

    private final RealGDPPerCapitaService realGDPPerCapitaService;

    public RealGDPPerCapitaController(RealGDPPerCapitaService realGDPPerCapitaService){
        this.realGDPPerCapitaService = realGDPPerCapitaService;
    }

    @QueryMapping
    public List<RealGDPPerCapitaIndicators> realGDPPerCapita(@Argument Integer page){
        return realGDPPerCapitaService.getRealGDPPerCapitaData(page);
    }
}
