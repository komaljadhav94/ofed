package com.university.pune.ofed.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/healthcheck")
public class HealthCheckController {

	@GetMapping("/alive")
	public ResponseEntity<?> alive(){
		ResponseEntity<String> responseEntity = new ResponseEntity<String>("Alive", HttpStatus.OK);
		return responseEntity;
	}
}
