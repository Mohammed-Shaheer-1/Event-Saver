import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private fb:FormBuilder ,private auth:AuthserviceService) { }

  ngOnInit(): void {
  }
  login=this.fb.group({
    email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['',[Validators.required,Validators.pattern('[0-9 A-Z a-z ]*')]],
  })

  signIn(){
    var email=this.login.value.email
    var password=this.login.value.password
   if(this.login.valid){
    this.auth.login(email,password).subscribe((result:any)=>{
      console.log("login success",result);
      localStorage.setItem('userid',JSON.stringify(result.email))
      this.route.navigateByUrl('create-event')
    },(result:any)=>{
      console.log("err",result);
      
      
    })
   } 
  }

}
