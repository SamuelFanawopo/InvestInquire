package com.investinquire.server.controller.growth;

import com.investinquire.server.model.growth.BalanceSheetGrowth;
import com.investinquire.server.service.growth.BalanceSheetGrowthService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class BalanceSheetGrowthController {

    private final BalanceSheetGrowthService balanceSheetGrowthService;

    public BalanceSheetGrowthController(BalanceSheetGrowthService balanceSheetGrowthService){
        this.balanceSheetGrowthService = balanceSheetGrowthService;
    }

    @QueryMapping
    public List<BalanceSheetGrowth> balanceSheetGrowth(@Argument String ticker, @Argument Integer page){
        return balanceSheetGrowthService.getBalanceSheetGrowth(ticker, page);
    }
}
