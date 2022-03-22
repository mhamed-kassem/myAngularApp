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

  url: string = "../../assets/Data/product.json";
  ProductList: IProduct[]=[];
  

  constructor(private http: HttpClient) {
    
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
