package com.investinquire.server.controller.markets;

import com.investinquire.server.model.markets.DataType;
import com.investinquire.server.service.markets.CommoditiesService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class CommoditiesController {

    private final CommoditiesService commoditiesService;

    public CommoditiesController(CommoditiesService commoditiesService){
        this.commoditiesService = commoditiesService;
    }

    @QueryMapping
    public List<DataType> commodities(@Argument Integer page){
        return commoditiesService.getCommodities(page);
    }

}
