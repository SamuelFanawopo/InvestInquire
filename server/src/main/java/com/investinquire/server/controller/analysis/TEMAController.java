package com.investinquire.server.controller.analysis;

import com.investinquire.server.model.analysis.TEMA;
import com.investinquire.server.service.analysis.TEMAService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class TEMAController {

    private final TEMAService temaService;

    public TEMAController(TEMAService temaService){
        this.temaService = temaService;
    }

    @QueryMapping
    public List<TEMA> tema(@Argument String ticker, @Argument Integer limit){
        return temaService.getTEMA(ticker, limit);
    }
}
