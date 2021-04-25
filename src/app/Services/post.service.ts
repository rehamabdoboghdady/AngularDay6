import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PostsDetails } from 'src/app/API/Post_Details';
import { IPosts} from 'src/app/Shared Classes/iposts';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  url='https://jsonplaceholder.typicode.com/posts';
  fakeUrl=PostsDetails.GetAll;

  returnAllPosts():Observable<IPosts[]>
  {
    return this.http.get<IPosts[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }

}
