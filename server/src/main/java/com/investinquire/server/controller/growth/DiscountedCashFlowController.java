package com.investinquire.server.controller.growth;

import com.investinquire.server.model.growth.DiscountedCashFlow;
import com.investinquire.server.service.growth.DiscountedCashFlowService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class DiscountedCashFlowController {

    private final DiscountedCashFlowService discountedCashFlowService;

    public DiscountedCashFlowController(DiscountedCashFlowService discountedCashFlowService){
        this.discountedCashFlowService = discountedCashFlowService;
    }

    @QueryMapping
    public List<DiscountedCashFlow> discountedCashFlow(@Argument String ticker){
        return discountedCashFlowService.getDiscountedCashFlow(ticker);
    }
}
