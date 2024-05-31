package com.investinquire.server.model.details;

import java.io.Serial;
import java.io.Serializable;

public class CompanyRating implements Serializable {

    @Serial
    private static final long serialVersionUID = 30L; // static version identifier

    private String symbol;
    private String date;
    private String rating;
    private int ratingScore;
    private String ratingRecommendation;
    private int ratingDetailsDCFScore;
    private String ratingDetailsDCFRecommendation;
    private int ratingDetailsROEScore;
    private String ratingDetailsROERecommendation;
    private int ratingDetailsROAScore;
    private String ratingDetailsROARecommendation;
    private int ratingDetailsDEScore;
    private String ratingDetailsDERecommendation;
    private int ratingDetailsPEScore;
    private String ratingDetailsPERecommendation;
    private int ratingDetailsPBScore;
    private String ratingDetailsPBRecommendation;

    public String getSymbol() {
        return symbol;
    }

    public String getDate() {
        return date;
    }

    public String getRating() {
        return rating;
    }

    public int getRatingScore() {
        return ratingScore;
    }

    public String getRatingRecommendation() {
        return ratingRecommendation;
    }

    public int getRatingDetailsDCFScore() {
        return ratingDetailsDCFScore;
    }

    public String getRatingDetailsDCFRecommendation() {
        return ratingDetailsDCFRecommendation;
    }

    public int getRatingDetailsROEScore() {
        return ratingDetailsROEScore;
    }

    public String getRatingDetailsROERecommendation() {
        return ratingDetailsROERecommendation;
    }

    public int getRatingDetailsROAScore() {
        return ratingDetailsROAScore;
    }

    public String getRatingDetailsROARecommendation() {
        return ratingDetailsROARecommendation;
    }

    public int getRatingDetailsDEScore() {
        return ratingDetailsDEScore;
    }

    public String getRatingDetailsDERecommendation() {
        return ratingDetailsDERecommendation;
    }

    public int getRatingDetailsPEScore() {
        return ratingDetailsPEScore;
    }

    public String getRatingDetailsPERecommendation() {
        return ratingDetailsPERecommendation;
    }

    public int getRatingDetailsPBScore() {
        return ratingDetailsPBScore;
    }

    public String getRatingDetailsPBRecommendation() {
        return ratingDetailsPBRecommendation;
    }
}
