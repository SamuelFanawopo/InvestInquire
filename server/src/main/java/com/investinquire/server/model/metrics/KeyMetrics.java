package com.investinquire.server.model.metrics;

import java.io.Serial;
import java.io.Serializable;

public class KeyMetrics implements Serializable {

    @Serial
    private static final long serialVersionUID = 11L;

    private String symbol;
    private String date;
    private String calendarYear;
    private String period;
    private float revenuePerShare;
    private float netIncomePerShare;
    private float operatingCashFlowPerShare;
    private float freeCashFlowPerShare;
    private float cashPerShare;
    private float bookValuePerShare;
    private float tangibleBookValuePerShare;
    private float shareholdersEquityPerShare;
    private float interestDebtPerShare;
    private float marketCap;
    private float enterpriseValue;
    private float peRatio;
    private float priceToSalesRatio;
    private float pocfratio;
    private float pfcfRatio;
    private float pbRatio;
    private float ptbRatio;
    private float evToSales;
    private float enterpriseValueOverEBITDA;
    private float evToOperatingCashFlow;
    private float evToFreeCashFlow;
    private float earningsYield;
    private float freeCashFlowYield;
    private float debtToEquity;
    private float debtToAssets;
    private float netDebtToEBITDA;
    private float currentRatio;
    private float interestCoverage;
    private float incomeQuality;
    private float dividendYield;
    private float payoutRatio;
    private float salesGeneralAndAdministrativeToRevenue;
    private float researchAndDevelopmentToRevenue; // Corrected field name
    private float intangiblesToTotalAssets;
    private float capexToOperatingCashFlow;
    private float capexToRevenue;
    private float capexToDepreciation;
    private float stockBasedCompensationToRevenue;
    private float grahamNumber;
    private float roic;
    private float returnOnTangibleAssets;
    private float grahamNetNet;
    private float workingCapital;
    private float tangibleAssetValue;
    private float netCurrentAssetValue;
    private float investedCapital;
    private float averageReceivables;
    private float averagePayables;
    private float averageInventory;
    private float daysSalesOutstanding;
    private float daysPayablesOutstanding;
    private float daysOfInventoryOnHand;
    private float receivablesTurnover;
    private float payablesTurnover;
    private float inventoryTurnover;
    private float roe;
    private float capexPerShare;

    public String getSymbol() {
        return symbol;
    }

    public String getDate() {
        return date;
    }

    public String getCalendarYear() {
        return calendarYear;
    }

    public String getPeriod() {
        return period;
    }

    public float getRevenuePerShare() {
        return revenuePerShare;
    }

    public float getNetIncomePerShare() {
        return netIncomePerShare;
    }

    public float getOperatingCashFlowPerShare() {
        return operatingCashFlowPerShare;
    }

    public float getFreeCashFlowPerShare() {
        return freeCashFlowPerShare;
    }

    public float getCashPerShare() {
        return cashPerShare;
    }

    public float getBookValuePerShare() {
        return bookValuePerShare;
    }

    public float getTangibleBookValuePerShare() {
        return tangibleBookValuePerShare;
    }

    public float getShareholdersEquityPerShare() {
        return shareholdersEquityPerShare;
    }

    public float getInterestDebtPerShare() {
        return interestDebtPerShare;
    }

    public float getMarketCap() {
        return marketCap;
    }

    public float getEnterpriseValue() {
        return enterpriseValue;
    }

    public float getPeRatio() {
        return peRatio;
    }

    public float getPriceToSalesRatio() {
        return priceToSalesRatio;
    }

    public float getPocfratio() {
        return pocfratio;
    }

    public float getPfcfRatio() {
        return pfcfRatio;
    }

    public float getPbRatio() {
        return pbRatio;
    }

    public float getPtbRatio() {
        return ptbRatio;
    }

    public float getEvToSales() {
        return evToSales;
    }

    public float getEnterpriseValueOverEBITDA() {
        return enterpriseValueOverEBITDA;
    }

    public float getEvToOperatingCashFlow() {
        return evToOperatingCashFlow;
    }

    public float getEvToFreeCashFlow() {
        return evToFreeCashFlow;
    }

    public float getEarningsYield() {
        return earningsYield;
    }

    public float getFreeCashFlowYield() {
        return freeCashFlowYield;
    }

    public float getDebtToEquity() {
        return debtToEquity;
    }

    public float getDebtToAssets() {
        return debtToAssets;
    }

    public float getNetDebtToEBITDA() {
        return netDebtToEBITDA;
    }

    public float getCurrentRatio() {
        return currentRatio;
    }

    public float getInterestCoverage() {
        return interestCoverage;
    }

    public float getIncomeQuality() {
        return incomeQuality;
    }

    public float getDividendYield() {
        return dividendYield;
    }

    public float getPayoutRatio() {
        return payoutRatio;
    }

    public float getSalesGeneralAndAdministrativeToRevenue() {
        return salesGeneralAndAdministrativeToRevenue;
    }

    public float getResearchAndDevelopmentToRevenue() {
        return researchAndDevelopmentToRevenue;
    }

    public float getIntangiblesToTotalAssets() {
        return intangiblesToTotalAssets;
    }

    public float getCapexToOperatingCashFlow() {
        return capexToOperatingCashFlow;
    }

    public float getCapexToRevenue() {
        return capexToRevenue;
    }

    public float getCapexToDepreciation() {
        return capexToDepreciation;
    }

    public float getStockBasedCompensationToRevenue() {
        return stockBasedCompensationToRevenue;
    }

    public float getGrahamNumber() {
        return grahamNumber;
    }

    public float getRoic() {
        return roic;
    }

    public float getReturnOnTangibleAssets() {
        return returnOnTangibleAssets;
    }

    public float getGrahamNetNet() {
        return grahamNetNet;
    }

    public float getWorkingCapital() {
        return workingCapital;
    }

    public float getTangibleAssetValue() {
        return tangibleAssetValue;
    }

    public float getNetCurrentAssetValue() {
        return netCurrentAssetValue;
    }

    public float getInvestedCapital() {
        return investedCapital;
    }

    public float getAverageReceivables() {
        return averageReceivables;
    }

    public float getAveragePayables() {
        return averagePayables;
    }

    public float getAverageInventory() {
        return averageInventory;
    }

    public float getDaysSalesOutstanding() {
        return daysSalesOutstanding;
    }

    public float getDaysPayablesOutstanding() {
        return daysPayablesOutstanding;
    }

    public float getDaysOfInventoryOnHand() {
        return daysOfInventoryOnHand;
    }

    public float getReceivablesTurnover() {
        return receivablesTurnover;
    }

    public float getPayablesTurnover() {
        return payablesTurnover;
    }

    public float getInventoryTurnover() {
        return inventoryTurnover;
    }

    public float getRoe() {
        return roe;
    }

    public float getCapexPerShare() {
        return capexPerShare;
    }

}
