import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  UsersList:any;
  ErrorMsg:any;

  constructor(private userService:UsersService) 
  {   
  }

  
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data: any)=>{
      this.UsersList=data;
    },(error: any)=>{
      this.ErrorMsg=error
    });
  }
  

}
