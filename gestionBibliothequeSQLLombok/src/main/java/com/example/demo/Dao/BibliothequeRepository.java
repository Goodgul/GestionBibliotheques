package com.example.demo.Dao;



import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Bibliotheque;
import com.example.demo.entities.Livre;



@RestController
@CrossOrigin("*")
public interface BibliothequeRepository extends JpaRepository<Bibliotheque, Long>{

	
	
	
	  @RestResource(path="/ByName")
	  
	  public List<Bibliotheque>	  findByTitreContains(@Param("titre") String titre);
	  
	


	 
}
