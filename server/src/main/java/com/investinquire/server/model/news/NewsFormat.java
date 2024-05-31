package com.investinquire.server.model.news;

import java.util.List;
import java.io.Serial;
import java.io.Serializable;

public class NewsFormat implements Serializable {

    @Serial
    private static final long serialVersionUID = 4L; // static version identifier

    private List<News> data;

    // Getters and setters
    public List<News> getData() {
        return data;
    }

    public void setData(List<News> data) {
        this.data = data;
    }
}
