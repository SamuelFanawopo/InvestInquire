package com.investinquire.server.controller.details;

import com.investinquire.server.model.details.CompanyProfile;
import com.investinquire.server.service.details.CompanyProfileService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class CompanyProfileController {
    private final CompanyProfileService companyProfileService;

    public CompanyProfileController(CompanyProfileService companyProfileService){
        this.companyProfileService = companyProfileService;
    }

    @QueryMapping
    public List<CompanyProfile> companyProfile(@Argument String ticker){
        return companyProfileService.getCompanyProfile(ticker);
    }
}
