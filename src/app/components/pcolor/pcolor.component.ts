import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pcolor',
  templateUrl: './pcolor.component.html',
  styleUrls: ['./pcolor.component.css']
})
export class PcolorComponent implements OnInit {
color;
  constructor(private activeRoute : ActivatedRoute) { }
//ActiveRoute é o link o 
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      params => this.color = params.color
    )
  }

}
