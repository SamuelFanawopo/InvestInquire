package com.investinquire.server.controller.markets;

import com.investinquire.server.model.markets.DataTypeQuote;
import com.investinquire.server.service.markets.CommoditiesQuoteService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class CommoditiesQuoteController {

    private final CommoditiesQuoteService commoditiesQuoteService;

    public CommoditiesQuoteController(CommoditiesQuoteService commoditiesQuoteService){
        this.commoditiesQuoteService = commoditiesQuoteService;
    }

    @QueryMapping
    public List<DataTypeQuote> commoditiesQuote(@Argument String ticker){
        return commoditiesQuoteService.getCommoditiesQuote(ticker);
    }

}
