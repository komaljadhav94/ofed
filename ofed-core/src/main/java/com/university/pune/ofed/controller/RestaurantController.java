package com.university.pune.ofed.controller;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.university.pune.ofed.entity.Restaurant;
import com.university.pune.ofed.repository.RestaurantRepository;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantController {

	@Autowired
	RestaurantRepository restaurantRepository;
	
	@GetMapping("/fetchAllRestaurants")
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> fetchAllRestaurants(){
		ResponseEntity<List<Restaurant>> responseEntity = null;
		Iterable<Restaurant> restaurantsIterable = this.restaurantRepository.findAll();
		List<Restaurant> restaurants = new ArrayList<>();
		
		restaurantsIterable.forEach(restaurant -> {
			restaurants.add(restaurant);
		});
		
		responseEntity = new ResponseEntity<List<Restaurant>>(restaurants, HttpStatus.OK);
		
		return responseEntity;
	}
	
	@PostMapping("/fetchAllRestaurant")
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	@Consumes(MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> fetchRestaurant(@RequestBody String id){
		ResponseEntity<Restaurant> responseEntity = null;
		Restaurant restaurant = this.restaurantRepository.findById(Long.valueOf(id)).get();
		responseEntity = new ResponseEntity<>(restaurant, HttpStatus.OK);
		return responseEntity;
	}
}
