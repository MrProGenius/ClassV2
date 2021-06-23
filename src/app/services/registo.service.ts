import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistoService {
link = "http://moreiramoises.pt/server/apis/signup.php";
link2 = "http://moreiramoises.pt/server/apis/createChart.php";

constructor(private http : HttpClient) { }

    registar(nome, pass){
      let datToSend:FormData = new FormData();
      datToSend.append("username", nome);
      datToSend.append("password", pass);
      return this.http.post(this.link, datToSend);
    }
    criarpersonagem(){
      let datToSend:FormData = new FormData();
      datToSend.append("name", "SouLindo");
      datToSend.append("atk", "10");
      datToSend.append("isMonster", "false");
      datToSend.append("int", "10");
      datToSend.append("vida", "10");
      datToSend.append("idPlayer", "76");

      return this.http.post(this.link2, datToSend);

    }
   }

