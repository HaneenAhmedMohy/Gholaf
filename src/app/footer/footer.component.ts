import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, NgModel } from '@angular/forms';
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
  
  closeResult: string;
  constructor( private http:HttpClient , private modalService: NgbModal) { }

  open(content:any) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
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


  

  
  