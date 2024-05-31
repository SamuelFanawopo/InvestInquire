package com.investinquire.server.model.growth;

import java.io.Serial;
import java.io.Serializable;

public class CashFlowStatement implements Serializable {

    @Serial
    private static final long serialVersionUID = 18L; // static version identifier

    private String date;
    private String symbol;
    private String reportedCurrency;
    private String cik;
    private String fillingDate;
    private String acceptedDate;
    private String calendarYear;
    private String period;
    private Float netIncome;
    private Float depreciationAndAmortization;
    private Float deferredIncomeTax;
    private Float stockBasedCompensation;
    private Float changeInWorkingCapital;
    private Float accountsReceivables;
    private Float inventory;
    private Float accountsPayables;
    private Float otherWorkingCapital;
    private Float otherNonCashItems;
    private Float netCashProvidedByOperatingActivities;
    private Float investmentsInPropertyPlantAndEquipment;
    private Float acquisitionsNet;
    private Float purchasesOfInvestments;
    private Float salesMaturitiesOfInvestments;
    private Float otherInvestingActivites;
    private Float netCashUsedForInvestingActivites;
    private Float debtRepayment;
    private Float commonStockIssued;
    private Float commonStockRepurchased;
    private Float dividendsPaid;
    private Float otherFinancingActivites;
    private Float netCashUsedProvidedByFinancingActivities;
    private Float effectOfForexChangesOnCash;
    private Float netChangeInCash;
    private Float cashAtEndOfPeriod;
    private Float cashAtBeginningOfPeriod;
    private Float operatingCashFlow;
    private Float capitalExpenditure;
    private Float freeCashFlow;
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
    public Float getNetIncome() { return netIncome; }
    public Float getDepreciationAndAmortization() { return depreciationAndAmortization; }
    public Float getDeferredIncomeTax() { return deferredIncomeTax; }
    public Float getStockBasedCompensation() { return stockBasedCompensation; }
    public Float getChangeInWorkingCapital() { return changeInWorkingCapital; }
    public Float getAccountsReceivables() { return accountsReceivables; }
    public Float getInventory() { return inventory; }
    public Float getAccountsPayables() { return accountsPayables; }
    public Float getOtherWorkingCapital() { return otherWorkingCapital; }
    public Float getOtherNonCashItems() { return otherNonCashItems; }
    public Float getNetCashProvidedByOperatingActivities() { return netCashProvidedByOperatingActivities; }
    public Float getInvestmentsInPropertyPlantAndEquipment() { return investmentsInPropertyPlantAndEquipment; }
    public Float getAcquisitionsNet() { return acquisitionsNet; }
    public Float getPurchasesOfInvestments() { return purchasesOfInvestments; }
    public Float getSalesMaturitiesOfInvestments() { return salesMaturitiesOfInvestments; }
    public Float getOtherInvestingActivites() { return otherInvestingActivites; }
    public Float getNetCashUsedForInvestingActivites() { return netCashUsedForInvestingActivites; }
    public Float getDebtRepayment() { return debtRepayment; }
    public Float getCommonStockIssued() { return commonStockIssued; }
    public Float getCommonStockRepurchased() { return commonStockRepurchased; }
    public Float getDividendsPaid() { return dividendsPaid; }
    public Float getOtherFinancingActivites() { return otherFinancingActivites; }
    public Float getNetCashUsedProvidedByFinancingActivities() { return netCashUsedProvidedByFinancingActivities; }
    public Float getEffectOfForexChangesOnCash() { return effectOfForexChangesOnCash; }
    public Float getNetChangeInCash() { return netChangeInCash; }
    public Float getCashAtEndOfPeriod() { return cashAtEndOfPeriod; }
    public Float getCashAtBeginningOfPeriod() { return cashAtBeginningOfPeriod; }
    public Float getOperatingCashFlow() { return operatingCashFlow; }
    public Float getCapitalExpenditure() { return capitalExpenditure; }
    public Float getFreeCashFlow() { return freeCashFlow; }
    public String getLink() { return link; }
    public String getFinalLink() { return finalLink; }
}
