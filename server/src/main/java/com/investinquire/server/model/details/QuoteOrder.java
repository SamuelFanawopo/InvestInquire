package com.investinquire.server.model.details;

import java.io.Serial;
import java.io.Serializable;

public class QuoteOrder implements Serializable {

    @Serial
    private static final long serialVersionUID = 26L; // static version identifier

    private String symbol;
    private String name;
    private double price;
    private double change;
    private double dayLow;
    private double dayHigh;
    private double priceAvgFifty;
    private double priceAvgTwoHundred;

    public double getChange() {
        return change;
    }

    public double getPrice() {
        return price;
    }

    public double getPriceAvgFifty() {
        return priceAvgFifty;
    }

    public double getPriceAvgTwoHundred() {
        return priceAvgTwoHundred;
    }

    public String getSymbol() {
        return symbol;
    }

    public String getName() {
        return name;
    }

    public double getDayHigh() {
        return dayHigh;
    }

    public double getDayLow() {
        return dayLow;
    }
}
