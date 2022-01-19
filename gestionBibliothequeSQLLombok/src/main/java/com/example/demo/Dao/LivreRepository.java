package com.example.demo.Dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Livre;
@RestController
@CrossOrigin("http://localhost:4200")

public interface LivreRepository extends JpaRepository<Livre, Long>{
	@RestResource(path="/Bytitrebiblio")
	public List<Livre> findByBibliothequeTitre(@Param("titre") String titre);
	  
	
	@RestResource(path="/livreenquantitbetwen")
	public List<Livre> findByQuantiteBetween(@Param("quantitmin") int minQuantite, @Param("quantitmax") int maxQuantite);
	  
	  
	
	
}
