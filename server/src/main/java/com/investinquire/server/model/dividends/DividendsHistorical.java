package com.investinquire.server.model.dividends;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serial;
import java.io.Serializable;
import java.util.List;

public class DividendsHistorical implements Serializable {

    @Serial
    private static final long serialVersionUID = 22L; // static version identifier

    @JsonProperty("symbol")
    private final String symbol;

    @JsonProperty("historical")
    private final List<DividendRecord> historical;

    public DividendsHistorical(@JsonProperty("symbol") String symbol, @JsonProperty("historical") List<DividendRecord> historical) {
        this.symbol = symbol;
        this.historical = historical;
    }

    public String getSymbol() {
        return symbol;
    }

    public List<DividendRecord> getHistorical() {
        return historical;
    }
}
