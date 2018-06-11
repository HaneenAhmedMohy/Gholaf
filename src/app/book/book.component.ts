import { Component, OnInit } from '@angular/core';
import {  FservService } from '../fserv.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
    
  catigoryData: Array<object>;
  constructor(private data : FservService) {
      this.catigoryData = [];
      this.getCatigoryData();
  }

 //services
  getCatigoryData(): void {
    let path: string = ' ./assets/books.json';
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
