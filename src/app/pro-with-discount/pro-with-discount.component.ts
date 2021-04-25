import { Component, OnInit } from '@angular/core';
import {DiscountOffers} from '../Shared Classes/discount-offers';
import {IProduct} from '../Shared Classes/iproduct';

@Component({
  selector: 'app-pro-with-discount',
  templateUrl: './pro-with-discount.component.html',
  styleUrls: ['./pro-with-discount.component.scss']
})
export class ProWithDiscountComponent implements OnInit {
  ProductList: IProduct[] = [];
  Discount:DiscountOffers;
  constructor() {
    this.ProductList=[{ID:1,Name:"Nokia 1 Plus",Quantity:4,Price:2000,Img:'/assets/Nokia 1 Plus.jpg'},
    {ID:2,Name:"Hawawie",Quantity:5,Price:4000,Img:'/assets/Xiaomi Poco M3.jpg'},
    {ID:3,Name:"OPPO Reno 3",Quantity:2,Price:5000,Img:'/assets/Oppo Reno 3.jpg'},
    {ID:4,Name:"Oppo A73",Quantity:5,Price:2600,Img:'/assets/Oppo A73.jpg'}];

    this.Discount = DiscountOffers.x2;

   }

  ngOnInit(): void {
  }

}
