package com.investinquire.server.controller.growth;

import com.investinquire.server.model.growth.FinancialGrowth;
import com.investinquire.server.service.growth.FinancialGrowthService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class FinancialGrowthController {

    private final FinancialGrowthService financialGrowthService;

    public FinancialGrowthController(FinancialGrowthService financialGrowthService){
        this.financialGrowthService = financialGrowthService;
    }

    @QueryMapping
    public List<FinancialGrowth> financialGrowth(@Argument String ticker, @Argument Integer page){
        return financialGrowthService.getFinancialGrowth(ticker, page);
    }
}
