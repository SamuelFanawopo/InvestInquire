package com.investinquire.server.controller.markets;

import com.investinquire.server.model.markets.DataTypeQuote;
import com.investinquire.server.service.markets.ForexQuoteService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ForexQuoteController {

    private final ForexQuoteService forexQuoteService;

    public ForexQuoteController(ForexQuoteService forexQuoteService){
        this.forexQuoteService = forexQuoteService;
    }

    @QueryMapping
    public List<DataTypeQuote> forexQuote(@Argument String ticker){
        return forexQuoteService.getForexQuote(ticker);
    }

}
