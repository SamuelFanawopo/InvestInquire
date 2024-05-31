package com.investinquire.server.model.analysis;

import java.io.Serial;
import java.io.Serializable;

public class WMA implements Serializable {

    @Serial
    private static final long serialVersionUID = 32L; // static version identifier

    private float wma;

    public float getWma() {
        return wma;
    }
}
