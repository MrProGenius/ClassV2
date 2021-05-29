import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/artigo.service';
import {Artigo} from 'src/app/class/artigo';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  listaService : ListaService;

  constructor(lista : ListaService) {
    this.listaService = lista;
  }

  ngOnInit(): void {
  }

  Comprar(artigo : Artigo){
    artigo.carrinho = true;
    setTimeout(function(){ alert("Artigo comprado"); }, 200);
  }


}
