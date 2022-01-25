import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {



  url="http://localhost:8099/bibliotheques"


  constructor(private http: HttpClient) { }


  getBibliothequeparmotcle(motcle:any){

    return this.http.get("http://localhost:8099/bibliotheques/search/ByName?titre="+motcle ); 

  }

/**********************************avoir les livre d une bibliotheque donnée**************************************************** */
  getlivreparbibliotheque(motcle:any){

    return this.http.get("http://localhost:8099/livres/search/Bytitrebiblio?titre="+motcle ); 

  }
///////////////////////////***************avoir la quantit des livre entre deux valeur donnée*********************************// */

getquantiteBetwen(valeur1:any, valeur2:any){


 return this.http.get("http://localhost:8099/livres/search/livreenquantitbetwen?quantitmin="+valeur1+"&quantitmax="+valeur2);

}





  getBibliotheque(){
    return this.http.get(this.url); 

  }



  saveBibliotheque(bibliotheque:any){

    return this.http.post("http://localhost:8099/bibliotheques",bibliotheque);
  }
  supprimerBibliotheque(idBibliotheque:any){

    return this.http.delete("http://localhost:8099/bibliotheques/"+idBibliotheque)
  }
  modifierBibliotheque(Bibliothequehtml :any){

    return this.http.patch("http://localhost:8099/bibliotheques/"+Bibliothequehtml.idbib,Bibliothequehtml)
  }

/////////////////////////////////////**********************************creer un service methode a utiliser pour tous les composant(2eme methode) */
public host:string="http://localhost:8099"
public getRessource(url:any){


  return this.http.get(this.host+url);
}





  }

