import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgForm, NgModel } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
//service
import { ShareDataService } from '../share-data.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchResult : object;
  // ,private urlHistoryService: ShareDataService
  constructor( private http:HttpClient ,private urlHistoryService: ShareDataService ) {
    this.searchResult ={};
    // this.urlHistoryService.setUrlHistoryObj(this.searchResult);
   }
  ngOnInit() {  
  }
  submitData(data){
    console.log(data);
    if(data==" ")
    {
      console.log("error");
    }
    else{
      this.http.get('http://gholaf.com/search.php?query='+data,httpOptions).subscribe(res=>{
      console.log(res);
      this.searchResult = res;
      console.log(this.searchResult);
      this.urlHistoryService.setUrlHistoryObj(this.searchResult);
     
      
    },err =>{
      console.log(err);
      console.log('error happened');
    })
    
    }
    
  }
}



