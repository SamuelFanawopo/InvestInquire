package com.investinquire.server.controller.details;

import com.investinquire.server.model.details.InvestedStocks;
import com.investinquire.server.service.details.InvestedStocksService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
public class InvestedStocksController {

    private final InvestedStocksService investedStocksService;

    public InvestedStocksController(InvestedStocksService investedStocksService){
        this.investedStocksService = investedStocksService;
    }

    @QueryMapping
    public InvestedStocks investedStocks(@Argument String ticker){
        return investedStocksService.getInvestedStocks(ticker);
    }
}
