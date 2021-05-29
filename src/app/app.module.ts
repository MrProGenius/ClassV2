import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { ClinicaVeterinariaComponent } from './components/clinica-vet/clinica-vet.component';
import { FooterComponent } from './components/footer/footer.component';
import { EvAndRefComponent } from './components/ev-ref/ev-ref.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { FourOrfourComponent } from './components/four-orfour/four-orfour.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { AddComponent } from './components/lista-compras/add/add.component';
import { BuyComponent } from './components/lista-compras/buy/buy.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculadoraComponent,
    NavBarComponent,
    EvAndRefComponent,
    ClinicaVeterinariaComponent,
    FooterComponent,
    CookiesComponent,
    FourOrfourComponent,
    ListaComprasComponent,
    AddComponent,
    BuyComponent,
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
