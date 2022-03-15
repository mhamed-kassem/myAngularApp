import { IProduct } from './../SharedClassesAndTypes/IProduct';
import { Component, OnInit } from '@angular/core';
import { ICategory ,DiscountOffers} from '../SharedClassesAndTypes/ICategory';
//import { DiscountOffers}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount: DiscountOffers;
  StoreName:string;
  StoreLogo:string;
  ProductList:IProduct[];
  CategoryList:ICategory[];
  ClientName:string;
  IsPurshased:boolean;

  constructor() { 
    this.Discount=DiscountOffers['10%'];
    this.StoreName="Jumia";
    this.StoreLogo="/src/assets/image.png";
    this.ProductList=[];
    this.ProductList.push({ID:1,Name:"Product1",Price:300,Quantity:5,Img:"/src/assets/image.png"});
    this.ProductList.push({ID:2,Name:"Product2",Price:690,Quantity:18,Img:"/src/assets/image.png"});
    this.CategoryList=[];
    this.CategoryList.push({ID:1,Name:"Category1"});
    this.CategoryList.push({ID:2,Name:"Cat2"});
    this.ClientName="Client1";
    this.IsPurshased=false;
  }

  ngOnInit(): void {
  }

}
