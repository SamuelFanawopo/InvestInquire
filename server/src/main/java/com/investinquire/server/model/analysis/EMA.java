package com.investinquire.server.model.analysis;

import java.io.Serial;
import java.io.Serializable;

public class EMA implements Serializable{

    @Serial
    private static final long serialVersionUID = 36L; // static version identifier

    private float ema;

    public float getEma() {
        return ema;
    }
}
