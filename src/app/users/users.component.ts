import { Component, OnInit } from '@angular/core';
import {UserService } from 'src/app/Services/user.service';
import { IUsers } from 'src/app/Shared Classes/iusers';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList:IUsers[]=[];
  constructor(private userServices:UserService) { }
  errorMsg="";
  ngOnInit(): void {
   
 
    this.userServices.GetAllUsers().subscribe(
      userData=>
      {
        this.userList=userData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )
  }

}
