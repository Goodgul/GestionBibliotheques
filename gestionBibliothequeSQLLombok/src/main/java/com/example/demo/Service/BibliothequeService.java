package com.example.demo.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.BibliothequeRepository;
import com.example.demo.Dao.LivreRepository;
import com.example.demo.Dao.UserRepository;
import com.example.demo.entities.Bibliotheque;
import com.example.demo.entities.Livre;
import com.example.demo.entities.User;

import lombok.Data;
import net.bytebuddy.utility.RandomString;


@Service
public class BibliothequeService {

	@Autowired
	private BibliothequeRepository BiBReposi;
	
	@Autowired
	private LivreRepository LivreRepos;

	/** ***************************methode pour ajouter************************* ****/

	public Bibliotheque saveBibliotheque(Bibliotheque bibliotheque) {

		System.out.println(bibliotheque);
		Bibliotheque saveBiblio = BiBReposi.save(bibliotheque);
		return saveBiblio;
	}

	
	/** ***********************************methode pour afficher******************** ****/

	public List<Bibliotheque> getBibliotheques() {

		return BiBReposi.findAll();
	}
	
	
	/*****************************trouver avec un ID***************************/
	
	
	public Bibliotheque getBibliothequeById(Long IdBib){
		return BiBReposi.findById(IdBib).orElse(null);
		
		
	}



/** methode pour Supprimer ****/

  public void supprimerBibliotheque(Long IdBib) {
  BiBReposi.deleteById(IdBib);
  
  }
  
  /** methode pour Modifier tous ****/
	/*
	 * public Bibliotheque ModifierBibliotheque(Long IdBib , Bibliotheque
	 * bibliotheque) { BiBReposi.findById(IdBib); if(bibliotheque.isPresent()) {
	 * bibliotheque.setIdBib(IdBib); return BiBReposi.save(bibliotheque); }
	 * 
	 * 
	 * 
	 * }
	 */
  
  public void saveBibRondom() {
	 
	  Random rnd= new Random();
		int nbrAdhrent;
		for(int i=0;i<=50;i++) {
			
		Bibliotheque bibliotheque =new Bibliotheque();
		nbrAdhrent=rnd.nextInt(5,15);
		System.out.println(nbrAdhrent);
		bibliotheque.setTitre(RandomString.make(8));
		bibliotheque.setDescription(RandomString.make(100));
		bibliotheque.setNbrAdhrent(nbrAdhrent);
		BiBReposi.save(bibliotheque);
		
		}
	
  }
  /** methode pour supprimer tous ****/
  
  public void  supprimerBibliothequeTous() {
	  BiBReposi.deleteAll();
	  
	  
  }
 /*********************Recherche par  mot clé*********************/
  
	/*
	 * public void RechercheBye() { List<Bibliotheque>
	 * bib=BiBReposi.findByNomContains("a") ; }
	
	 *
	 *
	 */
  /*************recherche les utlisteurs d une biliotheques*******************************/
  public void rechercheRondom() {
		 
	  Random rnd= new Random();
		int nbrAdhrent;
		for(int i=0;i<2;i++) {
			
			Bibliotheque bibliotheque =new Bibliotheque();
			nbrAdhrent=rnd.nextInt(5,15);
			System.out.println(nbrAdhrent);
			bibliotheque.setTitre(RandomString.make(8));
			bibliotheque.setDescription(RandomString.make(100));
			bibliotheque.setNbrAdhrent(nbrAdhrent);
			
			BiBReposi.save(bibliotheque);
		}
		BiBReposi.findAll().forEach(b->{
			System.out.println(b);
			for(int j=0;j<5;j++) {
				Livre livre=new Livre(null,"la dame au camilion",0,"societe",null,b);
				LivreRepos.save(livre);}
			
		});
			
		
		
			}
  
  /*************rechercher par un element donnée*******************************/
	/*
	 * public
	 * ResponseEntity<List<Bibliotheque>>getBibliothequeByTitreAndDescription(String
	 * titre, String description){
	 * 
	 * return new
	 * ResponseEntity<>(BiBReposi.findByTitreAndDescription(),HttpStatus.OK) }
	 */
		
		}
	
  
  
  
 





