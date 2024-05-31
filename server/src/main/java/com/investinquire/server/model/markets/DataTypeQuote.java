package com.investinquire.server.model.markets;

import java.io.Serial;
import java.io.Serializable;

public class DataTypeQuote implements Serializable {

    @Serial
    private static final long serialVersionUID = 12L; // static version identifier

    private String symbol;
    private String name;
    private Float price;
    private Float changesPercentage;
    private Float change;
    private Float dayLow;
    private Float dayHigh;
    private Float yearHigh;
    private Float yearLow;
    private Float marketCap;
    private Float priceAvg50;
    private Float priceAvg200;
    private Integer volume;
    private Integer avgVolume;
    private String exchange;
    private Float open;
    private Float previousClose;
    private Float eps;
    private Float pe;
    private String earningsAnnouncement;
    private Integer sharesOutstanding;
    private Integer timestamp;

    // Getters
    public String getSymbol() {
        return symbol;
    }

    public String getName() {
        return name;
    }

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

    public Float getYearHigh() {
        return yearHigh;
    }

    public Float getYearLow() {
        return yearLow;
    }

    public Float getMarketCap() {
        return marketCap;
    }

    public Float getPriceAvg50() {
        return priceAvg50;
    }

    public Float getPriceAvg200() {
        return priceAvg200;
    }

    public Integer getVolume() {
        return volume;
    }

    public Integer getAvgVolume() {
        return avgVolume;
    }

    public String getExchange() {
        return exchange;
    }

    public Float getOpen() {
        return open;
    }

    public Float getPreviousClose() {
        return previousClose;
    }

    public Float getEps() {
        return eps;
    }

    public Float getPe() {
        return pe;
    }

    public String getEarningsAnnouncement() {
        return earningsAnnouncement;
    }

    public Integer getSharesOutstanding() {
        return sharesOutstanding;
    }

    public Integer getTimestamp() {
        return timestamp;
    }
}
