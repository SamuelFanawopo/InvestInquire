package com.investinquire.server.utility;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.investinquire.server.model.details.StockPriceChange;

import java.io.IOException;

public class StockPriceChangeDeserializer extends JsonDeserializer<StockPriceChange> {

    @Override
    public StockPriceChange deserialize(JsonParser jsonParser, DeserializationContext deserializationContext)
            throws IOException, JsonProcessingException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        StockPriceChange spc = new StockPriceChange();

        // Parse and set each field individually
        spc.setOneDay(node.has("1D") ? node.get("1D").floatValue() : null);
        spc.setFiveDays(node.has("5D") ? node.get("5D").floatValue() : null);
        spc.setOneMonth(node.has("1M") ? node.get("1M").floatValue() : null);
        spc.setThreeMonths(node.has("3M") ? node.get("3M").floatValue() : null);
        spc.setSixMonths(node.has("6M") ? node.get("6M").floatValue() : null);
        spc.setYearToDay(node.has("ytd") ? node.get("ytd").floatValue() : null);
        spc.setOneYear(node.has("1Y") ? node.get("1Y").floatValue() : null);
        spc.setThreeYears(node.has("3Y") ? node.get("3Y").floatValue() : null);
        spc.setFiveYears(node.has("5Y") ? node.get("5Y").floatValue() : null);
        spc.setTenYears(node.has("10Y") ? node.get("10Y").floatValue() : null);
        spc.setMax(node.has("max") ? node.get("max").floatValue() : null);

        return spc;
    }
}
