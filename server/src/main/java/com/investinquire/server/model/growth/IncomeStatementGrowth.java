package com.investinquire.server.model.growth;

import java.io.Serial;
import java.io.Serializable;

public class IncomeStatementGrowth implements Serializable {

    @Serial
    private static final long serialVersionUID = 14L; // static version identifier

    private String symbol;
    private String date;
    private String period;
    private int calendarYear;
    private float growthRevenue;
    private float growthCostOfRevenue;
    private float growthGrossProfit;
    private float growthGrossProfitRatio;
    private float growthResearchAndDevelopmentExpenses;
    private float growthGeneralAndAdministrativeExpenses;
    private float growthSellingGeneralAndAdministrativeExpenses;
    private float growthSellingAndMarketingExpenses;
    private float growthOtherExpenses;
    private float growthOperatingExpenses;
    private float growthCostAndExpenses;
    private float growthInterestExpense;
    private float growthInterestIncome;
    private float growthDepreciationAndAmortization;
    private float growthEbitda;
    private float growthEbitdaRatio;
    private float growthOperatingIncome;
    private float growthOperatingIncomeRatio;
    private float growthTotalOtherIncomeExpensesNet;
    private float growthIncomeBeforeTax;
    private float growthIncomeBeforeTaxRatio;
    private float growthIncomeTaxExpense;
    private float growthNetIncome;
    private float growthNetIncomeRatio;
    private float growthEps;
    private float growthEpsDiluted;
    private float growthWeightedAverageShsOut;
    private float growthWeightedAverageShsOutDil;
    private String updatedAt;
    private String createdAt;

    // Getter methods
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

    public float getGrowthRevenue() {
        return growthRevenue;
    }

    public float getGrowthCostOfRevenue() {
        return growthCostOfRevenue;
    }

    public float getGrowthGrossProfit() {
        return growthGrossProfit;
    }

    public float getGrowthGrossProfitRatio() {
        return growthGrossProfitRatio;
    }

    public float getGrowthResearchAndDevelopmentExpenses() {
        return growthResearchAndDevelopmentExpenses;
    }

    public float getGrowthGeneralAndAdministrativeExpenses() {
        return growthGeneralAndAdministrativeExpenses;
    }

    public float getGrowthSellingGeneralAndAdministrativeExpenses() {
        return growthSellingGeneralAndAdministrativeExpenses;
    }

    public float getGrowthSellingAndMarketingExpenses() {
        return growthSellingAndMarketingExpenses;
    }

    public float getGrowthOtherExpenses() {
        return growthOtherExpenses;
    }

    public float getGrowthOperatingExpenses() {
        return growthOperatingExpenses;
    }

    public float getGrowthCostAndExpenses() {
        return growthCostAndExpenses;
    }

    public float getGrowthInterestExpense() {
        return growthInterestExpense;
    }

    public float getGrowthInterestIncome() {
        return growthInterestIncome;
    }

    public float getGrowthDepreciationAndAmortization() {
        return growthDepreciationAndAmortization;
    }

    public float getGrowthEbitda() {
        return growthEbitda;
    }

    public float getGrowthEbitdaRatio() {
        return growthEbitdaRatio;
    }

    public float getGrowthOperatingIncome() {
        return growthOperatingIncome;
    }

    public float getGrowthOperatingIncomeRatio() {
        return growthOperatingIncomeRatio;
    }

    public float getGrowthTotalOtherIncomeExpensesNet() {
        return growthTotalOtherIncomeExpensesNet;
    }

    public float getGrowthIncomeBeforeTax() {
        return growthIncomeBeforeTax;
    }

    public float getGrowthIncomeBeforeTaxRatio() {
        return growthIncomeBeforeTaxRatio;
    }

    public float getGrowthIncomeTaxExpense() {
        return growthIncomeTaxExpense;
    }

    public float getGrowthNetIncome() {
        return growthNetIncome;
    }

    public float getGrowthNetIncomeRatio() {
        return growthNetIncomeRatio;
    }

    public float getGrowthEps() {
        return growthEps;
    }

    public float getGrowthEpsDiluted() {
        return growthEpsDiluted;
    }

    public float getGrowthWeightedAverageShsOut() {
        return growthWeightedAverageShsOut;
    }

    public float getGrowthWeightedAverageShsOutDil() {
        return growthWeightedAverageShsOutDil;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public String getCreatedAt() {
        return createdAt;
    }
}
