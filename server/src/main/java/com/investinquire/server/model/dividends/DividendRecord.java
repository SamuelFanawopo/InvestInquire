package com.investinquire.server.model.dividends;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serial;
import java.io.Serializable;

public class DividendRecord implements Serializable {

    @Serial
    private static final long serialVersionUID = 24L; // static version identifier

    @JsonProperty("date")
    private final String date;

    @JsonProperty("label")
    private final String label;

    @JsonProperty("adjDividend")
    private final float adjDividend;

    @JsonProperty("dividend")
    private final float dividend;

    @JsonProperty("recordDate")
    private final String recordDate;

    @JsonProperty("paymentDate")
    private final String paymentDate;

    @JsonProperty("declarationDate")
    private final String declarationDate;

    public DividendRecord(
            @JsonProperty("date") String date,
            @JsonProperty("label") String label,
            @JsonProperty("adjDividend") float adjDividend,
            @JsonProperty("dividend") float dividend,
            @JsonProperty("recordDate") String recordDate,
            @JsonProperty("paymentDate") String paymentDate,
            @JsonProperty("declarationDate") String declarationDate
    ) {
        this.date = date;
        this.label = label;
        this.adjDividend = adjDividend;
        this.dividend = dividend;
        this.recordDate = recordDate;
        this.paymentDate = paymentDate;
        this.declarationDate = declarationDate;
    }

    public String getDate() {
        return date;
    }

    public String getLabel() {
        return label;
    }

    public float getAdjDividend() {
        return adjDividend;
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
