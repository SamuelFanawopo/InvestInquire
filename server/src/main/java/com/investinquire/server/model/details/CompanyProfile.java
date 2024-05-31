package com.investinquire.server.model.details;

import java.io.Serial;
import java.io.Serializable;

public class CompanyProfile implements Serializable {

    @Serial
    private static final long serialVersionUID = 31L; // static version identifier

    private String symbol;
    private Float price;
    private Float beta;
    private Integer volAvg;
    private String mktCap;
    private Float lastDiv;
    private Float changes;
    private String companyName;
    private String currency;
    private String cik;
    private String isin;
    private String cusip;
    private String exchange;
    private String industry;
    private String description;
    private String ceo;
    private String sector;
    private String country;
    private String fullTimeEmployees;
    private String city;
    private String state;
    private Float dcfDiff;
    private Float dcf;
    private String image;
    private String ipoDate;

    public String getSymbol() { return symbol; }
    public Float getPrice() { return price; }
    public Float getBeta() { return beta; }
    public Integer getVolAvg() { return volAvg; }
    public String getMktCap() { return mktCap; }
    public Float getLastDiv() { return lastDiv; }
    public Float getChanges() { return changes; }
    public String getCompanyName() { return companyName; }
    public String getCurrency() { return currency; }
    public String getCik() { return cik; }
    public String getIsin() { return isin; }
    public String getCusip() { return cusip; }
    public String getExchange() { return exchange; }
    public String getIndustry() { return industry; }
    public String getDescription() { return description; }
    public String getCeo() { return ceo; }
    public String getSector() { return sector; }
    public String getCountry() { return country; }
    public String getFullTimeEmployees() { return fullTimeEmployees; }
    public String getCity() { return city; }
    public String getState() { return state; }
    public Float getDcfDiff() { return dcfDiff; }
    public Float getDcf() { return dcf; }
    public String getImage() { return image; }
    public String getIpoDate() { return ipoDate; }
}
