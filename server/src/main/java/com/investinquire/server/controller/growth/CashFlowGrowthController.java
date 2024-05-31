package com.investinquire.server.controller.growth;

import com.investinquire.server.model.growth.CashFlowGrowth;
import com.investinquire.server.service.growth.CashFlowGrowthService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class CashFlowGrowthController {

    private final CashFlowGrowthService cashFlowGrowthService;

    public CashFlowGrowthController(CashFlowGrowthService cashFlowGrowthService){
        this.cashFlowGrowthService = cashFlowGrowthService;
    }

    @QueryMapping
    public List<CashFlowGrowth> cashFlowGrowth(@Argument String ticker, @Argument Integer page){
        return cashFlowGrowthService.getCashFlowGrowth(ticker, page);
    }

}
