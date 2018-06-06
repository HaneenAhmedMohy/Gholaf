import { Component, OnInit } from '@angular/core';
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
   }

   //services
  getCatigoryData(): void {
    let path: string = ' ./assets/categoryData.json';
    this.data.getData(path).subscribe(
      res => {
        this.catigoryData = res;
        // console.log(res);
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
