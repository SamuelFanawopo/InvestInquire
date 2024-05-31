package com.investinquire.server.controller.dividends;

import com.investinquire.server.model.dividends.DividendsHistorical;
import com.investinquire.server.service.dividends.DividendsHistoricalService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.Collections;
import java.util.List;

@Controller
public class DividendsHistoricalController {

    private final DividendsHistoricalService dividendsHistoricalService;

    public DividendsHistoricalController(DividendsHistoricalService dividendsHistoricalService){
        this.dividendsHistoricalService = dividendsHistoricalService;
    }

    @QueryMapping
    public List<DividendsHistorical> dividendsHistorical(@Argument String ticker, @Argument Integer page){
        DividendsHistorical historical = dividendsHistoricalService.getDividendsHistorical(ticker, page);
        return Collections.singletonList(historical);
    }
}
