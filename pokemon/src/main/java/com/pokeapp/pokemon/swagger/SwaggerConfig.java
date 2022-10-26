package com.pokeapp.pokemon.swagger;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.*;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.Arrays;
import java.util.Collections;



@Configuration
@EnableSwagger2
public class SwaggerConfig {

    private ApiInfo apiInfo() {
        return new ApiInfo(
                "Endpoints Reto PokeApi Krugger",
                "Bienvenidos a la documentacion en swagger, todos los endpoints son públicos así que pueden acceder normalmente",
                "1",
                "Términos de servicio",
                new Contact("Bryan Quisaguano", "www.linkedin.com/in/bryan-quisaguano", "bryan.quisaguano@epn.edu.ec"),
                "License of API",
                "API license URL",
                Collections.emptyList()
        );
    }
    @Bean
    public Docket api(){
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.pokeapp.pokemon.controller"))
                .paths(PathSelectors.any())
                .build();
    }
}