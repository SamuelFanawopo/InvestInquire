package com.investinquire.server.model.dividends;

import java.io.Serial;
import java.io.Serializable;

public class DividendsCalendar implements Serializable {

    @Serial
    private static final long serialVersionUID = 23L; // static version identifier

    private String date;
    private String label;
    private float adjDividend;
    private String symbol;
    private float dividend;
    private String recordDate;
    private String paymentDate;
    private String declarationDate;

    public String getDate() {
        return date;
    }

    public String getLabel() {
        return label;
    }

    public float getAdjDividend() {
        return adjDividend;
    }

    public String getSymbol() {
        return symbol;
    }

    public float getDividend() {
        return dividend;
    }

    public String getRecordDate() {
        return recordDate;
    }

    public String getPaymentDate() {
        return paymentDate;
    }

    public String getDeclarationDate() {
        return declarationDate;
    }
}
