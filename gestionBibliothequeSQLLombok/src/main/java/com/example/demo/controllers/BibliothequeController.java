package com.example.demo.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Bibliotheque;
import com.example.demo.Service.BibliothequeService;


@RestController
public class BibliothequeController {

	
	  @Autowired BibliothequeService Service;
	 
    
 
		
		  @RequestMapping(method =RequestMethod.POST, path = "/save")
		  
		  
		  public ResponseEntity saveBibliotheque(@RequestBody Bibliotheque
		  bibliotheque) {
		  
		  return ResponseEntity.ok(Service.saveBibliotheque(bibliotheque)) ; }
		 
    /********************** findAll******************************************/
  
	/*
	 * @GetMapping("/bibl")
	 * 
	 * public List<Bibliotheque> Bibliotheque() {
	 * 
	 * return Service.getBibliotheques(); }
	 */
    
    
	 
/////////////////////******trouver bi id*************************/
	 	  
	
	  @RequestMapping("/getBib/{IdBib}")
	  
	  @ResponseBody public Bibliotheque getById(@PathVariable("IdBib") Long IdBib)
	  { return Service.getBibliothequeById(IdBib); }
	 
    
/////////////////////******Supprimer*************************/
	
	  @RequestMapping("/supprimerBib/{IdBib}")
	  
	  @ResponseBody 
	  public String supprimer(@PathVariable(value="IdBib") Long
	  IdBib) { Service.supprimerBibliotheque(IdBib); return
	  "Supprimer avec succès="+IdBib;
	  
	  }
	 
    
    /////////////***********Modifier tous******************************/
	
	/*
	 * @RequestMapping("/ModifierBib/{IdBib}")
	 * 
	 * 
	 * public Boolean modifierBibliotheque(@PathVariable Long IdBib, @RequestBody
	 * Bibliotheque bibliotheque) {
	 * 
	 * Service.ModifierBibliotheque(IdBib, bibliotheque); return true; }
	 */
	 
    /////////////***********save avec rondom tous******************************/ 
    
	
	  @RequestMapping(method =RequestMethod.POST, path = "/saveRondom")
	  
	  @ResponseBody public void saveBibRondom( ) { Service.rechercheRondom();
	  
	  
	 
	 } 
    
/////////////////////******Supprimer tous*************************/
	
	  @RequestMapping("/supprimerTous")
	  
	  @ResponseBody public String supprimerTous() {
	  Service.supprimerBibliothequeTous(); return "Supprimer avec succès=";
	  
	  }
	 
/////////////////////******Recherche par  mot clé*************************/

    
}





   
