package fr.treeptik.springbootredisws.controller;

import fr.treeptik.springbootredisws.domain.Weather;

/**
 * Created by guillaume on 18/01/17.
 */
public interface WeatherService {
    Weather getFromRedis(String name);
}