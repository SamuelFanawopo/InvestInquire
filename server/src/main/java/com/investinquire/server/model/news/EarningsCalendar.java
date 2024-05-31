package com.investinquire.server.model.news;

import java.io.Serial;
import java.io.Serializable;

public class EarningsCalendar implements Serializable {

    @Serial
    private static final long serialVersionUID = 8L; // static version identifier

    private String date;
    private String symbol;
    private float eps;
    private float epsEstimated;
    private String time;
    private float revenue;
    private float revenueEstimated;
    private String fiscalDateEnding;
    private String updatedFromDate;

    public String getDate() {
        return date;
    }

    public String getSymbol() {
        return symbol;
    }

    public float getEps() {
        return eps;
    }

    public float getEpsEstimated() {
        return epsEstimated;
    }

    public String getTime() {
        return time;
    }

    public float getRevenue() {
        return revenue;
    }

    public float getRevenueEstimated() {
        return revenueEstimated;
    }

    public String getFiscalDateEnding() {
        return fiscalDateEnding;
    }

    public String getUpdatedFromDate() {
        return updatedFromDate;
    }
}
