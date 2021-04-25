import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {UsersDetails } from 'src/app/API/User_Details';
import { IUsers } from 'src/app/Shared Classes/iusers';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url='https://jsonplaceholder.typicode.com/users';
  fakeUrl=UsersDetails.GetAll;

  GetAllUsers():Observable<IUsers[]>
  {
    return this.http.get<IUsers[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }
}
