import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EventServiceService } from '../service/event-service.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
   id:any=''
 
  constructor(private route:Router,private fb:FormBuilder,private eventservice:EventServiceService,private http:HttpClient) { }

  ngOnInit(): void {
  this.id= JSON.parse(localStorage.getItem('userid') || "")  

  }
  addevent=this.fb.group({
    name:[''],
    date:[''],
    priority:['']
  })

  Eventadd(){
   var eventname=this.addevent.value.name
   var eventdate=this.addevent.value.date
   var priority=this.addevent.value.priority
   console.log(eventname,eventdate,priority);
   let email =JSON.parse(localStorage.getItem('userid')||"")

   
   if(this.addevent.valid){
    this.eventservice.addevent(eventname,eventdate,priority,email).subscribe((result:any)=>{
    
      alert(result.message)
      localStorage.setItem('eventname',JSON.stringify(eventname))
      localStorage.setItem('eventdate',JSON.stringify(eventdate))
      localStorage.setItem('priority',JSON.stringify(priority))
      window.location.reload()
    },(result:any)=>{
      console.log("add event errr",result);
      
    })
   }
 

  }
  event(){
      this.route.navigateByUrl('events')
  }
  deleteEvent(){
    this.route.navigateByUrl('deleat-event')
  }
  logout(){
    let email =JSON.parse(localStorage.getItem('userid')||"")
    this.http.delete('http://localhost:3000/event/logout/'+email).subscribe((result:any)=>{
      console.log("logout",result);
      
    },(result:any)=>{
      console.log("err logout",result);
      
    })
  }

}
