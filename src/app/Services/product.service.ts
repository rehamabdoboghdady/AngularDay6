import { Injectable } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import{IProduct} from '../Shared Classes/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductList: any=[];
  constructor() { 
    this.ProductList=[{ID:5,Name:"Nokia 1 Plus",Quantity:4,Price:2000,Img:'/assets/Nokia 1 Plus.jpg'},
{ID:6,Name:"Hawawie",Quantity:5,Price:4000,Img:'/assets/Xiaomi Poco M3.jpg'},
{ID:7,Name:"OPPO Reno 3",Quantity:2,Price:5000,Img:'/assets/Oppo Reno 3.jpg'},
{ID:8,Name:"Oppo A73",Quantity:5,Price:2600,Img:'/assets/Oppo A73.jpg'}];
  }
  getAllProducts(): IProduct[]{
    return this.ProductList;
  }

getProductById(id:number){
  for(var pro of this.ProductList)
  if(pro.ID==id)
  return pro;
  return null;
}

}
