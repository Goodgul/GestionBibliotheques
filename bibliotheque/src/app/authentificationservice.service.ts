import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationserviceService {

  ////////////////////////////////////////////////////////////les variables/////////////
  erreur = 0;
  public utilisateurconnecter: string="";
  public siloger:boolean=false;
  
  public roles: string[] = [];


/////////////////////////////////////////////////tableau de données///////////////////////
  public adherents = [

    {
      nom: "nawal", motdepasse: "123456", roles: ['ADMIN']
    },



    { nom: "aya", motdepasse: "520", roles: ['user'] }

  ]

  //////////////////////////////////////////////////costructeur////////////////////////////

  constructor(private router: Router) { }


//////////////////////////////////////////////////
setData(utilisateurconnecter:any) {
  const jsonData = JSON.stringify(utilisateurconnecter)
  localStorage.setItem('utilisateurconnecter', jsonData)
  let session =localStorage.getItem('utilisateurconnecter');
  // console.log(session)
}


  /////////////////////////////////////////////// connexion/////////////////////////////////


  autho(nom: any, motdepasse: any) {
    this.adherents.forEach(element => {
      if (element.nom == nom && element.motdepasse == motdepasse) {
        this.utilisateurconnecter = element.nom
        this.roles = element.roles;
        this.siloger=true;
        localStorage.setItem('utilisateurconnecter',this.utilisateurconnecter);
        localStorage.setItem('siloger',String(this.siloger));
        
        let var1=localStorage.getItem('siloger');
       console.log(var1)
      
        this.router.navigate(['/biblio'])

                // console.log("vous etes bien connecter");
      } else {
        this.erreur = 1;
      };


    });
  }


  ////////////////////////////////// deconnexion ///////////////////////////////////////////
  deconnexion() {
      this.utilisateurconnecter="";
      this.roles=[""];
      localStorage.removeItem('utilisateurconnecter')
      this.router.navigate(['/connexion'])



  }




/////////////////////////////////////// fonction de verification d admin et simple utilisateur
  siAdmin(): Boolean {

    if (!this.roles)
      return false;
    return (this.roles.indexOf('ADMIN') > -1);

  }

  //////////////////////////////////////methode pou garder la session/////////////////////////////////////////////
  setlocalStorag(login:string){
    this.utilisateurconnecter=login;
    this.siloger=true;
    this.getroles(login);
  }
/////////////////////////////////***********recherche le role apres une actualisation***************** */

  getroles(nom:string){
    this.adherents.forEach((element)=>{
      if(element.nom==nom){

        this.roles=element.roles;
      }


    
    });
  }
}