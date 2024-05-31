package com.investinquire.server.controller.details;

import com.investinquire.server.model.details.InvestmentOverview;
import com.investinquire.server.service.details.InvestmentOverviewService;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
public class InvestmentOverviewController {

    private final InvestmentOverviewService investmentOverviewService;

    public InvestmentOverviewController(InvestmentOverviewService investmentOverviewService){
        this.investmentOverviewService = investmentOverviewService;
    }

    @QueryMapping
    public InvestmentOverview investmentOverview(){
        return investmentOverviewService.getInvestmentOverview();
    }

}
