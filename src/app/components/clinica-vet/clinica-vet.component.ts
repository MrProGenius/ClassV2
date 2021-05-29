import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-clinica-veterinaria',
  templateUrl: './clinica-vet.component.html',
  styleUrls: ['./clinica-vet.component.css']
})
export class ClinicaVeterinariaComponent implements OnInit {

  agendaService: PhoneBookService;

  constructor(private pService: PhoneBookService) {
     this.agendaService = pService;
  }

  ngOnInit(): void {
  }

}
