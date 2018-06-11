import { Component, OnInit } from '@angular/core';
//service
import {  FservService } from '../fserv.service';


@Component({
  selector: 'app-mostdownloaded',
  templateUrl: './mostdownloaded.component.html',
  styleUrls: ['./mostdownloaded.component.scss']
})
export class MostdownloadedComponent implements OnInit {
//services variable
mostdownloaded: Array<object>;
  // Arr = Array;
  // num:number = 8;
  constructor( private data : FservService ) {
    this.mostdownloaded = [];
    this.getmostdownloaded();
    
   }
//services
getmostdownloaded(): void {
  // let path: string = ' ./assets/categoryData.json';
  let path: string = 'http://gholaf.com/mostdownload.php';
  this.data.getData(path).subscribe(
    res => {
      this.mostdownloaded = res;
      console.log(res);
    console.log(this.mostdownloaded);
      
      
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
