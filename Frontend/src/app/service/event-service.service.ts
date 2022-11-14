import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor( private http:HttpClient) { }

  addevent(eventName:any,date:any,priority:any,email:any){
    const data={
      eventName,
      date,
      priority,
      email
    }
    return this.http.post('http://localhost:3000/event/addEvent',data)
  }
  getevent(){
    let email =JSON.parse(localStorage.getItem('userid')||"")
   return this.http.get('http://localhost:3000/event/addEvent/'+email)
  }
  deleteevent(id:any){
    return this.http.delete('http://localhost:3000/event/delete/'+id)
  }
  showdelete(){
    let email =JSON.parse(localStorage.getItem('userid')||"")
    return this.http.get('http://localhost:3000/event/delethistory/'+email)
  }

}
