package com.university.pune.ofed.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

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
	
	@GetMapping("/fetchDefaultUser")
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> fetchDefaultUser(){
		ResponseEntity<User> responseEntity = null;
		User user = this.userRepository.findById((long) 1).get();
		responseEntity = new ResponseEntity<User>(user, HttpStatus.OK);
		return responseEntity;
	}
	
	@PostMapping("/register")
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	@Consumes(MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> register(@RequestBody User user){
		ResponseEntity<User> responseEntity = null;
		User result = this.userRepository.save(user);
		responseEntity = new ResponseEntity<User>(result, HttpStatus.OK);
		return responseEntity;
	}
	
	@PostMapping("/login")
	@Produces(MediaType.APPLICATION_JSON_VALUE)
	@Consumes(MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> login(@RequestBody User user){
		ResponseEntity<User> responseEntity = null;
		User result = this.userRepository.findUserByEmail(user.getEmail());
		if(result != null && user.getPassword().equals(result.getPassword())) {
			responseEntity = new ResponseEntity<User>(result, HttpStatus.OK);
		} else {
			responseEntity = new ResponseEntity<User>(new User(), HttpStatus.NOT_FOUND);
		}
		return responseEntity;
	}
}
