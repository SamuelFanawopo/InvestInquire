package com.investinquire.server.model.growth;

import java.io.Serial;
import java.io.Serializable;

public class IncomeStatement implements Serializable {

    @Serial
    private static final long serialVersionUID = 15L; // static version identifier

    private String date;
    private String symbol;
    private String reportedCurrency;
    private String cik;
    private String fillingDate;
    private String acceptedDate;
    private String calendarYear;
    private String period;
    private Float revenue;
    private Float costOfRevenue;
    private Float grossProfit;
    private Float grossProfitRatio;
    private Float researchAndDevelopmentExpenses;
    private Float generalAndAdministrativeExpenses;
    private Float sellingAndMarketingExpenses;
    private Float sellingGeneralAndAdministrativeExpenses;
    private Float otherExpenses;
    private Float operatingExpenses;
    private Float costAndExpenses;
    private Float interestIncome;
    private Float interestExpense;
    private Float depreciationAndAmortization;
    private Float ebitda;
    private Float ebitdaratio;
    private Float operatingIncome;
    private Float operatingIncomeRatio;
    private Float totalOtherIncomeExpensesNet;
    private Float incomeBeforeTax;
    private Float incomeBeforeTaxRatio;
    private Float incomeTaxExpense;
    private Float netIncome;
    private Float netIncomeRatio;
    private Float eps;
    private Float epsdiluted;
    private Float weightedAverageShsOut;
    private Float weightedAverageShsOutDil;
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
    public Float getRevenue() { return revenue; }
    public Float getCostOfRevenue() { return costOfRevenue; }
    public Float getGrossProfit() { return grossProfit; }
    public Float getGrossProfitRatio() { return grossProfitRatio; }
    public Float getResearchAndDevelopmentExpenses() { return researchAndDevelopmentExpenses; }
    public Float getGeneralAndAdministrativeExpenses() { return generalAndAdministrativeExpenses; }
    public Float getSellingAndMarketingExpenses() { return sellingAndMarketingExpenses; }
    public Float getSellingGeneralAndAdministrativeExpenses() { return sellingGeneralAndAdministrativeExpenses; }
    public Float getOtherExpenses() { return otherExpenses; }
    public Float getOperatingExpenses() { return operatingExpenses; }
    public Float getCostAndExpenses() { return costAndExpenses; }
    public Float getInterestIncome() { return interestIncome; }
    public Float getInterestExpense() { return interestExpense; }
    public Float getDepreciationAndAmortization() { return depreciationAndAmortization; }
    public Float getEbitda() { return ebitda; }
    public Float getEbitdaratio() { return ebitdaratio; }
    public Float getOperatingIncome() { return operatingIncome; }
    public Float getOperatingIncomeRatio() { return operatingIncomeRatio; }
    public Float getTotalOtherIncomeExpensesNet() { return totalOtherIncomeExpensesNet; }
    public Float getIncomeBeforeTax() { return incomeBeforeTax; }
    public Float getIncomeBeforeTaxRatio() { return incomeBeforeTaxRatio; }
    public Float getIncomeTaxExpense() { return incomeTaxExpense; }
    public Float getNetIncome() { return netIncome; }
    public Float getNetIncomeRatio() { return netIncomeRatio; }
    public Float getEps() { return eps; }
    public Float getEpsdiluted() { return epsdiluted; }
    public Float getWeightedAverageShsOut() { return weightedAverageShsOut; }
    public Float getWeightedAverageShsOutDil() { return weightedAverageShsOutDil; }
    public String getLink() { return link; }
    public String getFinalLink() { return finalLink; }
}
