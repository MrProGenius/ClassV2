import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-ref.component.html',
  styleUrls: ['./ev-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tamanho:number=200;
  cor:string="white";
  changecolor(corR:string){
    this.cor=corR;
  }

    Aumentar(referencia){
      this.tamanho=this.tamanho*2;
      if(this.tamanho > 800){
        this.tamanho = 800;
        referencia.style.width = this.tamanho+"px";
        setTimeout(function(){ alert("Chegou ao tamanho Máximo"); }, 200);
      }
      else {
        referencia.style.width = this.tamanho+"px";
      }


  }
    Diminuir(referencia){
      this.tamanho=this.tamanho/2;
    if(this.tamanho < 100){
      this.tamanho = 100;
      referencia.style.width = this.tamanho+"px";
      setTimeout(function(){ alert("Chegou ao tamanho Minimo"); }, 200);
    }
    else {
      referencia.style.width = this.tamanho+"px";
    }
}

  rodar(referencia){
    referencia.className += " girar";

    setInterval(function(){ referencia.classList.remove("girar"); }, 15000);
  }
}
