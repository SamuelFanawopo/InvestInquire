package com.investinquire.server.model.utilities;

import java.io.Serial;
import java.io.Serializable;

public class SymbolList implements Serializable {

    @Serial
    private static final long serialVersionUID = 3L; // static version identifier

    private String symbol;
    private String name;

    public String getSymbol() {
        return symbol;
    }

    public String getName() {
        return name;
    }
}
