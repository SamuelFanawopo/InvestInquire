package com.investinquire.server.model.markets;

import java.io.Serial;
import java.io.Serializable;

public class DataType implements Serializable {

    @Serial
    private static final long serialVersionUID = 13L; // static version identifier

    private String symbol;
    private String name;
    private String currency;
    private String stockExchange;
    private String exchangeShortName;

    public String getSymbol() {
        return symbol;
    }

    public String getName() {
        return name;
    }

    public String getCurrency() {
        return currency;
    }

    public String getStockExchange() {
        return stockExchange;
    }

    public String getExchangeShortName() {
        return exchangeShortName;
    }
}
