package com.investinquire.server.model.details;

import java.io.Serial;
import java.io.Serializable;

public class InvestedStocks implements Serializable {

    @Serial
    private static final long serialVersionUID = 69;

    private float averagePrice;
    private float currentPrice;
    private float fxPpl;
    private String initialFillDate;
    private float maxBuy;
    private float maxSell;
    private float pieQuantity;
    private float ppl;
    private float quantity;

    public float getAveragePrice() {
        return averagePrice;
    }

    public float getCurrentPrice() {
        return currentPrice;
    }

    public float getFxPpl() {
        return fxPpl;
    }

    public String getInitialFillDate() {
        return initialFillDate;
    }

    public float getMaxBuy() {
        return maxBuy;
    }

    public float getMaxSell() {
        return maxSell;
    }

    public float getPieQuantity() {
        return pieQuantity;
    }

    public float getPpl() {
        return ppl;
    }

    public float getQuantity() {
        return quantity;
    }
}
