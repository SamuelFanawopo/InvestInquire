package com.investinquire.server.model.details;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serial;
import java.io.Serializable;

public class GlobalQuoteResponse implements Serializable {
    @Serial
    private static final long serialVersionUID = 52L;

    @JsonProperty("Global Quote")
    private GlobalQuote globalQuote;

    public GlobalQuote getGlobalQuote() {
        return globalQuote;
    }
}
