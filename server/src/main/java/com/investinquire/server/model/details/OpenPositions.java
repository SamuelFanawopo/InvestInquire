package com.investinquire.server.model.details;

import java.io.Serial;
import java.io.Serializable;

public class OpenPositions implements Serializable {

    @Serial
    private static final long serialVersionUID = 27L; // static version identifier

    private String ticker;
    private Float quantity;
    private Float averagePrice;
    private Float currentPrice;
    private Float ppl; // Profit & Loss
    private String initialFillDate;
    private Float maxBuy;
    private Float maxSell;

    public String getTicker() {
        return ticker;
    }

    public Float getQuantity() {
        return quantity;
    }

    public Float getAveragePrice() {
        return averagePrice;
    }

    public Float getCurrentPrice() {
        return currentPrice;
    }

    public Float getPpl() {
        return ppl;
    }

    public String getInitialFillDate() {
        return initialFillDate;
    }

    public Float getMaxBuy() {
        return maxBuy;
    }

    public Float getMaxSell() {
        return maxSell;
    }
}
