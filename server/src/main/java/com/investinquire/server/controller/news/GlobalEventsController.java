package com.investinquire.server.controller.news;

import com.investinquire.server.model.news.GlobalEvents;
import com.investinquire.server.service.news.GlobalEventsService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class GlobalEventsController {

    private final GlobalEventsService globalEventsService;

    public GlobalEventsController(GlobalEventsService globalEventsService){
        this.globalEventsService = globalEventsService;
    }

    @QueryMapping
    public List<GlobalEvents> globalEvents(@Argument String from, @Argument String to, @Argument Integer page){
        return globalEventsService.getGlobalEvents(from, to, page);
    }
}
