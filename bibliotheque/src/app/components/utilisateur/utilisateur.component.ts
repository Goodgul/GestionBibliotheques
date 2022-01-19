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

  changer(e:any){
    
if(e.length==2){
  this.status=true;


}

  }


  getEtablissement(){

    this.ServicesService.getBibliotheque().subscribe(data=> {
      this.listedEtablissement = data;
      console.log(this.listedEtablissement)
  
  })}

  listedEtablissement:any;
  listeLivre:any;
quantitlivre:any;

  recherchelivreparBibliotheque(motcle:any){
 
    this.mavariable=motcle
    console.log(motcle)
  
  
    this.ServicesService.getlivreparbibliotheque(motcle).subscribe(data=> {
     

      this.listeLivre = data; 
    
      
      this.livreHtlm=this.listeLivre
      console.log(this.listeLivre)
  
      
  })}

  //////////////////////////**************avoir une qantit entre deux valeur donnée************************* */
quantitBetwen(valeurs:any){

  console.log(this.selectedvalue.length)
  valeurs=this.selectedvalue;
  this.ServicesService.getquantiteBetwen(valeurs[0],valeurs[1]).subscribe(data=> {


    this.quantitlivre=data;
    console.log(this.quantitlivre);

})
}
}

