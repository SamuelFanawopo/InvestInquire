package com.investinquire.server.model.growth;

import java.io.Serial;
import java.io.Serializable;

public class BalanceSheet implements Serializable {

    @Serial
    private static final long serialVersionUID = 21L; // static version identifier

    private String date;
    private String symbol;
    private String reportedCurrency;
    private String cik;
    private String fillingDate;
    private String acceptedDate;
    private String calendarYear;
    private String period;
    private Float cashAndCashEquivalents;
    private Float shortTermInvestments;
    private Float cashAndShortTermInvestments;
    private Float netReceivables;
    private Float inventory;
    private Float otherCurrentAssets;
    private Float totalCurrentAssets;
    private Float propertyPlantEquipmentNet;
    private Float goodwill;
    private Float intangibleAssets;
    private Float goodwillAndIntangibleAssets;
    private Float longTermInvestments;
    private Float taxAssets;
    private Float otherNonCurrentAssets;
    private Float totalNonCurrentAssets;
    private Float otherAssets;
    private Float totalAssets;
    private Float accountPayables;
    private Float shortTermDebt;
    private Float taxPayables;
    private Float deferredRevenue;
    private Float otherCurrentLiabilities;
    private Float totalCurrentLiabilities;
    private Float longTermDebt;
    private Float deferredRevenueNonCurrent;
    private Float deferredTaxLiabilitiesNonCurrent;
    private Float otherNonCurrentLiabilities;
    private Float totalNonCurrentLiabilities;
    private Float otherLiabilities;
    private Float capitalLeaseObligations;
    private Float totalLiabilities;
    private Float preferredStock;
    private Float commonStock;
    private Float retainedEarnings;
    private Float accumulatedOtherComprehensiveIncomeLoss;
    private Float othertotalStockholdersEquity;
    private Float totalStockholdersEquity;
    private Float totalEquity;
    private Float totalLiabilitiesAndStockholdersEquity;
    private Float minorityInterest;
    private Float totalLiabilitiesAndTotalEquity;
    private Float totalInvestments;
    private Float totalDebt;
    private Float netDebt;
    private String link;
    private String finalLink;

    public String getDate() { return date; }
    public String getSymbol() { return symbol; }
    public String getReportedCurrency() { return reportedCurrency; }
    public String getCik() { return cik; }
    public String getFillingDate() { return fillingDate; }
    public String getAcceptedDate() { return acceptedDate; }
    public String getCalendarYear() { return calendarYear; }
    public String getPeriod() { return period; }
    public Float getCashAndCashEquivalents() { return cashAndCashEquivalents; }
    public Float getShortTermInvestments() { return shortTermInvestments; }
    public Float getCashAndShortTermInvestments() { return cashAndShortTermInvestments; }
    public Float getNetReceivables() { return netReceivables; }
    public Float getInventory() { return inventory; }
    public Float getOtherCurrentAssets() { return otherCurrentAssets; }
    public Float getTotalCurrentAssets() { return totalCurrentAssets; }
    public Float getPropertyPlantEquipmentNet() { return propertyPlantEquipmentNet; }
    public Float getGoodwill() { return goodwill; }
    public Float getIntangibleAssets() { return intangibleAssets; }
    public Float getGoodwillAndIntangibleAssets() { return goodwillAndIntangibleAssets; }
    public Float getLongTermInvestments() { return longTermInvestments; }
    public Float getTaxAssets() { return taxAssets; }
    public Float getOtherNonCurrentAssets() { return otherNonCurrentAssets; }
    public Float getTotalNonCurrentAssets() { return totalNonCurrentAssets; }
    public Float getOtherAssets() { return otherAssets; }
    public Float getTotalAssets() { return totalAssets; }
    public Float getAccountPayables() { return accountPayables; }
    public Float getShortTermDebt() { return shortTermDebt; }
    public Float getTaxPayables() { return taxPayables; }
    public Float getDeferredRevenue() { return deferredRevenue; }
    public Float getOtherCurrentLiabilities() { return otherCurrentLiabilities; }
    public Float getTotalCurrentLiabilities() { return totalCurrentLiabilities; }
    public Float getLongTermDebt() { return longTermDebt; }
    public Float getDeferredRevenueNonCurrent() { return deferredRevenueNonCurrent; }
    public Float getDeferredTaxLiabilitiesNonCurrent() { return deferredTaxLiabilitiesNonCurrent; }
    public Float getOtherNonCurrentLiabilities() { return otherNonCurrentLiabilities; }
    public Float getTotalNonCurrentLiabilities() { return totalNonCurrentLiabilities; }
    public Float getOtherLiabilities() { return otherLiabilities; }
    public Float getCapitalLeaseObligations() { return capitalLeaseObligations; }
    public Float getTotalLiabilities() { return totalLiabilities; }
    public Float getPreferredStock() { return preferredStock; }
    public Float getCommonStock() { return commonStock; }
    public Float getRetainedEarnings() { return retainedEarnings; }
    public Float getAccumulatedOtherComprehensiveIncomeLoss() { return accumulatedOtherComprehensiveIncomeLoss; }
    public Float getOthertotalStockholdersEquity() { return othertotalStockholdersEquity; }
    public Float getTotalStockholdersEquity() { return totalStockholdersEquity; }
    public Float getTotalEquity() { return totalEquity; }
    public Float getTotalLiabilitiesAndStockholdersEquity() { return totalLiabilitiesAndStockholdersEquity; }
    public Float getMinorityInterest() { return minorityInterest; }
    public Float getTotalLiabilitiesAndTotalEquity() { return totalLiabilitiesAndTotalEquity; }
    public Float getTotalInvestments() { return totalInvestments; }
    public Float getTotalDebt() { return totalDebt; }
    public Float getNetDebt() { return netDebt; }
    public String getLink() { return link; }
    public String getFinalLink() { return finalLink; }

}
