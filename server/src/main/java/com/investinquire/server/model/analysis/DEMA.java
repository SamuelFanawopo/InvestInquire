package com.investinquire.server.model.analysis;

import java.io.Serial;
import java.io.Serializable;

public class DEMA implements Serializable {

    @Serial
    private static final long serialVersionUID = 37L; // static version identifier

    private float dema;

    public float getDema() {
        return dema;
    }
}
