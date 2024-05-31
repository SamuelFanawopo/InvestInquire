package com.investinquire.server.model.details;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.investinquire.server.utility.StockPriceChangeDeserializer;
import java.io.Serial;
import java.io.Serializable;

@JsonDeserialize(using = StockPriceChangeDeserializer.class)
public class StockPriceChange implements Serializable {

    @Serial
    private static final long serialVersionUID = 25L; // static version identifier

    private Float oneDay;
    private Float fiveDays;
    private Float oneMonth;
    private Float threeMonths;
    private Float sixMonths;
    private Float yearToDay;
    private Float oneYear;
    private Float threeYears;
    private Float fiveYears;
    private Float tenYears;
    private Float max;

    public Float getOneDay() {
        return oneDay;
    }

    public void setOneDay(Float oneDay) {
        this.oneDay = oneDay;
    }

    public Float getFiveDays() {
        return fiveDays;
    }

    public void setFiveDays(Float fiveDays) {
        this.fiveDays = fiveDays;
    }

    public Float getOneMonth() {
        return oneMonth;
    }

    public void setOneMonth(Float oneMonth) {
        this.oneMonth = oneMonth;
    }

    public Float getThreeMonths() {
        return threeMonths;
    }

    public void setThreeMonths(Float threeMonths) {
        this.threeMonths = threeMonths;
    }

    public Float getSixMonths() {
        return sixMonths;
    }

    public void setSixMonths(Float sixMonths) {
        this.sixMonths = sixMonths;
    }

    public Float getYearToDay() {
        return yearToDay;
    }

    public void setYearToDay(Float yearToDay) {
        this.yearToDay = yearToDay;
    }

    public Float getOneYear() {
        return oneYear;
    }

    public void setOneYear(Float oneYear) {
        this.oneYear = oneYear;
    }

    public Float getThreeYears() {
        return threeYears;
    }

    public void setThreeYears(Float threeYears) {
        this.threeYears = threeYears;
    }

    public Float getFiveYears() {
        return fiveYears;
    }

    public void setFiveYears(Float fiveYears) {
        this.fiveYears = fiveYears;
    }

    public Float getTenYears() {
        return tenYears;
    }

    public void setTenYears(Float tenYears) {
        this.tenYears = tenYears;
    }

    public Float getMax() {
        return max;
    }

    public void setMax(Float max) {
        this.max = max;
    }

}
