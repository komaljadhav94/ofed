package com.university.pune.ofed.repository;

import org.springframework.data.repository.CrudRepository;

import com.university.pune.ofed.entity.User;

public interface UserRepository extends CrudRepository<User, Long>{
	public User findUserByEmail(String email);
}
