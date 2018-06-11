import { Component, OnInit } from '@angular/core';
//service
import {  FservService } from '../fserv.service';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.scss']
})
export class BestsellerComponent implements OnInit {

  //services variable
  mostseller: Array<object>;
  
  // Arr = Array;
  // num:number = 8;
  constructor( private data : FservService ) {
    this.mostseller = [];
    this.getmostseller();
    
   }
//services
getmostseller(): void {
  // let path: string = ' ./assets/categoryData.json';
  let path: string = 'http://gholaf.com/mostseller.php';
  this.data.getData(path).subscribe(
    res => {
      this.mostseller = res;
      console.log(res);
    console.log(this.mostseller);
      
      
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
