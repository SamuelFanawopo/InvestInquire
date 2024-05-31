package com.investinquire.server.controller.utilities;

import com.investinquire.server.model.utilities.SymbolList;
import com.investinquire.server.service.utilities.TickerSearchService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class TickerSearchController {

    private final TickerSearchService tickerSearchService;

    public TickerSearchController(TickerSearchService tickerSearchService){
        this.tickerSearchService = tickerSearchService;
    }

    @QueryMapping
    public List<SymbolList> tickerSearch(@Argument String ticker, @Argument Integer limit){
        return tickerSearchService.getSymbolList(ticker, limit);
    }

}
