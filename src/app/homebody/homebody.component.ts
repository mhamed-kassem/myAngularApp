import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-homebody',
  templateUrl: './homebody.component.html',
  styleUrls: ['./homebody.component.scss']
})
export class HomebodyComponent implements OnInit {

  title = 'Home';

  ProductChildList:any=[];
  @ViewChild(ProductsComponent)product!:ProductsComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  callChildRenderValuesMethod():void{
    this.product.RenderValues();
    this.ProductChildList= this.product.ProductServicList;

  }
}
