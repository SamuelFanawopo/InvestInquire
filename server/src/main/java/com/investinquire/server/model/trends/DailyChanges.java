package com.investinquire.server.model.trends;

import java.io.Serial;
import java.io.Serializable;

public class DailyChanges implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L; // static version identifier

    private String symbol;
    private String name;
    private double change;
    private double price;
    private double changesPercentage;

    public String getSymbol() {
        return symbol;
    }

    public String getName() {
        return name;
    }

    public double getChange() {
        return change;
    }

    public double getChangesPercentage() {
        return changesPercentage;
    }

    public double getPrice() {
        return price;
    }
}
