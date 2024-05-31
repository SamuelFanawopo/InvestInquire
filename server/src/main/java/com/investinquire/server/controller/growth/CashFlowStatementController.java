package com.investinquire.server.controller.growth;

import com.investinquire.server.model.growth.CashFlowStatement;
import com.investinquire.server.service.growth.CashFlowStatementService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class CashFlowStatementController {

    private final CashFlowStatementService cashFlowStatementService;

    public CashFlowStatementController(CashFlowStatementService cashFlowStatementService){
        this.cashFlowStatementService = cashFlowStatementService;
    }

    @QueryMapping
    public List<CashFlowStatement> cashFlowStatement(@Argument String ticker, @Argument Integer page){
        return cashFlowStatementService.getCashFlowStatement(ticker, page);
    }
}
