import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
   
  register(name:any,email:any,password:any,dateOfbirth:any){
    const data={
      name,
      email,
      password,
      dateOfbirth
    }
     return this.http.post('http://localhost:3000/event/register',data)
  }
  login(email:any,password:any){
     const data={
      email,
      password
     }
     return this.http.post('http://localhost:3000/event/login',data)
  }

}
