package com.investinquire.server.model.growth;

import java.io.Serial;
import java.io.Serializable;

public class BalanceSheetGrowth implements Serializable {

    @Serial
    private static final long serialVersionUID = 20L; // static version identifier

    private String symbol;
    private String date;
    private String period;
    private int calendarYear;
    private float growthCashAndCashEquivalents;
    private float growthShortTermInvestments;
    private float growthCashAndShortTermInvestments;
    private float growthNetReceivables;
    private float growthInventory;
    private float growthPreferredStock;
    private float growthOtherCurrentAssets;
    private float growthTotalCurrentAssets;
    private float growthPropertyPlantEquipmentNet;
    private float growthGoodwill;
    private float growthIntangibleAssets;
    private float growthGoodwillAndIntangibleAssets;
    private float growthLongTermInvestments;
    private float growthTaxAssets;
    private float growthOtherNonCurrentAssets;
    private float growthTotalNonCurrentAssets;
    private float growthOtherAssets;
    private float growthTotalAssets;
    private float growthAccountPayables;
    private float growthShortTermDebt;
    private float growthTaxPayables;
    private float growthCapitalLeaseObligations;
    private float growthDeferredRevenue;
    private float growthOtherCurrentLiabilities;
    private float growthTotalCurrentLiabilities;
    private float growthLongTermDebt;
    private float growthDeferredRevenueNonCurrent;
    private float growthDeferredTaxLiabilitiesNonCurrent;
    private float growthOtherNonCurrentLiabilities;
    private float growthTotalNonCurrentLiabilities;
    private float growthOtherLiabilities;
    private float growthTotalLiabilities;
    private float growthCommonStock;
    private float growthRetainedEarnings;
    private float growthAccumulatedOtherComprehensiveIncomeLoss;
    private float growthOthertotalStockholdersEquity;
    private float growthTotalStockholdersEquity;
    private float growthTotalLiabilitiesAndStockholdersEquity;
    private float growthTotalInvestments;
    private float growthTotalDebt;
    private float growthNetDebt;

    // Getters
    public String getSymbol() {
        return symbol;
    }

    public String getDate() {
        return date;
    }

    public String getPeriod() {
        return period;
    }

    public int getCalendarYear() {
        return calendarYear;
    }

    public float getGrowthCashAndCashEquivalents() {
        return growthCashAndCashEquivalents;
    }

    public float getGrowthShortTermInvestments() {
        return growthShortTermInvestments;
    }

    public float getGrowthCashAndShortTermInvestments() {
        return growthCashAndShortTermInvestments;
    }

    public float getGrowthNetReceivables() {
        return growthNetReceivables;
    }

    public float getGrowthInventory() {
        return growthInventory;
    }

    public float getGrowthPreferredStock() {
        return growthPreferredStock;
    }

    public float getGrowthOtherCurrentAssets() {
        return growthOtherCurrentAssets;
    }

    public float getGrowthTotalCurrentAssets() {
        return growthTotalCurrentAssets;
    }

    public float getGrowthPropertyPlantEquipmentNet() {
        return growthPropertyPlantEquipmentNet;
    }

    public float getGrowthGoodwill() {
        return growthGoodwill;
    }

    public float getGrowthIntangibleAssets() {
        return growthIntangibleAssets;
    }

    public float getGrowthGoodwillAndIntangibleAssets() {
        return growthGoodwillAndIntangibleAssets;
    }

    public float getGrowthLongTermInvestments() {
        return growthLongTermInvestments;
    }

    public float getGrowthTaxAssets() {
        return growthTaxAssets;
    }

    public float getGrowthOtherNonCurrentAssets() {
        return growthOtherNonCurrentAssets;
    }

    public float getGrowthTotalNonCurrentAssets() {
        return growthTotalNonCurrentAssets;
    }

    public float getGrowthOtherAssets() {
        return growthOtherAssets;
    }

    public float getGrowthTotalAssets() {
        return growthTotalAssets;
    }

    public float getGrowthAccountPayables() {
        return growthAccountPayables;
    }

    public float getGrowthShortTermDebt() {
        return growthShortTermDebt;
    }

    public float getGrowthTaxPayables() {
        return growthTaxPayables;
    }

    public float getGrowthCapitalLeaseObligations() {
        return growthCapitalLeaseObligations;
    }

    public float getGrowthDeferredRevenue() {
        return growthDeferredRevenue;
    }

    public float getGrowthOtherCurrentLiabilities() {
        return growthOtherCurrentLiabilities;
    }

    public float getGrowthTotalCurrentLiabilities() {
        return growthTotalCurrentLiabilities;
    }

    public float getGrowthLongTermDebt() {
        return growthLongTermDebt;
    }

    public float getGrowthDeferredRevenueNonCurrent() {
        return growthDeferredRevenueNonCurrent;
    }

    public float getGrowthDeferredTaxLiabilitiesNonCurrent() {
        return growthDeferredTaxLiabilitiesNonCurrent;
    }

    public float getGrowthOtherNonCurrentLiabilities() {
        return growthOtherNonCurrentLiabilities;
    }

    public float getGrowthTotalNonCurrentLiabilities() {
        return growthTotalNonCurrentLiabilities;
    }

    public float getGrowthOtherLiabilities() {
        return growthOtherLiabilities;
    }

    public float getGrowthTotalLiabilities() {
        return growthTotalLiabilities;
    }

    public float getGrowthCommonStock() {
        return growthCommonStock;
    }

    public float getGrowthRetainedEarnings() {
        return growthRetainedEarnings;
    }

    public float getGrowthAccumulatedOtherComprehensiveIncomeLoss() {
        return growthAccumulatedOtherComprehensiveIncomeLoss;
    }

    public float getGrowthOthertotalStockholdersEquity() {
        return growthOthertotalStockholdersEquity;
    }

    public float getGrowthTotalStockholdersEquity() {
        return growthTotalStockholdersEquity;
    }

    public float getGrowthTotalLiabilitiesAndStockholdersEquity() {
        return growthTotalLiabilitiesAndStockholdersEquity;
    }

    public float getGrowthTotalInvestments() {
        return growthTotalInvestments;
    }

    public float getGrowthTotalDebt() {
        return growthTotalDebt;
    }

    public float getGrowthNetDebt() {
        return growthNetDebt;
    }

}
