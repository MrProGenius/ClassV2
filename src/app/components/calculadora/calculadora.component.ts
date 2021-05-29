import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
valor1 = 0;
valor2 = 0;
resultado;
sinal = "";
calcula(){
  //this.resultado = Number(this.valor1) + Number(this.valor2);
  this.resultado =  eval(this.valor1+ this.sinal +this.valor2);
}

}
