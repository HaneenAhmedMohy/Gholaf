import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  styles:[ 
 `.aktif{background-color:#deeced;color:#177777}
  .pasif{background-color:#177777}
  a.nav-link{
    color: white;
    font-family: subtitle;
    font-size: 2rem;
  }` 

  ]
})
export class FeaturedComponent implements OnInit {

  active=true;
  // active2=true;
  // active3=false;
  // active4=false;
  onClick(){
    this.active=!this.active;
    // this.active2=this.active2;
    // this.active3=this.active3;
    // this.active4=this.active4;

  }
  
  // onClick2(){
  //   this.active1=!this.active1;
  //   this.active2=!this.active2;
  //   this.active3=this.active3;
  //   this.active4=this.active4;
  // }
  // onClick3(){
  //   this.active1=!this.active1;
  //   this.active2=!this.active2;
  //   this.active3=!this.active3;
  //   this.active4=this.active4;
  // }
  // onClick4(){
  //   this.active1=!this.active1;
  //   this.active2=!this.active2;
  //   this.active3=!this.active3;
  //   this.active4=!this.active4;
  // }

  Arr = Array;
  	num:number = 8;
  constructor(
  	private router: Router
  ) { }

  redirectTo():void{
  	this.router.navigate(['/login/']);
  }

  bestSellerRedirect():void{
  	this.router.navigate(['bestseller']);
  }

  newestBooksRedirect():void{
  	this.router.navigate(['newestbooks']);
  }

  mostDownloadedRedirect():void{
  	this.router.navigate(['mostdownloaded']);
  }

  famousAuthorsRedirect():void{
  	this.router.navigate(['famousauthors']);
  }

  
  ngOnInit() {
  }

}


