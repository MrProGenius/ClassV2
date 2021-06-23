import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RegistoService } from 'src/app/services/registo.service';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {
  nome;
  pass;
  constructor(private registo : RegistoService) { }
  registar(){
    console.log(this.nome, this.pass)
    this.registo.criarpersonagem()
    .subscribe(data => console.log(data));
  }
  ngOnInit(): void {
  }


}


