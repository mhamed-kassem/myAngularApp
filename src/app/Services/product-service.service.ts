import { IProduct } from './../SharedClassesAndTypes/IProduct';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { identifierName } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})

// Day3 Services
export class ProductServiceService {

  url: string = "/assets/Data/product.json";
  ProductList: IProduct[];

  constructor(private http: HttpClient) {
    this.ProductList = [];
    this.ProductList.push({ ID: 1, Name: "Product0", Price: 300, Quantity: 5, Img: "../../assets/product-icon.jpg" });
    this.ProductList.push({ ID: 2, Name: "Product2", Price: 690, Quantity: 18, Img: "../../assets/product-icon.jpg" });
    this.ProductList.push({ ID: 3, Name: "Product3", Price: 90, Quantity: 8, Img: "../../assets/product-icon.jpg" });
  }

  
  GetAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url).pipe(catchError(err => {
      return throwError(() => err.Message || "Server Problem");
    }
    ));

  }

  GetProductById(Id:any):IProduct|null{
    if(isNaN(Id)){return null}
    return this.ProductList.find(p=>p.ID == Id)?? null;
  }

}
