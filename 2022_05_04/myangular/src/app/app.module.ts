import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MintaComponent } from './minta/minta.component';
import { FeladatComponent } from './feladat/feladat.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { AdatkezelesComponent } from './adatkezeles/adatkezeles.component';
import { ImportalasComponent } from './importalas/importalas.component';
import { EredmenyekComponent } from './eredmenyek/eredmenyek.component';

@NgModule({
  declarations: [
    AppComponent,
    MintaComponent,
    FeladatComponent,
    NotfoundComponent,
    PipesComponent,
    AdatkezelesComponent,
    ImportalasComponent,
    EredmenyekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
