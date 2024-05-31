package com.investinquire.server.controller.growth;

import com.investinquire.server.model.growth.BalanceSheet;
import com.investinquire.server.service.growth.BalanceSheetService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class BalanceSheetController {

    private final BalanceSheetService balanceSheetService;

    public BalanceSheetController(BalanceSheetService balanceSheetService){
        this.balanceSheetService = balanceSheetService;
    }

    @QueryMapping
    public List<BalanceSheet> balanceSheet(@Argument String ticker, @Argument Integer page){
        return balanceSheetService.getBalanceSheet(ticker, page);
    }

}
