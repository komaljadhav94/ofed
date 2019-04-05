package com.university.pune.ofed.config;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any()).build().apiInfo(this.apiInfo());
	}
	
	private ApiInfo apiInfo() {
	    return new ApiInfo(
	      "OFED REST API", 
	      "B.R Gholap Collage, Pune University", 
	      "API OFED", 
	      "Terms of service", 
	      new Contact("Komal Jadhav", "", "komal.a.jadhav94@gmail.com"), 
	      "License of API", "API license URL", Collections.emptyList());
	}
}