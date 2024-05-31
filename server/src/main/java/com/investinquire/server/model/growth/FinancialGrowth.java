package com.investinquire.server.model.growth;

import java.io.Serial;
import java.io.Serializable;

public class FinancialGrowth implements Serializable {

    @Serial
    private static final long serialVersionUID = 16L; // static version identifier

    private String symbol;
    private String date;
    private String period;
    private float revenueGrowth;
    private float grossProfitGrowth;
    private float ebitgrowth;
    private float operatingIncomeGrowth;
    private float netIncomeGrowth;
    private float epsgrowth;
    private float epsdilutedGrowth;
    private float weightedAverageSharesGrowth;
    private float weightedAverageSharesDilutedGrowth;
    private float dividendsperShareGrowth;
    private float operatingCashFlowGrowth;
    private float freeCashFlowGrowth;
    private float tenYRevenueGrowthPerShare;
    private float fiveYRevenueGrowthPerShare;
    private float threeYRevenueGrowthPerShare;
    private float tenYOperatingCFGrowthPerShare;
    private float fiveYOperatingCFGrowthPerShare;
    private float threeYOperatingCFGrowthPerShare;
    private float tenYNetIncomeGrowthPerShare;
    private float fiveYNetIncomeGrowthPerShare;
    private float threeYNetIncomeGrowthPerShare;
    private float tenYShareholdersEquityGrowthPerShare;
    private float fiveYShareholdersEquityGrowthPerShare;
    private float threeYShareholdersEquityGrowthPerShare;
    private float tenYDividendperShareGrowthPerShare;
    private float fiveYDividendperShareGrowthPerShare;
    private float threeYDividendperShareGrowthPerShare;
    private float receivablesGrowth;
    private float inventoryGrowth;
    private float assetGrowth;
    private float bookValueperShareGrowth;
    private float debtGrowth;
    private float rdexpenseGrowth;
    private float sgaexpensesGrowth;

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

    public float getRevenueGrowth() {
        return revenueGrowth;
    }

    public float getGrossProfitGrowth() {
        return grossProfitGrowth;
    }

    public float getEbitgrowth() {
        return ebitgrowth;
    }

    public float getOperatingIncomeGrowth() {
        return operatingIncomeGrowth;
    }

    public float getNetIncomeGrowth() {
        return netIncomeGrowth;
    }

    public float getEpsgrowth() {
        return epsgrowth;
    }

    public float getEpsdilutedGrowth() {
        return epsdilutedGrowth;
    }

    public float getWeightedAverageSharesGrowth() {
        return weightedAverageSharesGrowth;
    }

    public float getWeightedAverageSharesDilutedGrowth() {
        return weightedAverageSharesDilutedGrowth;
    }

    public float getDividendsperShareGrowth() {
        return dividendsperShareGrowth;
    }

    public float getOperatingCashFlowGrowth() {
        return operatingCashFlowGrowth;
    }

    public float getFreeCashFlowGrowth() {
        return freeCashFlowGrowth;
    }

    public float getTenYRevenueGrowthPerShare() {
        return tenYRevenueGrowthPerShare;
    }

    public float getFiveYRevenueGrowthPerShare() {
        return fiveYRevenueGrowthPerShare;
    }

    public float getThreeYRevenueGrowthPerShare() {
        return threeYRevenueGrowthPerShare;
    }

    public float getTenYOperatingCFGrowthPerShare() {
        return tenYOperatingCFGrowthPerShare;
    }

    public float getFiveYOperatingCFGrowthPerShare() {
        return fiveYOperatingCFGrowthPerShare;
    }

    public float getThreeYOperatingCFGrowthPerShare() {
        return threeYOperatingCFGrowthPerShare;
    }

    public float getTenYNetIncomeGrowthPerShare() {
        return tenYNetIncomeGrowthPerShare;
    }

    public float getFiveYNetIncomeGrowthPerShare() {
        return fiveYNetIncomeGrowthPerShare;
    }

    public float getThreeYNetIncomeGrowthPerShare() {
        return threeYNetIncomeGrowthPerShare;
    }

    public float getTenYShareholdersEquityGrowthPerShare() {
        return tenYShareholdersEquityGrowthPerShare;
    }

    public float getFiveYShareholdersEquityGrowthPerShare() {
        return fiveYShareholdersEquityGrowthPerShare;
    }

    public float getThreeYShareholdersEquityGrowthPerShare() {
        return threeYShareholdersEquityGrowthPerShare;
    }

    public float getTenYDividendperShareGrowthPerShare() {
        return tenYDividendperShareGrowthPerShare;
    }

    public float getFiveYDividendperShareGrowthPerShare() {
        return fiveYDividendperShareGrowthPerShare;
    }

    public float getThreeYDividendperShareGrowthPerShare() {
        return threeYDividendperShareGrowthPerShare;
    }

    public float getReceivablesGrowth() {
        return receivablesGrowth;
    }

    public float getInventoryGrowth() {
        return inventoryGrowth;
    }

    public float getAssetGrowth() {
        return assetGrowth;
    }

    public float getBookValueperShareGrowth() {
        return bookValueperShareGrowth;
    }

    public float getDebtGrowth() {
        return debtGrowth;
    }

    public float getRdexpenseGrowth() {
        return rdexpenseGrowth;
    }

    public float getSgaexpensesGrowth() {
        return sgaexpensesGrowth;
    }
}

