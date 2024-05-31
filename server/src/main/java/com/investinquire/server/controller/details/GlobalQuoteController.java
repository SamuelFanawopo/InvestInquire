package com.investinquire.server.controller.details;

import com.investinquire.server.model.details.GlobalQuote;
import com.investinquire.server.service.details.GlobalQuoteService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class GlobalQuoteController {

    private final GlobalQuoteService globalQuoteService;

    public GlobalQuoteController(GlobalQuoteService globalQuoteService){
        this.globalQuoteService = globalQuoteService;
    }

    @QueryMapping
    public List<GlobalQuote> globalQuote(@Argument String ticker){
        return globalQuoteService.getGlobalQuote(ticker);
    }
}
