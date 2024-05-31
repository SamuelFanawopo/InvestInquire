package com.investinquire.server.controller.news;

import com.investinquire.server.model.news.News;
import com.investinquire.server.service.news.GeneralNewsService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class GeneralNewsController {

    private final GeneralNewsService generalNewsService;

    public GeneralNewsController(GeneralNewsService generalNewsService){
        this.generalNewsService = generalNewsService;
    }

    @QueryMapping
    public List<News> generalNews(@Argument Integer page){
        return generalNewsService.getGeneralNews(page);
    }
}
