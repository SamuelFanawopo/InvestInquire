package com.investinquire.server.model.analysis;

import java.io.Serial;
import java.io.Serializable;

public class TEMA implements Serializable {

    @Serial
    private static final long serialVersionUID = 33L; // static version identifier

    private float tema;

    public float getTema() {
        return tema;
    }
}
