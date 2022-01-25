package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.example.demo.Dao.BibliothequeRepository;
import com.example.demo.entities.Bibliotheque;
import com.example.demo.entities.Livre;






@SpringBootApplication
public class GestionBibliothequeSqlLombokApplication implements CommandLineRunner {

@Autowired
private RepositoryRestConfiguration rrc;
	

	public static void main(String[] args) {
		SpringApplication.run(GestionBibliothequeSqlLombokApplication.class, args);
		
				
			
		}


	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		rrc.exposeIdsFor(Bibliotheque.class,Livre.class);
		
	}



	}



