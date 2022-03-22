import { IProduct } from './../SharedClassesAndTypes/IProduct';
import { Component, OnInit } from '@angular/core';
import { ICategory ,DiscountOffers} from '../SharedClassesAndTypes/ICategory';
import { ProductServiceService } from '../Services/product-service.service';
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
  ProductServicList:IProduct[]=[];
  ErrorMsg:any;
  CategoryList:ICategory[];
  ClientName:string;
  IsPurshased:boolean;
  NoDiscount=DiscountOffers.no;
  ProductService:ProductServiceService;
  constructor(productService:ProductServiceService) {
    this.ProductService= productService;
    this.Discount=DiscountOffers.A15;
    this.StoreName="Jumia";
    this.StoreLogo="../../assets/logo.png";
    this.ProductList=[];
    this.ProductList.push({ID:1,Name:"Product0",Price:300,Quantity:5,Img:"../../assets/product-icon.jpg"});
    this.ProductList.push({ID:2,Name:"Product2",Price:690,Quantity:18,Img:"../../assets/product-icon.jpg"});
    this.ProductList.push({ID:3,Name:"Product3",Price:90,Quantity:8,Img:"../../assets/product-icon.jpg"});
    this.CategoryList=[];
    this.CategoryList.push({ID:1,Name:"Category1"});
    this.CategoryList.push({ID:2,Name:"Cat2"});
    this.ClientName="Client1";
    this.IsPurshased=false; 
  }



  ngOnInit(): void {
  }

  //method
  ToggleFlag():void{
    this.IsPurshased=(!this.IsPurshased);
  }

  //method
  RenderValues(){
    this.ProductService.GetAllProducts().subscribe(productData=>
      {
        this.ProductServicList=productData;
      },error=>{this.ErrorMsg=error});
  }


}
