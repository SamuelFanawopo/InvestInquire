package com.investinquire.server.controller.dividends;

import com.investinquire.server.model.dividends.DividendsCalendar;
import com.investinquire.server.service.dividends.DividendsCalendarService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class DividendsCalendarController {

    private final DividendsCalendarService dividendsCalendarService;

    public DividendsCalendarController(DividendsCalendarService dividendsCalendarService){
        this.dividendsCalendarService = dividendsCalendarService;
    }

    @QueryMapping
    public List<DividendsCalendar> dividendsCalendar(@Argument String from, @Argument String to, @Argument Integer page){
        return dividendsCalendarService.getDividendsCalendar(from, to, page);
    }
}
