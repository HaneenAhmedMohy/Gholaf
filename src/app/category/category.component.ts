import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
//service
import {  FservService } from '../fserv.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //services variable
  catigoryData: Array<object>;
  constructor( private data : FservService ) 
  {
    this.catigoryData = [];
    this.getCatigoryData();
    console.log(this.catigoryData);
   }

   //services
  getCatigoryData(): void {
    // let path: string = ' ./assets/categoryData.json';
    let path: string = 'http://gholaf.com/selectbookdata.php';
    this.data.getData(path).subscribe(
      res => {
        this.catigoryData = res;
        console.log(res);
    console.log(this.catigoryData);
        
      },
      err => {
        console.log(err);
      },
      () => { }
    );
  }

  ngOnInit() {
  }

}
