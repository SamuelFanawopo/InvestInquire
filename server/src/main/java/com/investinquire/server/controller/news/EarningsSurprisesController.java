package com.investinquire.server.controller.news;

import com.investinquire.server.model.news.EarningsSurprises;
import com.investinquire.server.service.news.EarningsSurprisesService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class EarningsSurprisesController {

    private final EarningsSurprisesService earningsSurprisesService;

    public EarningsSurprisesController(EarningsSurprisesService earningsSurprisesService){
        this.earningsSurprisesService = earningsSurprisesService;
    }

    @QueryMapping
    public List<EarningsSurprises> earningsSurprises(@Argument String ticker, @Argument Integer limit){
        return earningsSurprisesService.getEarningsSurprises(ticker, limit);
    }
}
