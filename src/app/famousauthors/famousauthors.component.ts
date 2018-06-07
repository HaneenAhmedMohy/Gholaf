import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-famousauthors',
  templateUrl: './famousauthors.component.html',
  styleUrls: ['./famousauthors.component.scss']
})
export class FamousauthorsComponent implements OnInit {

  Arr = Array;
  num:number = 8;
  constructor() { }

  ngOnInit() {
  }

}
