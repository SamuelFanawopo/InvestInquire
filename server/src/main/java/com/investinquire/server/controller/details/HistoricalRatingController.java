package com.investinquire.server.controller.details;

import com.investinquire.server.model.details.CompanyRating;
import com.investinquire.server.service.details.HistoricalRatingService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class HistoricalRatingController {

    private final HistoricalRatingService historicalRatingService;

    public HistoricalRatingController(HistoricalRatingService historicalRatingService){
        this.historicalRatingService = historicalRatingService;
    }

    @QueryMapping
    public List<CompanyRating> historicalRating(@Argument String ticker, @Argument Integer page){
        return historicalRatingService.getHistoricalRating(ticker, page);
    }
}
