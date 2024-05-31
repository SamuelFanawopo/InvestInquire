package com.investinquire.server.model.details;

import java.io.Serial;
import java.io.Serializable;

public class InvestmentOverview implements Serializable {

    @Serial
    private static final long serialVersionUID = 28L; // static version identifier

    private Float total;
    private Float free;
    private Float invested;
    private Float ppl; // Profit & Loss
    private Double result;
    private Float pieCash;
    private Float blocked;

    public Float getTotal() {
        return total;
    }

    public Float getFree() {
        return free;
    }

    public Float getInvested() {
        return invested;
    }

    public Float getPpl() {
        return ppl;
    }

    public Float getBlocked() {
        return blocked;
    }

    public Float getPieCash() {
        return pieCash;
    }

    public Double getResult() {
        return result;
    }
}
