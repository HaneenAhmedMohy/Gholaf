import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostdownloaded',
  templateUrl: './mostdownloaded.component.html',
  styleUrls: ['./mostdownloaded.component.scss']
})
export class MostdownloadedComponent implements OnInit {

  Arr = Array;
  num:number = 8;
  constructor() { }

  ngOnInit() {
  }

}
