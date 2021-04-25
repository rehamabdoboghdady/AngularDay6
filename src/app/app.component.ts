import { Component,ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ProductsComponent) childComponent:ProductsComponent;
  title = 'ass1';
 ngAfterViewInit(){
   this.childComponent.RenderValues();
 }
}

