package com.investinquire.server.controller.details;


import com.investinquire.server.model.details.StockPriceChange;
import com.investinquire.server.service.details.StockPriceChangeService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class StockPriceChangeController {

    private final StockPriceChangeService stockPriceChangeService;

    public StockPriceChangeController(StockPriceChangeService stockPriceChangeService){
        this.stockPriceChangeService = stockPriceChangeService;
    }

    @QueryMapping
    public List<StockPriceChange> stockPriceChange(@Argument String ticker){
        return stockPriceChangeService.getStockPriceChanges(ticker);
    }

}
