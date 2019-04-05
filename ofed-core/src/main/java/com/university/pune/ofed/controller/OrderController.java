package com.university.pune.ofed.controller;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Produces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.university.pune.ofed.entity.FoodOrder;
import com.university.pune.ofed.repository.OrderRepository;

@RestController
@RequestMapping("api/order")
public class OrderController {

	@Autowired
	OrderRepository orderRepository;
	
	@GetMapping("welcome")
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> welcome(){
		return new ResponseEntity<String>("Welome to Orders!", HttpStatus.OK);
	}
	
	@GetMapping("/fetchAllOrders")
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> fetchAllOrders(){
		
		List<FoodOrder> orders = new ArrayList<>();
		ResponseEntity<List<FoodOrder>> responseEntity = null;
		
		Iterable<FoodOrder> orderDB = this.orderRepository.findAll();
		orderDB.forEach(order -> {
			orders.add(order);
		});
		responseEntity = new ResponseEntity<List<FoodOrder>>(orders, HttpStatus.OK);
		
		return responseEntity;
	}
	
}
