import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/artigo.service';
import {Artigo} from 'src/app/class/artigo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  listaService : ListaService;

  constructor(private lista : ListaService) {
    this.listaService = lista;

  }

  ngOnInit(): void {
  }

  AdicionarLista(nome, preco){
    this.listaService.listaCompras.push(new Artigo(nome, preco));
  }

}
