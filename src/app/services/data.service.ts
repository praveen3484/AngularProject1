import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
    public token : string;
  constructor(private http : HttpClient) { }
    baseurl;

  //POST : Student
  public Register(registerStudent):Observable<any> {
        return this.http.post(environment.baseurl+'/api/Account/Register/',registerStudent);
      }

  //POST : Login
      public Login(LoginDetails): Observable<any>
      {
        var data = "grant_type=password&username="+LoginDetails.Email+"&password="+LoginDetails.Password; 
          return this.http.post(environment.baseurl+'/Token',data)
                            .map((res : Response)=>
                            {
                               
                                debugger;
                                let user = [];
                                user.push(res);
                                console.log(user);
                                // let token = res.json() && res.access_token;
                                console.log(user);
                                if (user) 
                                {
                                    localStorage.setItem('currentUser', JSON.stringify(user[0].access_token));  
                                   // localStorage.setItem('currentUser', user.access_token);  
                                    return true;                                        
                                }
                                else
                                {   
                                    return false;   
                                }           
                            });
      }
}
