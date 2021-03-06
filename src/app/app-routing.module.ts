import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { ClinicaVeterinariaComponent } from './components/clinica-vet/clinica-vet.component';
import { EvAndRefComponent } from './components/ev-ref/ev-ref.component';
import { FourOrfourComponent } from './components/four-orfour/four-orfour.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/lista-compras/add/add.component';
import { BuyComponent } from './components/lista-compras/buy/buy.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { PcolorComponent } from './components/pcolor/pcolor.component';
import { ScolorComponent } from './components/Pcolor/scolor/scolor.component';
import { RegistoComponent } from './components/registo/registo.component';
const routes: Routes = [
  {path: "", component:HomeComponent },
  {path: "home", component:HomeComponent },
  {path: "calculadora", component:CalculadoraComponent},
  {path: "evRef", component:EvAndRefComponent},
  {path: "clinica", component:ClinicaVeterinariaComponent},
  {path: "fourorfour", component:FourOrfourComponent},
  {path: "registo", component: RegistoComponent},
  {path: "chuck", component:ChuckComponent},
  {path:"color", component: PcolorComponent,
  children:[
    {path:":color", component: ScolorComponent}
  ]},
  {path: "listacompras", component:ListaComprasComponent,

    children: [
    {path: 'add', component: AddComponent},
    {path: 'buy', component: BuyComponent}
  ]
},
  {path: "**", redirectTo: "fourorfour"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
