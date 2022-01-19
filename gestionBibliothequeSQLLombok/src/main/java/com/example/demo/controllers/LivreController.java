package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.LivreService;
import com.example.demo.entities.Livre;

@RestController

public class LivreController {
	
	  @Autowired LivreService Service;
	  

	 
    
 
		/********************************Ajouter un livre**********************/
		  @RequestMapping(method =RequestMethod.POST, path = "/saveLivre")
		  
		  
		  public ResponseEntity saveLivre(@RequestBody Livre
		  livre) {
		  
		  return ResponseEntity.ok(Service.saveLivre(livre));}

	


}
