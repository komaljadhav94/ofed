package com.university.pune.ofed.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import javax.ws.rs.Produces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.university.pune.ofed.entity.User;
import com.university.pune.ofed.repository.UserRepository;

//http://localhost:8080/api/user
@RestController
@RequestMapping("api/user")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	//http://localhost:8080/api/user/fetchAllUsers
	@GetMapping("/fetchAllUsers")
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> fetchAllUsers(){
		//to return list of users
		List<User> users = new ArrayList<>();
		//reset response
		ResponseEntity<List<User>> responseEntity = null;
		//call database to fetch all users
		Iterable<User> usersDb = this.userRepository.findAll();
		//Convert iterable to list
		usersDb.forEach(user -> {
			users.add(user);
		});
		responseEntity = new ResponseEntity<List<User>>(users, HttpStatus.OK);
		return responseEntity;
	}
	
	
}
