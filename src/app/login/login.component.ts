import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  login(form: NgForm) {
    this.http.post('http://gholaf.com/login.php', form.value).subscribe(res => {
      console.log(res);
    }, err => {
      console.log('error');

    });
  }
  ngOnInit() {
  }

}
