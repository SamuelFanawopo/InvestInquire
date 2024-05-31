package com.investinquire.server.model.news;

import java.io.Serial;
import java.io.Serializable;

public class EarningsSurprises implements Serializable {

    @Serial
    private static final long serialVersionUID = 7L; // static version identifier

    private String date;
    private String symbol;
    private float actualEarningResult;
    private float estimatedEarning;

    public String getDate() {
        return date;
    }

    public String getSymbol() {
        return symbol;
    }

    public float getActualEarningResult() {
        return actualEarningResult;
    }

    public float getEstimatedEarning() {
        return estimatedEarning;
    }
}
