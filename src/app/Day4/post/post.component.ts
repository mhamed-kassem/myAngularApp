import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  PostsList:any;
  ErrorMsg:any;

  constructor(private PostServic:PostsService,private router:Router,private activateRoute:ActivatedRoute) 
  { 

  }

  ngOnInit(): void 
  {
    this.PostServic.getAllPosts().subscribe((data: any)=>{this.PostsList=data;},(error: any)=>this.ErrorMsg=error);
  }
  
  goToCommentPage(PostId:any)
  {
    this.router.navigate(["comment",{"id":PostId}],{relativeTo:this.activateRoute});   
  }


}
