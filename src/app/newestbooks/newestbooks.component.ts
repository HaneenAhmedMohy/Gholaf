import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newestbooks',
  templateUrl: './newestbooks.component.html',
  styleUrls: ['./newestbooks.component.scss']
})
export class NewestbooksComponent implements OnInit {

  Arr = Array;
  num:number = 8;
  constructor() { }

  ngOnInit() {
  }

}
