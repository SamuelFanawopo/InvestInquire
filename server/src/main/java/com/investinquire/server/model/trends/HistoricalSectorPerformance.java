package com.investinquire.server.model.trends;

import java.io.Serial;
import java.io.Serializable;

public class HistoricalSectorPerformance implements Serializable {

    @Serial
    private static final long serialVersionUID = 70L;

    private String date;
    private float basicMaterialsChangesPercentage;
    private float communicationServicesChangesPercentage;
    private float consumerCyclicalChangesPercentage;
    private float consumerDefensiveChangesPercentage;
    private float energyChangesPercentage;
    private float financialServicesChangesPercentage;
    private float healthcareChangesPercentage;
    private float industrialsChangesPercentage;
    private float realEstateChangesPercentage;
    private float technologyChangesPercentage;
    private float utilitiesChangesPercentage;

    public String getDate() {
        return date;
    }

    public float getBasicMaterialsChangesPercentage() {
        return basicMaterialsChangesPercentage;
    }

    public float getCommunicationServicesChangesPercentage() {
        return communicationServicesChangesPercentage;
    }

    public float getConsumerCyclicalChangesPercentage() {
        return consumerCyclicalChangesPercentage;
    }

    public float getConsumerDefensiveChangesPercentage() {
        return consumerDefensiveChangesPercentage;
    }

    public float getEnergyChangesPercentage() {
        return energyChangesPercentage;
    }

    public float getFinancialServicesChangesPercentage() {
        return financialServicesChangesPercentage;
    }

    public float getHealthcareChangesPercentage() {
        return healthcareChangesPercentage;
    }

    public float getIndustrialsChangesPercentage() {
        return industrialsChangesPercentage;
    }

    public float getRealEstateChangesPercentage() {
        return realEstateChangesPercentage;
    }

    public float getTechnologyChangesPercentage() {
        return technologyChangesPercentage;
    }

    public float getUtilitiesChangesPercentage() {
        return utilitiesChangesPercentage;
    }

}
