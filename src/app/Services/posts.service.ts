import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IComment, IPost } from '../SharedClassesAndTypes/InterFaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url:string="https://jsonplaceholder.typicode.com/posts";
  Commenturl:string="";

  constructor(private http:HttpClient) { }
  
  getAllPosts():Observable<IPost[]>
  {
    return this.http.get<IPost[]>(this.url).pipe(
      catchError(error=>{
        return throwError(()=>error.message||"Server Problem");
      })    
    );
  }

  getComment(id:number):Observable<IComment[]>
  {
    this.Commenturl=this.url+id+"/comments";
    return this.http.get<IComment[]>(this.Commenturl);
  }

}
