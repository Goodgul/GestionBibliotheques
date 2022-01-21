import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthentificationserviceService } from 'src/app/authentificationservice.service';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit {


listedEtablissement:any;
  isDisabled: boolean = false;
  isDisabled1: boolean = false;

 Bibliothequehtml={

    titre: '',
    description: '',
    adresse:'',
    image:'',
   
  }




  constructor( private ServicesService:ServicesService,public authoservice: AuthentificationserviceService) { }
  ngOnInit(): void {
    this.getEtablissement();
    this.isDisabled1=true;


  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }




getEtablissement(){

  this.ServicesService.getBibliotheque().subscribe(data=> {
    this.listedEtablissement = data;
    console.log(this.listedEtablissement)

})}



    saveEtablissement(bibliotheque:any){
    
      console.log(bibliotheque.value)
      let data = bibliotheque.value
      this.ServicesService.saveBibliotheque(data).subscribe(data=> {
        console.log("Etablissement enregister")
        this.getEtablissement();
        bibliotheque.reset();

      })
    }

    suprimer(bibliotheque:any){
    
    
      this.ServicesService.supprimerBibliotheque(bibliotheque.id).subscribe(data=> {
        console.log("Etablissement est supprimer")
        this.getEtablissement();
      })
    }


    redireger(bibliotheque:any){
      this.Bibliothequehtml=bibliotheque;
      this.isDisabled=!  this.isDisabled;
      this.isDisabled1=!  this.isDisabled1;


    }

modifier(bibliotheque:any){
this.ServicesService.modifierBibliotheque(this.Bibliothequehtml).subscribe(data=>{
 
  console.log("Etablissement est modifier");
  this.isDisabled=!  this.isDisabled;
  this.isDisabled1=!  this.isDisabled1;
  // bibliotheque.reset();

})

}


}
