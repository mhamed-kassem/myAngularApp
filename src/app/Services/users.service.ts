import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../SharedClassesAndTypes/InterFaces';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  url:string="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }
  
  getAllUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this.url).pipe(
      catchError(error=>{
        return throwError(()=>error.message||"Server problem");
      })
    );
  }


}
