package com.investinquire.server.controller.details;

import com.investinquire.server.model.details.CompanyRating;
import com.investinquire.server.service.details.CompanyRatingService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class CompanyRatingController {

    private final CompanyRatingService companyRatingService;

    public CompanyRatingController(CompanyRatingService companyRatingService){
        this.companyRatingService = companyRatingService;
    }

    @QueryMapping
    public List<CompanyRating> companyRating(@Argument String ticker){
        return companyRatingService.getCompanyRating(ticker);
    }
}
