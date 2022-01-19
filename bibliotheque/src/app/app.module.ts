import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BibliothequeComponent } from './components/bibliotheque/bibliotheque.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { ConnexionComponent } from './components/connexion/connexion.component';




@NgModule({
  declarations: [

    AppComponent,
    BibliothequeComponent,
    HomeComponent,
    TestComponent,
    UtilisateurComponent,
    ConnexionComponent,
    
    
  ],
  imports: [
    MatSelectModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
