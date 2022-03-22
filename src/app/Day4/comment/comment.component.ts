import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap  } from '@angular/router';
import { CommentsService } from 'src/app/Services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  CommentsList:any=[];
  id:any;

  constructor(private comment:CommentsService,private activateRoute:ActivatedRoute) 
  {

  }
  
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param:ParamMap)=>
    {
      this.id=param.get("id");
    });

    this.renderValues();
  }

  renderValues()
  {
    this.comment.getComment(this.id).subscribe((data: any)=>{this.CommentsList=data});
  }


}
