package com.investinquire.server.model.details;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serial;
import java.io.Serializable;

public class GlobalQuote implements Serializable {
    @Serial
    private static final long serialVersionUID = 52L;

    @JsonProperty("01. symbol")
    private String symbol;

    @JsonProperty("02. open")
    private Float open;

    @JsonProperty("03. high")
    private Float high;

    @JsonProperty("04. low")
    private Float low;

    @JsonProperty("05. price")
    private Float price;

    @JsonProperty("06. volume")
    private Integer volume;

    @JsonProperty("07. latest trading day")
    private String latestTradingDay;

    @JsonProperty("08. previous close")
    private Float previousClose;

    @JsonProperty("09. change")
    private Float change;

    @JsonProperty("10. change percent")
    private String changePercent;

    // Getter for symbol
    public String getSymbol() {
        return symbol;
    }

    // Getter for open
    public Float getOpen() {
        return open;
    }

    // Getter for high
    public Float getHigh() {
        return high;
    }

    // Getter for low
    public Float getLow() {
        return low;
    }

    // Getter for price
    public Float getPrice() {
        return price;
    }

    // Getter for volume
    public Integer getVolume() {
        return volume;
    }

    // Getter for latestTradingDay
    public String getLatestTradingDay() {
        return latestTradingDay;
    }

    // Getter for previousClose
    public Float getPreviousClose() {
        return previousClose;
    }

    // Getter for change
    public Float getChange() {
        return change;
    }

    // Getter for changePercent
    public String getChangePercent() {
        return changePercent;
    }
}
