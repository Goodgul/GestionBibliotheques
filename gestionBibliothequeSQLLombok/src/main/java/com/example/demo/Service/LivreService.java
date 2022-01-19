package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.LivreRepository;
import com.example.demo.entities.Bibliotheque;
import com.example.demo.entities.Livre;
@Service
public class LivreService {
	@Autowired
	private LivreRepository LivreRepos;

	
	public Livre saveLivre(Livre livre) {

		System.out.println(livre);
		Livre savelivre = LivreRepos.save(livre);
		return savelivre;
		
		
		
		
	}
	
	
	
}
