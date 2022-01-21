import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthentificationserviceService } from 'src/app/authentificationservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit(){
    let siloger:any;
    let utilisateurconnecter:any;


     siloger=localStorage.getItem('siloger');
     utilisateurconnecter=localStorage.getItem('utilisateurconnecter');
    // siloger=localStorage.getItem('siloger');
    // utilisateurconnecter=localStorage.getItem('utilisateurconnecter');
    if(siloger=false || !utilisateurconnecter)
    this.router.navigate(['/connexion']);
    else
    this.authoservice.setlocalStorag(utilisateurconnecter)

  }



  title = 'bibliotheque';

  name = new FormControl('', [Validators.required]);

    unloger:string="";
    utilisateurconnecter:string="";

  constructor(public authoservice: AuthentificationserviceService, private router: Router) {  }


  
  deconnexion(){
    this.authoservice.deconnexion()




  }


}