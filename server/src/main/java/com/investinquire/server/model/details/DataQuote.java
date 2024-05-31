package com.investinquire.server.model.details;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serial;
import java.io.Serializable;

public class DataQuote implements Serializable {

    @Serial
    private static final long serialVersionUID = 29L; // static version identifier

    private Float price;

    @JsonProperty("changesPercentage")
    private Float changesPercentage;

    private Float change;
    private Float dayLow;
    private Float dayHigh;
    private Float yearLow;
    private Float yearHigh;

    @JsonProperty("priceAvg50")
    private Float priceAvgFifty;

    @JsonProperty("priceAvg200")
    private Float priceAvgTwoHundred;

    private Float open;

    @JsonProperty("previousClose")
    private Float prevClose;

    public Float getPrice() {
        return price;
    }

    public Float getChangesPercentage() {
        return changesPercentage;
    }

    public Float getChange() {
        return change;
    }

    public Float getDayLow() {
        return dayLow;
    }

    public Float getDayHigh() {
        return dayHigh;
    }

    public Float getYearLow() {
        return yearLow;
    }

    public Float getYearHigh() {
        return yearHigh;
    }

    public Float getPriceAvgFifty() {
        return priceAvgFifty;
    }

    public Float getPriceAvgTwoHundred() {
        return priceAvgTwoHundred;
    }

    public Float getOpen() {
        return open;
    }

    public Float getPrevClose() {
        return prevClose;
    }
}
