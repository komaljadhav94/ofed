package com.university.pune.ofed.repository;

import org.springframework.data.repository.CrudRepository;

import com.university.pune.ofed.entity.FoodOrder;

public interface OrderRepository extends CrudRepository<FoodOrder, Long>{

}
