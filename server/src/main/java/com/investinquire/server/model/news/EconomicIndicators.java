package com.investinquire.server.model.news;

import java.io.Serial;
import java.io.Serializable;

public class EconomicIndicators implements Serializable {

    @Serial
    private static final long serialVersionUID = 53L;

    private String date;
    private String value;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
