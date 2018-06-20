import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { user } from '../user';
import { FservService } from '../fserv.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'text/plain'
  })
};

@Component({
  selector: 'app-regest',
  templateUrl: './regest.component.html',
  styleUrls: ['./regest.component.css']
})

export class RegestComponent implements OnInit {

  dataForm: object;

  constructor(private fservService: FservService, private http: HttpClient) {
    this.dataForm = {};
  }

  adduser(form: NgForm): void {
    // console.log(data);
    console.log(form.value);
    var x = JSON.stringify(this.dataForm);
    console.log(x);

    this.http.post('http://gholaf.com/regist.php', form.value).subscribe(res => {
      console.log(res)
    });
  }

  submitData(data, data2, data3, data4) {
    console.log(data);
    console.log(data2);
    this.http.get('http://gholaf.com/regist.php?query=' + data + '&query2=' + data2 + '&query3=' + data3 + '&query4=' + data4, httpOptions).subscribe(res => {
      // console.log(res);
    }, err => {
      //  console.log(err);
      // console.log('error happened');
    })
  }

  ngOnInit() { }
}
