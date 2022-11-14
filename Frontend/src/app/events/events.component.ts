import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../service/event-service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event:any
  array:any=[]
  getarray:any
  eventname:any
  eventdate:any
  priority:any



  constructor(private route:Router,private eventservice:EventServiceService,private http:HttpClient) {
  
   }

  ngOnInit(): void {
    this.eventname =JSON.parse(localStorage.getItem('eventname')||"")
    this.eventdate =JSON.parse(localStorage.getItem('eventdate')||"")
   this.priority =JSON.parse(localStorage.getItem('priority')||"")
    this.eventservice.getevent().subscribe((result:any)=>{
      this.getarray=result
      
     

      console.log("get",this.getarray);
      
    },(result:any)=>{
      console.log("err",result);
      
    })
   

 

  
  }
  
  deleteEvent(id:any){
    console.log(id);

 
    window.location.reload()
     this.eventservice.deleteevent(id).subscribe((result:any)=>{
      console.log("del",result);
      alert("Event deleted")
      let email =JSON.parse(localStorage.getItem('userid')||"")
      let data={
        date:result.date,
        eventNames:result.eventName,
        priority:result.priority,
        email:email
      }

    console.log(data);
    
     this.array.push(data)
     console.log(this.array);
     
      
      this.http.post('http://localhost:3000/event/delethistory',data).subscribe((result)=>{
        console.log("historbjbby",result);
        
      },(result)=>{
        console.log("errr history",result);
        
      })
        
     },(result:any)=>{
      console.log("err",result);
      
     })
  }

 

}
