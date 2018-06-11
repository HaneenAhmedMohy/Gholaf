import { Component, OnInit } from '@angular/core';
//service
import {  FservService } from '../fserv.service';

@Component({
  selector: 'app-newestbooks',
  templateUrl: './newestbooks.component.html',
  styleUrls: ['./newestbooks.component.scss']
})
export class NewestbooksComponent implements OnInit {

  //services variable
  newest: Array<object>;

  Arr = Array;
  num:number = 8;
  constructor( private data : FservService ) {
    this.newest = [];
    this.getnewest();
    
   }

//services
getnewest(): void {
  // let path: string = ' ./assets/categoryData.json';
  let path: string = 'http://gholaf.com/newest.php';
  this.data.getData(path).subscribe(
    res => {
      this.newest = res;
      console.log(res);
    // console.log(this.mostdownloaded);
      
      
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
