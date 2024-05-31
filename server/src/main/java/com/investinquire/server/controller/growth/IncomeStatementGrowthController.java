package com.investinquire.server.controller.growth;


import com.investinquire.server.model.growth.IncomeStatementGrowth;
import com.investinquire.server.service.growth.IncomeStatementGrowthService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class IncomeStatementGrowthController {

    private final IncomeStatementGrowthService incomeStatementGrowthService;

    public IncomeStatementGrowthController(IncomeStatementGrowthService incomeStatementGrowthService){
        this.incomeStatementGrowthService = incomeStatementGrowthService;
    }

    @QueryMapping
    public List<IncomeStatementGrowth> incomeStatementGrowth(@Argument String ticker, @Argument Integer page){
        return incomeStatementGrowthService.getIncomeStatementGrowth(ticker, page);
    }
}
