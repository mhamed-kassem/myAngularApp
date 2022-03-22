import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../SharedClassesAndTypes/InterFaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url:string="https://jsonplaceholder.typicode.com/posts/";
  
  constructor(private http:HttpClient) { }

  getComment(id:number):Observable<IComment[]>
  {
    this.url=this.url+id+"/comments";
    return this.http.get<IComment[]>(this.url);
  }
}
