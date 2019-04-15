package com.university.pune.ofed.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.university.pune.ofed.entity.Restaurant;

public interface RestaurantRepository extends CrudRepository<Restaurant, Long>{
	
	public List<Restaurant> findByNameContaining(String name);

}
