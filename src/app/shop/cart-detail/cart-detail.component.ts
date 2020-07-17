import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(public cart: Cart,
              public router: Router) { }

  ngOnInit(): void {
  }

}
