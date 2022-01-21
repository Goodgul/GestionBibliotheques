import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliothequeComponent } from './components/bibliotheque/bibliotheque.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';

const routes: Routes = [
  { path: 'biblio', component:BibliothequeComponent },
  { path: '', component:HomeComponent },
  { path: 'test', component:TestComponent },
  { path: 'utilisateur', component:UtilisateurComponent },
  { path: 'connexion', component:ConnexionComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
