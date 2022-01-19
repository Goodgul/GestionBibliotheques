import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationserviceService {

  public utilisteur=[

    {
        prenom:"nawal", motdepasse:"123456"},
{ prenom:"aya", motdepasse:"520"}

  ]

  constructor() { }
}
