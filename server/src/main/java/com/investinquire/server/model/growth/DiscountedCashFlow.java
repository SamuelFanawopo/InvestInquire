package com.investinquire.server.model.growth;

import java.io.Serial;
import java.io.Serializable;

public class DiscountedCashFlow implements Serializable {

    @Serial
    private static final long serialVersionUID = 17L; // static version identifier

    private String symbol;
    private String date;
    private float dcf;
    private float stockPrice;

    public String getSymbol() {
        return symbol;
    }

    public String getDate() {
        return date;
    }

    public float getDcf() {
        return dcf;
    }

    public float getStockPrice() {
        return stockPrice;
    }
}
