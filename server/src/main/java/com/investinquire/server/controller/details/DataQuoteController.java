package com.investinquire.server.controller.details;

import com.investinquire.server.model.details.DataQuote;
import com.investinquire.server.service.details.DataQuoteService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class DataQuoteController {

    private final DataQuoteService dataQuoteService;

    public DataQuoteController(DataQuoteService dataQuoteService){
        this.dataQuoteService = dataQuoteService;
    }

    @QueryMapping
    public List<DataQuote> dataQuote(@Argument String ticker){
        return dataQuoteService.getDataQuote(ticker);
    }
}
