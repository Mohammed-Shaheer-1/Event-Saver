import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../service/event-service.service';

@Component({
  selector: 'app-deleat-event',
  templateUrl: './deleat-event.component.html',
  styleUrls: ['./deleat-event.component.css']
})
export class DeleatEventComponent implements OnInit {
event:any
  constructor(private eventservice:EventServiceService) { }

  ngOnInit(): void {
    this.eventservice.showdelete().subscribe((result:any)=>{
      console.log("show",result);
      this.event=result
    },(result:any)=>{
      console.log("show history err ",result);
    })
  }
}
