import { Component, OnInit } from '@angular/core';
import {  FservService } from '../fserv.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData: Array<object>;
  constructor( private data : FservService ) { 
    this.cartData = [];
    this.getCartData();
  }

   //services
   getCartData(): void {
    let path: string = ' ./assets/cart.json';
    this.data.getData(path).subscribe(
      res => {
        this.cartData = res;
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
