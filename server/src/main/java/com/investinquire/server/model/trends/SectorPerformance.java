package com.investinquire.server.model.trends;

import java.io.Serial;
import java.io.Serializable;

public class SectorPerformance implements Serializable{

    @Serial
    private static final long serialVersionUID = 2L; // static version identifier

    private String sector;
    private String changesPercentage;

    public String getSector() {
        return sector;
    }

    public String getChangesPercentage() {
        return changesPercentage;
    }
}
