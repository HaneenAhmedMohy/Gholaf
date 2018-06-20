import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//service
import {  FservService } from '../fserv.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( private http:HttpClient) { }

  ngOnInit() {
  }

  submitData(data ,data2){
    console.log(data);
    console.log(data2);
    this.http.get('http://gholaf.com/contact.php?query='+data +'&query2='+data2,httpOptions).subscribe(res=>{
      // console.log(res);
    },err =>{
      //  console.log(err);
      // console.log('error happened');
    })
  }

}
