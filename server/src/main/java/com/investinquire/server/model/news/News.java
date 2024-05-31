package com.investinquire.server.model.news;

import java.io.Serial;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonProperty;

public class News implements Serializable {

    @Serial
    private static final long serialVersionUID = 5L; // static version identifier

    private String title;
    private String description;
    private String url;
    @JsonProperty("image_url")
    private String imageUrl;

    @JsonProperty("published_at")
    private String publishedAt;

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getUrl() {
        return url;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getPublishedAt() {
        return publishedAt;
    }
}
