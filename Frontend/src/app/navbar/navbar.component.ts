import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() Onevent=new EventEmitter()
  @Output() OnDeleatEvent=new EventEmitter()
  @Output() Onlogout=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  event(){
       this.Onevent.emit()
  }
  deleatEvent(){
       this.OnDeleatEvent.emit()
  }
  logout(){
      this.Onlogout.emit()
  }

}
