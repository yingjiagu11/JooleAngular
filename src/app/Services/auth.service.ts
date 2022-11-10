import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _url = 'http://localhost:8080/UserController';

  constructor(private _http: HttpClient) { }

  authenticate(userName:String,userPassword:String){
    //let queryParams = new HttpParams
    return this._http.post<any>(this._url + '/user/authenticate?user_name=' + 
    userName+ '&user_password=' + userPassword, 
    {
      // user_name:userName,
      // user_password:userPassword
    }
    );

  }

  
}
