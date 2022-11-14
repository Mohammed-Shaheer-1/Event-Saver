import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private route:Router,private fb:FormBuilder,private auth:AuthserviceService) { }

  ngOnInit(): void {
  
  }
  registration=this.fb.group({
  name: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  email: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  password: ['',[Validators.required,Validators.pattern('[0-9 A-Z a-z ]*')]],
  dob: ['',[Validators.required]],
  })
  signUp(){
    var name=this.registration.value.name
    var email=this.registration.value.email
    var password=this.registration.value.password
    var dob=this.registration.value.dob
    console.log(name,email,password,dob);
    if(this.registration.valid){
      this.auth.register(name,email,password,dob).subscribe((result:any)=>{
        console.log("results",result.email);
        localStorage.setItem('userid',JSON.stringify(result.email))
        this.route.navigateByUrl('create-event')
        
      },(result:any)=>{
        console.log("err",result);
        
      })
    }
    
    
  }


 
}
