package com.investinquire.server.model.analysis;

import java.io.Serial;
import java.io.Serializable;

public class SMA implements Serializable {

    @Serial
    private static final long serialVersionUID = 34L; // static version identifier

    private float sma;

    public float getSma() {
        return sma;
    }
}
