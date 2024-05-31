package com.investinquire.server.controller.news;

import com.investinquire.server.model.news.News;
import com.investinquire.server.service.news.NewsByTickerService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class NewsByTickerController {

    private final NewsByTickerService newsByTickerService;

    public NewsByTickerController(NewsByTickerService newsByTickerService){
        this.newsByTickerService = newsByTickerService;
    }

    @QueryMapping
    public List<News> newsByTicker(@Argument String ticker, @Argument Integer page){
        return newsByTickerService.getNewsByTicker(ticker, page);
    }

}
