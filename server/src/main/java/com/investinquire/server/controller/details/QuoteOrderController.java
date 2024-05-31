package com.investinquire.server.controller.details;

import com.investinquire.server.model.details.QuoteOrder;
import com.investinquire.server.service.details.QuoteOrderService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class QuoteOrderController {

    private final QuoteOrderService quoteOrderService;

    public QuoteOrderController(QuoteOrderService quoteOrderService){
        this.quoteOrderService = quoteOrderService;
    }

    @QueryMapping
    public List<QuoteOrder> quoteOrder(@Argument String ticker){
        return quoteOrderService.getQuoteOrder(ticker);
    }

}
