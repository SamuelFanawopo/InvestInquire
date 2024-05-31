package com.investinquire.server.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class WebClient {
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

}
