import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes/discount-offers';
import { IProduct } from '../Shared Classes/iproduct';
@Component({
  selector: 'app-pro-with-out-discount',
  templateUrl: './pro-with-out-discount.component.html',
  styleUrls: ['./pro-with-out-discount.component.scss']
})
export class ProWithOutDiscountComponent implements OnInit {
  ProductList: IProduct[] = [];
  Discount:DiscountOffers;
  constructor() {
    this.ProductList=[{ID:5,Name:"Nokia 1 Plus",Quantity:4,Price:2000,Img:'/assets/Nokia 1 Plus.jpg'},
    {ID:6,Name:"Hawawie",Quantity:5,Price:4000,Img:'/assets/Xiaomi Poco M3.jpg'}];
    this.Discount = DiscountOffers.x1;
   }

  ngOnInit(): void {
  }

}
