import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

bibliothequeHtlm={

  "titre":'',
  "adresse":'',
  "description":'',
  "mocle":''
}


  listedEtablissement:any;
  nombreResultat:any;
 
  
  bg:string='https://www.oteis.fr/wp-content/uploads/2015/11/M%C3%A9diath%C3%A8que-Vitrolles-51.jpg'

  constructor( private ServicesService:ServicesService) { }

  ngOnInit(): void {
  }

  
  rechercheBib(motcle:any){
   

  console.log(motcle.value.titre)

  let t=motcle.value.titre

  this.ServicesService.getBibliothequeparmotcle(t).subscribe(data=> {

    this.listedEtablissement = data; // 

    this.nombreResultat=this.listedEtablissement._embedded.bibliotheques.length  //  recupere le nombre d element trouver 
    
    console.log(this.nombreResultat)

    this.bibliothequeHtlm=this.listedEtablissement

    this.bibliothequeHtlm.mocle=motcle.value.titre

    console.log( this.bibliothequeHtlm.mocle)

    console.log(this.listedEtablissement)

})}

}
