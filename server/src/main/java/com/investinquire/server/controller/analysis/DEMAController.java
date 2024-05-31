package com.investinquire.server.controller.analysis;

import com.investinquire.server.model.analysis.DEMA;
import com.investinquire.server.service.analysis.DEMAService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class DEMAController {

    private final DEMAService demaService;

    public DEMAController(DEMAService demaService){
        this.demaService = demaService;
    }

    @QueryMapping
    public List<DEMA> dema(@Argument String ticker, @Argument Integer limit){
        return demaService.getDEMA(ticker, limit);
    }
}
