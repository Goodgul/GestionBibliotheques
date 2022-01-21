import { Component, OnInit } from '@angular/core';
import { AuthentificationserviceService } from 'src/app/authentificationservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  var2: any;
  identifiantHtlm = {

    "nom": '',
    "motdepasse": '',

  }

  showme:boolean=false

  constructor(public authoservice: AuthentificationserviceService, private router: Router) { }

  ngOnInit(): void {
  }


  
functionpageconnexion(){
  this.router.navigate(['/biblio']);
}


connecter:any;
  connexion(identifiant: any) {
    this.identifiantHtlm=identifiant

this.authoservice.autho(this.identifiantHtlm.nom,this.identifiantHtlm.motdepasse);



}
     }
    

  

    





