package com.investinquire.server.model.growth;

import java.io.Serial;
import java.io.Serializable;

public class CashFlowGrowth implements Serializable {

    @Serial
    private static final long serialVersionUID = 19L; // static version identifier

    private String symbol;
    private String date;
    private String period;
    private int calendarYear;
    private float growthNetIncome;
    private float growthDepreciationAndAmortization;
    private float growthStockBasedCompensation;
    private float growthChangeInWorkingCapital;
    private float growthAccountsReceivables;
    private float growthInventory;
    private float growthAccountsPayables;
    private float growthOtherWorkingCapital;
    private float growthOtherNonCashItems;
    private float growthNetCashProvidedByOperatingActivities;
    private float growthInvestmentsInPropertyPlantAndEquipment;
    private float growthAcquisitionsNet;
    private float growthPurchasesOfInvestments;
    private float growthSalesMaturitiesOfInvestments;
    private float growthNetCashUsedForInvestingActivities;
    private float growthDebtRepayment;
    private float growthCommonStockIssued;
    private float growthCommonStockRepurchased;
    private float growthDeferredIncomeTax;
    private float growthDividendsPaid;
    private float growthNetCashUsedProvidedByFinancingActivities;
    private float growthEffectOfForexChangesOnCash;
    private float growthNetChangeInCash;
    private float growthCashAtEndOfPeriod;
    private float growthCashAtBeginningOfPeriod;
    private float growthOperatingCashFlow;
    private float growthCapitalExpenditure;
    private float growthFreeCashFlow;
    private String updatedAt;
    private String createdAt;
    private float growthOtherInvestingActivites;
    private float growthOtherFinancingActivites;

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

    public float getGrowthNetIncome() {
        return growthNetIncome;
    }

    public float getGrowthDepreciationAndAmortization() {
        return growthDepreciationAndAmortization;
    }

    public float getGrowthStockBasedCompensation() {
        return growthStockBasedCompensation;
    }

    public float getGrowthChangeInWorkingCapital() {
        return growthChangeInWorkingCapital;
    }

    public float getGrowthAccountsReceivables() {
        return growthAccountsReceivables;
    }

    public float getGrowthInventory() {
        return growthInventory;
    }

    public float getGrowthAccountsPayables() {
        return growthAccountsPayables;
    }

    public float getGrowthOtherWorkingCapital() {
        return growthOtherWorkingCapital;
    }

    public float getGrowthOtherNonCashItems() {
        return growthOtherNonCashItems;
    }

    public float getGrowthNetCashProvidedByOperatingActivities() {
        return growthNetCashProvidedByOperatingActivities;
    }

    public float getGrowthInvestmentsInPropertyPlantAndEquipment() {
        return growthInvestmentsInPropertyPlantAndEquipment;
    }

    public float getGrowthAcquisitionsNet() {
        return growthAcquisitionsNet;
    }

    public float getGrowthPurchasesOfInvestments() {
        return growthPurchasesOfInvestments;
    }

    public float getGrowthSalesMaturitiesOfInvestments() {
        return growthSalesMaturitiesOfInvestments;
    }

    public float getGrowthNetCashUsedForInvestingActivities() {
        return growthNetCashUsedForInvestingActivities;
    }

    public float getGrowthDebtRepayment() {
        return growthDebtRepayment;
    }

    public float getGrowthCommonStockIssued() {
        return growthCommonStockIssued;
    }

    public float getGrowthCommonStockRepurchased() {
        return growthCommonStockRepurchased;
    }

    public float getGrowthDeferredIncomeTax() {
        return growthDeferredIncomeTax;
    }

    public float getGrowthDividendsPaid() {
        return growthDividendsPaid;
    }

    public float getGrowthNetCashUsedProvidedByFinancingActivities() {
        return growthNetCashUsedProvidedByFinancingActivities;
    }

    public float getGrowthEffectOfForexChangesOnCash() {
        return growthEffectOfForexChangesOnCash;
    }

    public float getGrowthNetChangeInCash() {
        return growthNetChangeInCash;
    }

    public float getGrowthCashAtEndOfPeriod() {
        return growthCashAtEndOfPeriod;
    }

    public float getGrowthCashAtBeginningOfPeriod() {
        return growthCashAtBeginningOfPeriod;
    }

    public float getGrowthOperatingCashFlow() {
        return growthOperatingCashFlow;
    }

    public float getGrowthCapitalExpenditure() {
        return growthCapitalExpenditure;
    }

    public float getGrowthFreeCashFlow() {
        return growthFreeCashFlow;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public float getGrowthOtherInvestingActivites() {
        return growthOtherInvestingActivites;
    }

    public float getGrowthOtherFinancingActivites() {
        return growthOtherFinancingActivites;
    }

}
