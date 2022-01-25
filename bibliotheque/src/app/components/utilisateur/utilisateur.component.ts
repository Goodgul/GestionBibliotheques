import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
status:boolean=false;
selectedvalue:Number[]=[];

  toppings = new FormControl();
  toppingList: Number[] = [10, 20, 30, 40, 50, 60];

  constructor(private ServicesService:ServicesService) { }

  mavariable:any;
  livreHtlm={

    "titre":'',
    "description":''
  }
  listeLivreshow:boolean=false;

  ngOnInit(): void {
    this.getEtablissement();



    
  }


  

////////////////////////////////affiche les bibliotheque
  getEtablissement(){

    this.ServicesService.getBibliotheque().subscribe(data=> {
      this.listedEtablissement = data;
      console.log(this.listedEtablissement)
  
  })}

  listedEtablissement:any;
  listeLivre:any;
quantitlivre:any;

////////////////////////////////////////////////// recherche les livres d une bibliotheque données
  recherchelivreparBibliotheque(motcle:any){
 
    this.mavariable=motcle
    console.log(motcle)
  
  
    this.ServicesService.getlivreparbibliotheque(motcle).subscribe(data=> {
     

      this.listeLivre = data; 
    
      
      this.livreHtlm=this.listeLivre
      console.log(this.listeLivre)
  
      
  })}

  //////////////////////////**************avoir une qantite de livre entre deux valeur donnée************************* */
quantitBetwen(valeurs:any){

  console.log(this.selectedvalue.length)
  valeurs=this.selectedvalue;
  this.ServicesService.getquantiteBetwen(valeurs[0],valeurs[1]).subscribe(data=> {

    this.status=false;

    this.quantitlivre=data;
    console.log(this.quantitlivre);

})
}

////////////////////////////////

nombreatteint(nombre:any){
if(nombre.length>=2){

  this.status=true
}


}
}

