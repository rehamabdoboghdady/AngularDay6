import { Component, OnInit } from '@angular/core';
import {PostService } from 'src/app/Services/post.service';
import { IPosts} from 'src/app/Shared Classes/iposts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postList:IPosts[]=[];
  constructor(private postServices:PostService) { }
  errorMsg="";
  ngOnInit(): void {
    this.postServices.returnAllPosts().subscribe(
      userData=>
      {
        this.postList=userData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )
  }

}
