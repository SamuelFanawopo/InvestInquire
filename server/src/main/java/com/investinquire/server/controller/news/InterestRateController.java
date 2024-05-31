package com.investinquire.server.controller.news;

import com.investinquire.server.model.news.InterestRateIndicators;
import com.investinquire.server.service.news.InterestRateService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class InterestRateController {

    private final InterestRateService interestRateService;

    public InterestRateController(InterestRateService interestRateService){
        this.interestRateService = interestRateService;
    }

    @QueryMapping
    public List<InterestRateIndicators> interestRate(@Argument Integer page){
        return interestRateService.getInterestRateData(page);
    }
}
