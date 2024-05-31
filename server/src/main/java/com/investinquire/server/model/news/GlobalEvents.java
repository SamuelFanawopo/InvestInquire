package com.investinquire.server.model.news;

import java.io.Serial;
import java.io.Serializable;

public class GlobalEvents implements Serializable {

    @Serial
    private static final long serialVersionUID = 6L; // static version identifier

    private String date;
    private String event;
    private String country;
    private String currency;
    private Float actual;
    private Float previous;
    private Float change;
    private Float changePercentage;
    private Float estimate;
    private String impact;

    public String getDate() {
        return date;
    }

    public String getEvent() {
        return event;
    }

    public String getCountry() {
        return country;
    }

    public String getCurrency() {
        return currency;
    }

    public Float getActual() {
        return actual;
    }

    public Float getPrevious() {
        return previous;
    }

    public Float getChange() {
        return change;
    }

    public Float getChangePercentage() {
        return changePercentage;
    }

    public Float getEstimate() {
        return estimate;
    }

    public String getImpact() {
        return impact;
    }
}
