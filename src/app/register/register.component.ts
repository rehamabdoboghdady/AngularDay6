import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../CustomValidator/UserName.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  Sites: any = ['facebook','twitter ','google'];
  // userModel=new User('','',"","","");

  registerForm=this.fb.group({
    userName :['',[Validators.required,ForbiddenNameValidator(/user/)]],
    email:[''],
    password:[''],
    confirmPassword:[''],
    siteName: [''],
  });
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  Add()
{
 this.comments.push(this.fb.control(''));
}

}
