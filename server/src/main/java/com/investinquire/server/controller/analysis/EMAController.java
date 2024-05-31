package com.investinquire.server.controller.analysis;

import com.investinquire.server.model.analysis.EMA;
import com.investinquire.server.service.analysis.EMAService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class EMAController {

    private final EMAService emaService;

    public EMAController(EMAService emaService){
        this.emaService = emaService;
    }

    @QueryMapping
    public List<EMA> ema(@Argument String ticker, @Argument Integer limit){
        return emaService.getEMA(ticker, limit);
    }

}
