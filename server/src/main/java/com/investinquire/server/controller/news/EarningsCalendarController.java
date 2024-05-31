package com.investinquire.server.controller.news;

import com.investinquire.server.model.news.EarningsCalendar;
import com.investinquire.server.service.news.EarningsCalendarService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class EarningsCalendarController {

    private final EarningsCalendarService earningsCalendarService;

    public EarningsCalendarController(EarningsCalendarService earningsCalendarService){
        this.earningsCalendarService = earningsCalendarService;
    }

    @QueryMapping
    public List<EarningsCalendar> earningsCalendar(@Argument String from, @Argument String to, @Argument Integer page){
        return earningsCalendarService.getEarningsCalendar(from, to, page);
    }

}
