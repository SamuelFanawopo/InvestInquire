package com.investinquire.server.controller.metrics;

import com.investinquire.server.model.metrics.KeyMetricsTTM;
import com.investinquire.server.service.metrics.KeyMetricsTTMService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class KeyMetricsTTMController {

    private final KeyMetricsTTMService keyMetricsTTMService;

    public KeyMetricsTTMController(KeyMetricsTTMService keyMetricsTTMService){
        this.keyMetricsTTMService = keyMetricsTTMService;
    }

    @QueryMapping
    public List<KeyMetricsTTM> keyMetricsTTM(@Argument String ticker){
        return keyMetricsTTMService.getKeyMetricsTTM(ticker);
    }

}
