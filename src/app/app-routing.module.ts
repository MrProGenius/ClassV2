import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './components/anime/anime.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ClinicaVeterinariaComponent } from './components/clinica-vet/clinica-vet.component';
import { EvAndRefComponent } from './components/ev-ref/ev-ref.component';
import { FourOrfourComponent } from './components/four-orfour/four-orfour.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/lista-compras/add/add.component';
import { BuyComponent } from './components/lista-compras/buy/buy.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
const routes: Routes = [
  {path: "", component:HomeComponent },
  {path: "home", component:HomeComponent },
  {path: "calculadora", component:CalculadoraComponent},
  {path: "evRef", component:EvAndRefComponent},
  {path: "clinica", component:ClinicaVeterinariaComponent},
  {path: "fourorfour", component:FourOrfourComponent},
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
