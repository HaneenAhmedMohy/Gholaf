import { Component, OnInit } from '@angular/core';
//service
import {  FservService } from '../fserv.service';


@Component({
  selector: 'app-famousauthors',
  templateUrl: './famousauthors.component.html',
  styleUrls: ['./famousauthors.component.scss']
})
export class FamousauthorsComponent implements OnInit {

  //services variable
  popularauthor: Array<object>;
  // Arr = Array;
  // num:number = 8;
  constructor( private data : FservService ) {
    this.popularauthor = [];
    this.getpopularauthor();
    
   }
//services
getpopularauthor(): void {
  // let path: string = ' ./assets/categoryData.json';
  let path: string = 'http://gholaf.com/popularauthor.php';
  this.data.getData(path).subscribe(
    res => {
      this.popularauthor = res;
      console.log(res);
    console.log(this.popularauthor);
      
      
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
