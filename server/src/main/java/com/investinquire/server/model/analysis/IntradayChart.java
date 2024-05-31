package com.investinquire.server.model.analysis;

import java.io.Serial;
import java.io.Serializable;

public class IntradayChart implements Serializable {

    @Serial
    private static final long serialVersionUID = 35L; // static version identifier

    private String date;
    private float open;
    private float low;
    private float high;
    private float close;
    private int volume;

    public String getDate() {
        return date;
    }

    public float getOpen() {
        return open;
    }

    public float getLow() {
        return low;
    }

    public float getHigh() {
        return high;
    }

    public float getClose() {
        return close;
    }

    public int getVolume() {
        return volume;
    }
}
