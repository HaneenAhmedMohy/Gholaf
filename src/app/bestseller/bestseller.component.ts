import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.scss']
})
export class BestsellerComponent implements OnInit {

  Arr = Array;
  num:number = 8;
  constructor() { }

  ngOnInit() {
  }

}
