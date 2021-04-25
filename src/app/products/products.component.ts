import { Component, OnInit } from '@angular/core';
import {IProduct} from '../Shared Classes/iproduct';
import {ICategory} from '../Shared Classes/icategory';
import {DiscountOffers} from '../Shared Classes/discount-offers';
import{ProductService} from '../Services/product.service'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 
Discount:DiscountOffers;
StoreName:String;
StoreLogo:String;
ProductList:IProduct[];
CategoryList:ICategory[];
ClientName:String;
IsPurshased:Boolean;
flag:Boolean;
flagid:Boolean;
AllProducts:any=[];
ProductId:any;
id:any;
  constructor(private productsrv:ProductService, private activatedRoute:ActivatedRoute,private router:Router) {
    this.Discount=DiscountOffers.x2;
    this.StoreName="Hawawie";
    this.StoreLogo='/assets/image.jpg';
    this.ClientName="Reham";
    this.IsPurshased=true;
this.ProductList=[{ID:1,Name:"Nokia 1 Plus",Quantity:4,Price:2000,Img:'/assets/Nokia 1 Plus.jpg'},
{ID:2,Name:"Hawawie",Quantity:5,Price:4000,Img:'/assets/Xiaomi Poco M3.jpg'},
{ID:3,Name:"OPPO Reno 3",Quantity:2,Price:5000,Img:'/assets/Oppo Reno 3.jpg'},
{ID:4,Name:"Oppo A73",Quantity:5,Price:2600,Img:'/assets/Oppo A73.jpg'}];
     this.CategoryList=[{ID:1,Name:"Category1"},{ID:2,Name:"Category2"},{ID:3,Name:"Category3"}];
    this.flag=true;
    this.flagid=true;
   
   }
   

  ngOnInit(): void {
    
  }
  Bye()
  {
    if(this.IsPurshased==true)
    {
      this.IsPurshased=false;
    }
    else
    {
      this.IsPurshased=true;
    }
  }
  RenderValues()
  {
    this.AllProducts =this.productsrv.getAllProducts();
    console.log(this.AllProducts);
    if(this.flag==true)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
   
  RenderValuesById(id:any)
  {
    console.log(id);
    this.ProductId=this.productsrv.getProductById(id);
   
    if(this.flagid==true)
    {
      this.flagid=false;
    }

    else
    {
      this.flagid=true;
    }
    }
    ProductsWithDiscount()
  {
    this.router.navigate(['ProWithDiscount'],{relativeTo:this.activatedRoute})
  
  }

  ProductsWithOutDiscount()
  {
    this.router.navigate(['ProWithOutDiscount'],{relativeTo:this.activatedRoute})
  }
    

}
