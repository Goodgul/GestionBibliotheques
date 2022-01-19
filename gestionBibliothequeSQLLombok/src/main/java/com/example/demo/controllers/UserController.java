package com.example.demo.controllers;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Dao.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {
	
@Autowired
private UserRepository UsR;
@GetMapping("/")
public ResponseEntity findAll() {
	return ResponseEntity.ok(UsR.findAll());
	}
	/*
	 * @GetMapping("/{idUser}")
	 * 
	 * public ResponseEntity findUserById(@PathVariable(name="idUser") Long idUser)
	 * { if(idUser==null) { return
	 * ResponseEntity.badRequest().body("user est null"); } User user =
	 * UsR.getOne(idUser); if(user==null) {
	 * 
	 * 
	 * }
	 * 
	 * 
	 * }
	 */
}


