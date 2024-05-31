package com.investinquire.server.controller.growth;

import com.investinquire.server.model.growth.IncomeStatement;
import com.investinquire.server.service.growth.IncomeStatementService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class IncomeStatementController {

    private final IncomeStatementService incomeStatementService;

    public IncomeStatementController(IncomeStatementService incomeStatementService){
        this.incomeStatementService = incomeStatementService;
    }

    @QueryMapping
    public List<IncomeStatement> incomeStatement(@Argument String ticker, @Argument Integer page){
        return incomeStatementService.getIncomeStatement(ticker, page);
    }

}
